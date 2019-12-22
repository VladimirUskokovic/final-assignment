<?php

namespace App\Api\Converter;

use App\Api\Converter\Declaration\AbstractConverter;
use App\Api\Model\Specification;
use App\Entity\SpecificationVariant;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SpecificationConverter extends AbstractConverter
{
  protected function configure(OptionsResolver $resolver): void
  {
    $resolver->setRequired('specification')->setAllowedTypes('specification', SpecificationVariant::class);
  }

  protected function createModel()
  {
    return new Specification();
  }

  /**
   * @param Specification $model
   * @param array $data
   */
  protected function mapModel($model, array $data): void
  {
    /** @var SpecificationVariant $specification */
    $specification = $data['specification'];

    $model->name = $specification->getSpecification()->getName();
    $model->value = $specification->getValue();
  }
}
