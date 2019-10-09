<?php

namespace App\Api\Model;

use OpenApi\Annotations as OA;

/**
 *  @OA\Schema(schema="Category")
 */
class Category
{
  /**
   * @var integer
   * @OA\Property()
   */
  public $id;

  /**
   * @var string
   * @OA\Property()
   */
  public $name;
}
