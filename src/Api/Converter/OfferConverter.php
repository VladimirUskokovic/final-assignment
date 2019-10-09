<?php

namespace App\Api\Converter;

use App\Api\Converter\Declaration\AbstractConverter;
use App\Api\Model\Offer;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OfferConverter extends AbstractConverter
{
  private $sellerConverter;

  public function __construct(SellerConverter $sellerConverter)
  {
    $this->sellerConverter = $sellerConverter;
  }

  protected function configure(OptionsResolver $resolver): void
  {
    $resolver->setRequired('offer')->setAllowedTypes('offer', \App\Entity\Offer::class);
  }

  protected function createModel()
  {
    return new Offer();
  }

  /**
   * @param Offer $model
   * @param array $data
   */
  protected function mapModel($model, array $data): void
  {
    /** @var \App\Entity\Offer $offer */
    $offer = $data['offer'];

    $model->id = $offer->getId();
    $model->productId = $offer->getProduct()->getId();
    $model->price = $offer->getPrice();
    $model->availability = $offer->getAvailability();
    $model->link = $offer->getLink();
    $model->updatedAt = $offer->getUpdatedAt();
    $model->seller = $this->sellerConverter->convert(['seller' => $offer->getSeller()]);
  }
}
