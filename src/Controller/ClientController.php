<?php

namespace App\Controller;

use App\Api\Converter\ProductConverter;
use App\Entity\Category;
use App\Entity\Offer;
use App\Entity\Product;
use App\Entity\ProductDetails;
use App\Entity\ProductSpecification;
use App\Entity\Specification;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ClientController extends Controller
{

  private $links = [];
  private $productsLink = [];
  private $linksCrawled = [];

  private $products = [];

  private $converter;

  public function __construct(ProductConverter $converter)
  {
    $this->converter = $converter;
  }


  /**
   * @Route("/client/{route}", name="client", defaults={"route": null}, requirements={"route"=".+"})
   */
  public function index()
  {
    return $this->render('base.html.twig');
  }

  /**
   * @Route("/product/{product}", name="product")
   */
  public function getProduct(Request $request, Product $product): JsonResponse
  {
    $data = ['product' => $product];

    $productModel = $this->converter->convert($data);

    return new JsonResponse($productModel);
  }

  /**
   * @Route("/products", name="products")
   */
  public function getProducts()
  {

    $products = $this->getDoctrine()->getRepository(Product::class)->getProducts();

    $productsJson = [];

    foreach ($products as $product) {
      $productJson = new \stdClass();

      $productJson->id = $product->getId();
      $productJson->upc = $product->getUpc();
      $productJson->categoryId = $product->getCategory()->getId();
      $productJson->categoryName = $product->getCategory()->getName();
      $productJson->title = $product->getProductDetails()->getTitle();
      $productJson->images = $product->getProductDetails()->getImages();
      $productJson->price = 234;

      $productsJson[] = $productJson;
    }

    return new JsonResponse($productsJson);


    $client = new Client();

    $crawler = $client->request('GET', 'https://www.gigatron.rs/');

    var_dump($crawler->filter("a[href^='https://www.gigatron.rs/']")->links())or die;

    $this->getLinksToCrawl($crawler);

    foreach ($this->links as $link) {
      $page = $client->request('GET', $link);

      $this->getProductsLinkFromPage($page);

      if (!empty($this->productsLink)) {
        foreach ($this->productsLink as $key => $productLink) {
          var_dump("key: $key");
          var_dump("product link: $productLink");

          if (isset($this->linksCrawled[$productLink])) {
            continue;
          }

          $productPage = $client->request('GET', $productLink);

          $this->getProductDetails($productPage);

          $linksCrawled[$productLink] = $productLink;
          unset($this->productsLink[$key]);

          var_dump('first loop end') or die;
        }
      }

      var_dump($this->productsLink)or die;
    }

    var_dump($this->links) or die;

    $crawler->filter('.product-list > .item')->each(function (Crawler $node) {
      $node->filter('.product-name')->each(function ($node) {
        $productDetails = new ProductDetails();
        $productDetails->setTitle($node->text());
        var_dump($productDetails);
      });
    });

    var_dump('ENd') or die;

    return new JsonResponse([
      [
        'id' => 1,
        'author' => 'Chris Colborne',
        'avatarUrl' => 'http://1.gravatar.com/avatar/13dbc56733c2cc66fbc698cdb07fec12',
        'title' => 'Bitter Predation',
        'description' => 'Thirteen thin, round towers …',
      ],
      [
        'id' => 2,
        'author' => 'Louanne Perez',
        'avatarUrl' => 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
        'title' => 'Strangers of the Ambitious',
        'description' => "A huge gate with thick metal doors …",
      ],
      [
        'id' => 3,
        'author' => 'Theodorus Dietvorst',
        'avatarUrl' => 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
        'title' => 'Outsiders of the Mysterious',
        'description' => "Plain fields of a type of grass cover …",
      ],
    ]);
  }

  private function getLinksToCrawl(Crawler $crawler)
  {
    $crawler->filter('.megamenu.product-item a:not([href="#"])')->each(function ($node) {
      $this->links[] = $node->attr('href');
    });
  }

  private function getProductsLinkFromPage(Crawler $crawler)
  {
    $crawler->filter('.product-name')->each(function ($node) {
      $this->productsLink[] = $node->attr('href');
    });
  }

  private function getProductDetails(Crawler $crawler) {
    $offerRepository = $this->getDoctrine()->getRepository(Offer::class);
    $offer = $offerRepository->findBy(['link' => $crawler->getUri()]);

    if (!$offer) {
      $offer = new Offer();
      $offer->setCreatedAt(new \DateTime('now'));
      $offer->setLink($crawler->getUri());
      $inStock = $crawler->filter('.on-stock')->count();

      $offer->setAvailability((bool)$inStock);

      $price = (float) $crawler->filter('[itemprop="price"]')->attr('content');
      $offer->setPrice($price);
    }

    $upcWithText = $crawler->filter('.ean')->text();
    $upc = preg_replace('/\D/', '', $upcWithText);

    $productRepository = $this->getDoctrine()->getRepository(Product::class);

    $product = $productRepository->findOneBy(['upc' => $upc]);

    if (!$product) {
      $product = new Product();
      $product->setUpc($upc);

      $categoryName = $crawler->filter('.breadcrumbs > li:nth-last-child(2)')->text();

      if ($categoryName) {
        $categoryName = trim($categoryName);
        $categoryRepository = $this->getDoctrine()->getRepository(Category::class);

        $category = $categoryRepository->findOneBy(['name' => $categoryName]);

        if (!$category) {
          $category = new Category();
          $category->setName($categoryName);
        }

        $product->setCategory($category);
      }

      $productDetails = new ProductDetails();
      $crawler->filter('.product-specs > tbody > tr')->each(function ($node) use ($productDetails, $category) {
        $specificationName = trim($node->filter('th')->text());
        $specificationValue = trim($node->filter('td')->text());

        $specificationRepository = $this->getDoctrine()->getRepository(Specification::class);
        $specification = $specificationRepository->findBy(['name' => $specificationName]);

        if (!$specification) {
          $specification = new Specification();
          $specification->setName($specificationName);
          $specification->addCategory($category);

          $productSpecification = new ProductSpecification();
          $productSpecification->setName($specificationValue);

          $specification->addProductSpecification($productSpecification);
          $productDetails->addProductSpecification($productSpecification);


          $category->addSpecification($specification);
        }
      });
    }

    $offer->setProduct($product);

    var_dump($offer) or die;



    $this->products[] = $product;


    var_dump($this->products);
  }
}