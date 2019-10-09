<?php

namespace App\Api\Converter;

use App\Api\Converter\Declaration\AbstractConverter;
use App\Api\Model\Category;
use App\Api\Model\Product;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryConverter extends AbstractConverter
{
  protected function configure(OptionsResolver $resolver): void
  {
    $resolver->setRequired('category')->setAllowedTypes('category', \App\Entity\Category::class);
  }

  protected function createModel()
  {
    return new Category();
  }

  /**
   * @param Product $model
   * @param array $data
   */
  protected function mapModel($model, array $data): void
  {
    /** @var \App\Entity\Category $category */
    $category = $data['category'];

    $model->id = $category->getId();
    $model->name = $category->getName();
  }
}
