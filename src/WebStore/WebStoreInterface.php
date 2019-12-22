<?php

namespace App\WebStore;

use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\DomCrawler\Link;

interface WebStoreInterface
{
  public function setCrawler(Crawler $crawler);

  public function getAvailability(): bool;

  public function getPrice(): float;

  public function getNextPage();

  public function collectOffersLinkFromPage();

  public function getUpc();

  public function getCategoryName();

  public function getSpecifications();

  public function getTitle();

  public function getDescription();

  public function getImages();
}
