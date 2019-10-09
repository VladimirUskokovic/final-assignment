<?php

namespace App\WebStore;

use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\DomCrawler\Link;

class WinWin implements WebStoreInterface
{
  CONST URL = 'https://winwin.rs';

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
      $availability = (bool) $this->crawler->filter('.in-stock')->count();
    } catch (\Exception $exception) {
      return false;
    }

    return $availability;
  }

  public function getPrice(): float
  {
    try {
      $priceText = $this->crawler->filter('.price')->text();
      $priceText = str_replace('.', '', $priceText);
      $price = (float) str_replace('&nbsp;din', '', $priceText);
    } catch (\Exception $exception) {
      return 0;
    }

    return $price;
  }

  public function getNextPage()
  {
    if ($this->crawler->filter('.toolbar-bottom li.current + li a')->count()) {
      return $this->crawler->filter('.toolbar-bottom li.current + li a')->link();
    }

    return false;
  }

  public function collectOffersLinkFromPage(): array
  {
    return $this->crawler->filter('.product-name a')->links();
  }

  public function getUpc(): string
  {
    if ($this->crawler->filter('#product-attribute-specs-table tr:nth-child(2) td')->count()) {
      return $this->crawler->filter('#product-attribute-specs-table tr:nth-child(2) td')->text();
    }

    return '';
  }

  public function getCategoryName(): string
  {
    if (strpos($this->crawler->getUri(), 'laptop') !== false) {
      return 'Laptop računari';
    }

    if (strpos($this->crawler->getUri(), 'mobilni') !== false) {
      return 'Mobilni telefoni';
    }

    if (strpos($this->crawler->getUri(), 'monitori') !== false) {
      return 'Monitori';
    }

    if (strpos($this->crawler->getUri(), 'fotoaparati') !== false) {
      return 'Digitalni fotoaparati';
    }

    if (strpos($this->crawler->getUri(), 'televizori') !== false) {
      return 'Televizori';
    }

    return '';
  }

  public function getSpecifications(): array
  {
    $specifications = [];
    $this->crawler
      ->filter('#product-attribute-specs-table > tbody > tr:not(:nth-child(2))')
      ->each(function ($node) use (&$specifications) {
        $specificationName = trim($node->filter('th')->text());
        $specificationValue = trim($node->filter('td')->text());

        $specifications[] = ['name' => $specificationName, 'value' => $specificationValue];
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
    if ($this->crawler->filter('.description-content')->count()) {
      return $this->crawler->filter('.description-content')->text();
    }

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
