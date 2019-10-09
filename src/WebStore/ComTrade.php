<?php

namespace App\WebStore;

use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\DomCrawler\Link;

class ComTrade implements WebStoreInterface
{
  CONST URL = 'https://comtradeshop.com';

  /**
   * @var Crawler
   */
  private $crawler;

  public function setCrawler(Crawler $crawler)
  {
    $this->crawler = $crawler;
  }

  public function getAvailability(): bool
  {
    try {
      $availability = (bool) $this->crawler->filter('.btn-add-to-cart')->count();
    } catch (\Exception $exception) {
      return false;
    }

    return $availability;
  }

  public function getPrice(): float
  {
    try {
      $price = (float) $this->crawler->filterXpath('//meta[@property="product:price:amount"]')->attr('content');
    } catch (\Exception $exception) {
      return 0;
    }

    return $price;
  }

  public function getNextPage()
  {
    if ($this->crawler->filter('.toolbar-top li.active + li a')->count()) {
      return $this->crawler->filter('.toolbar-top li.active + li a')->link();
    }

    return false;
  }

  public function collectOffersLinkFromPage(): array
  {
    return $this->crawler->filter('.product-name a')->links();
  }

  public function getUpc(): string
  {
    if ($this->crawler->filter('.product-sku span:last-of-type')->count()) {
      return $this->crawler->filter('.product-sku span:last-of-type')->text();
    }

    return '';
  }

  public function getCategoryName(): string
  {
    $category = $this->crawler->filter('.sharkskin-breadcrumb li:nth-child(2) a')->text();

    if (strpos($category, 'Laptop') !== false) {
      return 'Laptop računari';
    }

    if (strpos($category, 'Telefoni') !== false) {
      return 'Mobilni telefoni';
    }

    if (strpos($category, 'Oprema') !== false) {
      return 'Monitori';
    }

    if (strpos($category, 'Foto') !== false) {
      return 'Digitalni fotoaparati';
    }

    if (strpos($category, 'TV') !== false) {
      return 'Televizori';
    }

    return '';
  }

  public function getSpecifications(): array
  {
    $specifications = [];
    $this->crawler
      ->filter('.product-description-box .table tr')
      ->each(function ($node) use (&$specifications) {
        if ($node->filter('td')->count() > 2) {
          if ($node->filter('td:first-of-type')->count() && $node->filter('td:last-of-type')->count()) {
            $specificationName = trim($node->filter('td:first-of-type')->text());
            $specificationValue = trim($node->filter('td:last-of-type')->text());

            $specifications[] = ['name' => $specificationName, 'value' => $specificationValue];
          }
        } else {
          if ($node->filter('th')->count() && $node->filter('td')->count()) {
            $specificationName = trim($node->filter('th')->text());
            $specificationValue = trim($node->filter('td')->text());

            $specifications[] = ['name' => $specificationName, 'value' => $specificationValue];
          }
        }

      });

    return $specifications;
  }

  public function getTitle(): string
  {
    if ($this->crawler->filter('.product-name h1')->count()) {
      return $this->crawler->filter('.product-name h1')->text();
    }

    return '';
  }

  public function getDescription(): string
  {
    if ($this->crawler->filter('.product-description-box h5')->count()) {
      return $this->crawler->filter('.product-description-box h5')->text();
    }

    return '';
  }

  public function getImages(): array
  {
    $images = [];

    $this->crawler->filter('.product-thumbnail-link')->each(function ($node) use (&$images) {
      $images[] = self::URL.$node->attr('data-image');
    });

    return $images;
  }
}
