<?php

namespace App\Api\Model;

use OpenApi\Annotations as OA;

/**
 *  @OA\Schema(schema="Product")
 *
 *  @OA\Schema(
 *   schema="ProductItem",
 *    allOf={
 *      @OA\Schema(ref="#/components/schemas/Product"),
 *      @OA\Schema(
 *         @OA\Property(
 *           property="offers",
 *           type="array",
 *           @OA\Items(ref="#/components/schemas/Offer"),
 *         ),
 *       )
 *   }
 *  )
 */
class Product
{
  /**
   * @var int
   * @OA\Property()
   */
  public $id;

  /**
   * @var string
   * @OA\Property()
   */
  public $name;

  /**
   * @var string
   * @OA\Property()
   */
  public $upc;


  /**
   * @var Category
   * @OA\Property()
   */
  public $category;

  /**
   * @var string
   * @OA\Property()
   */
  public $description;


  /**
   * @OA\Property(
   *   type="array",
   *   @OA\Items(
   *     type="string"
   *   )
   * )
   */
  public $images = [];

  /**
   * @var Specification[]
   * @OA\Property(nullable=true)
   */
  public $specifications = [];

  /**
   * @var Offer[]|null
   */
  public $offers;
}
