<?php

namespace App\Api\Model;

use OpenApi\Annotations as OA;

/**
 *  @OA\Schema(schema="Seller")
 */
class Seller
{
  /**
   * @var string
   * @OA\Property()
   */
  public $name;

  /**
   * @var string
   * @OA\Property()
   */
  public $url;
}
