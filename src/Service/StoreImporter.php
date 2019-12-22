<?php

namespace App\Service;

use App\Entity\Category;
use App\Entity\Offer;
use App\Entity\Product;
use App\Entity\ProductDetails;
use App\Entity\Queue;
use App\Entity\Seller;
use App\Entity\Specification;
use App\Entity\SpecificationVariant;
use App\WebStore\WebStoreInterface;
use Doctrine\ORM\EntityManagerInterface;
use Goutte\Client;
use Symfony\Component\Console\Output\ConsoleOutput;

class StoreImporter
{
  private $output;

  /**
   * @var EntityManagerInterface
   */
  private $entityManager;

  /**
   * @var Client
   */
  private $client;

  /**
   * @var Seller
   */
  private $seller;

  private $url;

  private $pageType;

  private $queues = [];

  /**
   * @var WebStoreInterface
   */
  private $sellerParser;

  public function __construct(EntityManagerInterface $entityManager, Seller $seller)
  {
    $this->client = new Client();
    $this->seller = $seller;
    $this->entityManager = $entityManager;

    $this->output = new ConsoleOutput();

    $className = '\\App\\WebStore\\'.$seller->getName();
    $this->sellerParser = new $className();
  }

  public static function create(EntityManagerInterface $entityManager, Seller $seller): StoreImporter
  {
    return new self($entityManager, $seller);
  }

  public function setUrl(string $url)
  {
    $this->url = $url;

    return $this;
  }

  public function setPageType(string $pageType)
  {
    $this->pageType = $pageType;

    return $this;
  }

  public function run()
  {
     $this->goToPage();

     if ($this->queues) {
       foreach ($this->queues as $queue) {
         $queueFounded = $this->entityManager->getRepository(Queue::class)->findOneBy(['url' => $queue->getUrl()]);

         if (!$queueFounded) {
           $this->entityManager->persist($queue);
         }
       }
     }

     $this->entityManager->flush();
  }

  private function goToPage()
  {
    $crawler = $this->client->request('GET', $this->url);
    $this->sellerParser->setCrawler($crawler);

    if ($this->pageType === Queue::NAVIGATION_TYPE) {
      $nextPage = $this->sellerParser->getNextPage();

      if ($nextPage) {
        $queue = new Queue();
        $queue->setUrl($nextPage->getNode()->getAttribute('href'));
        $queue->setType(Queue::NAVIGATION_TYPE);
        $queue->setCreatedAt((new \DateTime('now'))->getTimestamp());

        $this->queues[] = $queue;
      }

      $productLinks = $this->sellerParser->collectOffersLinkFromPage();

      foreach ($productLinks as $link) {
        $queue = new Queue();

        $path = $link->getNode()->getAttribute('href');

        if (strpos($path, $this->seller->getLink()) === false) {
          $path = $this->seller->getLink().$path;
        }

        $queue->setUrl($path);
        $queue->setType(Queue::PRODUCT_TYPE);
        $queue->setCreatedAt((new \DateTime('now'))->getTimestamp());

        $this->queues[] = $queue;
      }
    }

    if ($this->pageType === Queue::PRODUCT_TYPE) {
      $this->collectOffer();
    }
  }

