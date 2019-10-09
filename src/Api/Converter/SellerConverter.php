<?php

namespace App\Api\Converter;

use App\Api\Converter\Declaration\AbstractConverter;
use App\Api\Model\Seller;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SellerConverter extends AbstractConverter
{
  protected function configure(OptionsResolver $resolver): void
  {
    $resolver->setRequired('seller')->setAllowedTypes('seller', \App\Entity\Seller::class);
  }

  protected function createModel()
  {
    return new Seller();
  }

  /**
   * @param Seller $model
   * @param array $data
   */
  protected function mapModel($model, array $data): void
  {
    /** @var \App\Entity\Seller $seller */
    $seller = $data['seller'];

    $model->name = $seller->getName();
    $model->url = $seller->getLink();
  }
}
