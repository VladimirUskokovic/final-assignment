<?php

namespace App\Api\Converter;

use App\Api\Converter\Declaration\AbstractConverter;
use App\Api\Model\Product;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductConverter extends AbstractConverter
{
  private $categoryConverter;

  private $specificationConverter;

  private $offerConverter;

  public function __construct(
    CategoryConverter $categoryConverter,
    SpecificationConverter $specificationConverter,
    OfferConverter $offerConverter
  )
  {
    $this->categoryConverter = $categoryConverter;
    $this->specificationConverter = $specificationConverter;
    $this->offerConverter = $offerConverter;
  }

  protected function configure(OptionsResolver $resolver): void
  {
    $resolver->setDefault('withOffers', false)->setAllowedTypes('withOffers', 'boolean');
    $resolver->setRequired('product')->setAllowedTypes('product', \App\Entity\Product::class);
  }

  protected function createModel()
  {
    return new Product();
  }

  /**
   * @param Product $model
   * @param array   $data
   */
  protected function mapModel($model, array $data): void
  {
    /** @var \App\Entity\Product $product */
    $product = $data['product'];

    $model->id = $product->getId();
    $model->name = $product->getProductDetails()->getTitle();
    $model->upc = $product->getUpc();
    $model->images = $product->getProductDetails()->getImages();
    $model->description = $product->getProductDetails()->getDescription();

    $specifications = [];
    foreach ($product->getProductDetails()->getProductSpecification() as $specification) {
      $specifications[] = $this->specificationConverter->convert(['specification' => $specification]);
    }

    $model->specifications = $specifications;

    if ($data['withOffers']) {
      $offers = [];
      foreach ($product->getOffers() as $offer) {
        $offers[] = $this->offerConverter->convert(['offer' => $offer]);
      }

      $model->offers = $offers;
    } else {
      unset($model->offers);
    }

    if ($product->getCategory()) {
      $model->category = $this->categoryConverter->convert(['category' => $product->getCategory()]);
    }
  }
}
