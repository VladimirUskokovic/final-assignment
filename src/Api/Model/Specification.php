<?php

namespace App\Api\Model;

use OpenApi\Annotations as OA;

/**
 *  @OA\Schema(schema="Specification")
 */
class Specification
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
  public $value;
}
