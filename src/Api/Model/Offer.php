<?php

namespace App\Api\Model;

use OpenApi\Annotations as OA;

/**
 *  @OA\Schema(schema="Offer")
 */
class Offer
{
  /**
   * @var integer
   * @OA\Property()
   */
  public $id;

  /**
   * @var integer
   * @OA\Property()
   */
  public $productId;

  /**
   * @var float
   * @OA\Property()
   */
  public $price;

  /**
   * @var boolean
   * @OA\Property()
   */
  public $availability;

  /**
   * @OA\Property(ref="#/components/schemas/Datetime")
   */
  public $updatedAt;

  /**
   * @var string
   * @OA\Property()
   */
  public $link;

  /**
   * @var Seller
   * @OA\Property()
   */
  public $seller;
}
