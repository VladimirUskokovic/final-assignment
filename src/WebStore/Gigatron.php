<?php

namespace App\WebStore;

use Symfony\Component\DomCrawler\Crawler;

class Gigatron implements WebStoreInterface
{
  CONST URL = 'https://gigatron.rs';

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
      $availability = (bool) $this->crawler->filter('.on-stock')->count();
    } catch (\Exception $exception) {
      return false;
    }

    return $availability;
  }

  public function getPrice(): float
  {
    try {
      $price = (float) $this->crawler->filter('[itemprop="price"]')->attr('content');
    } catch (\Exception $exception) {
      return 0;
    }

    return $price;
  }

  public function getNextPage()
  {
    if ($this->crawler->filter('.pagination .next:not(.disabled)')->count()) {
      return $this->crawler->filter('.pagination .next:not(.disabled)')->link();
    }

    return false;
  }

  public function collectOffersLinkFromPage(): array
  {
    return $this->crawler->filter('.product-name')->links();
  }

  public function getUpc()
  {
    $upcWithText = $this->crawler->filter('.ean')->text();

    return preg_replace('/\D/', '', $upcWithText);
  }

  public function getCategoryName(): string
  {
    return $this->crawler->filter('.breadcrumbs > li:nth-last-child(2)')->text();
  }

  public function getSpecifications(): array
  {
    $specifications = [];
    $this->crawler
      ->filter('#specifikacija .product-specs > tbody > tr')
      ->each(function ($node) use (&$specifications) {
        $specificationName = trim($node->filter('th')->text());
        $specificationValue = trim($node->filter('td')->text());

        $specifications[] = ['name' => $specificationName, 'value' => $specificationValue];
      });

    return $specifications;
  }

  public function getTitle(): string
  {
    return $this->crawler->filter('.product-details .main h1')->text();
  }

  public function getDescription(): string
  {
    return '';
  }

  public function getImages(): array
  {
    $images = [];
    $imagesNode = $this->crawler->filter('.product-tabs ul img')->images();

    foreach ($imagesNode as $image) {
      $images[] = self::URL.$image->getNode()->getAttribute('src');
    }

    return $images;
  }
}