  private function collectOffer()
  {
    $offer = $this->entityManager->getRepository(Offer::class)->findOneBy(['link' => $this->url]);

    $newOffer = false;
    $message = "";

    if ($offer) {
      $inStock = $this->sellerParser->getAvailability();
      $price = $this->sellerParser->getPrice();

      if ((int)$offer->getPrice() !== (int)$price || $offer->getAvailability() !== $inStock) {
        $oldPrice = $offer->getPrice();
        $oldStock = $offer->getAvailability();

        $offer
          ->setPrice($price)
          ->setAvailability($inStock)
          ->setUpdatedAt(new \DateTime('now'));

        $message = "UPDATED: Offer ".$offer->getId(). " and link: ".$offer->getLink()." updated price and availabilty \n";
        $message .= "Old price: ".$oldPrice."\n";
        $message .= "New price: ".$offer->getPrice()."\n";
        $message .= "Old stock: ".$oldStock."\n";
        $message .= "New stock: ".$offer->getAvailability()."\n";
      } else {
        $offer->setUpdatedAt(new \DateTime('now'));
        $message = "NOT UPDATED: Offer ".$offer->getId(). " and link: ".$offer->getLink()." crawled and not updated \n";
      }
    } else {
      $product = $this->collectProductInfoFromOffer();

      $date = new \DateTime('now');
      $offer = new Offer();

      $offer
        ->setLink($this->url)
        ->setSeller($this->seller)
        ->setProduct($product)
        ->setAvailability($this->sellerParser->getAvailability())
        ->setPrice($this->sellerParser->getPrice())
        ->setCreatedAt($date)
        ->setUpdatedAt($date);

      $newOffer = true;

      $message = "CREATED: Offer ".$offer->getId(). " and link: ".$offer->getLink()." belongs to product: ".$offer->getProduct()->getProductDetails()->getTitle()." persisted \n";
    }

    $this->entityManager->persist($offer);
    $this->entityManager->flush();

    if ($newOffer) {
      $message = "CREATED: Offer ".$offer->getId(). " and link: ".$offer->getLink()." belongs to product: ".$offer->getProduct()->getProductDetails()->getTitle()." persisted \n";
    }

   print $message;

    print "MEMORY USAGE:".memory_get_usage();
    print "\n";
  }

  private function collectProductInfoFromOffer()
  {
    $upc = $this->sellerParser->getUpc();

    $product = $this
      ->entityManager
      ->getRepository(Product::class)
      ->findOneBy(['upc' => $upc]);

    if (!$product) {
      $product = new Product();

      $product->setUpc($upc);

      $category = $this->resolveCategoryForProduct();

      if ($category) {
        $product->setCategory($category);
      }

      $productDetails = new ProductDetails();

      $productDetails = $this->getProductSpecification($productDetails, $category);
      $productDetails->setTitle($this->sellerParser->getTitle());
      $productDetails->setDescription($this->sellerParser->getDescription());
      $productDetails->setImages($this->sellerParser->getImages());

      $product->setProductDetails($productDetails);
    }

    if ($product->getId() && $product->getProductDetails()->getProductSpecification()->count()) {
      $productDetails = $this->getProductSpecification($product->getProductDetails(), $product->getCategory());
      $product->setProductDetails($productDetails);
    }

    return $product;
  }

  /**
   * @param ProductDetails $productDetails
   * @param Category $category
   * @return ProductDetails $productDetails
   */
  private function getProductSpecification($productDetails, $category): ProductDetails
  {
    $specificationsFromParser = $this->sellerParser->getSpecifications();

    foreach ($specificationsFromParser as $specificationFromParser) {
      $specificationVariant = $this->entityManager
        ->getRepository(SpecificationVariant::class)
        ->findVariant($specificationFromParser['name'], $specificationFromParser['value']);

      if (count($specificationVariant)) {
        $specificationVariant = $specificationVariant[0];
      }

      if (!$specificationVariant) {
        $specificationVariant = new SpecificationVariant();

        $specification = $this->entityManager
          ->getRepository(Specification::class)
          ->findOneBy(['name' => $specificationFromParser['name']]);

        if (!$specification) {
          $specification = new Specification();
          $specification->setName($specificationFromParser['name']);

          if ($category) {
            $specification->addCategory($category);
          }

          $this->entityManager->persist($specification);
          $this->entityManager->flush();
        }

        $specificationVariant->setSpecification($specification);
        $specificationVariant->setValue($specificationFromParser['value']);
      }

      $productDetails->addProductSpecification($specificationVariant);
    }

   return $productDetails;
  }

  private function resolveCategoryForProduct()
  {
    $categoryName = $this->sellerParser->getCategoryName();



    if ($categoryName) {
      $categoryName = trim($categoryName);
      $category = $this
        ->entityManager
        ->getRepository(Category::class)
        ->findOneBy(['name' => $categoryName]);

      if (!$category) {
        $category = new Category();
        $category->setName($categoryName);
      }

      return $category;
    }

    return null;
  }
}
