<?php /** @noinspection PhpDocSignatureInspection */

namespace App\Controller\Api;

use App\Api\Converter\ProductConverter;
use App\Repository\ProductRepository;
use OpenApi\Annotations as OA;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/products", defaults={"_format"="json"})
 */
class ProductController extends BaseApiController
{
  /** @var ProductRepository */
  private $repository;

  /** @var ProductConverter */
  private $converter;

  public function __construct(
    ProductRepository $repository,
    ProductConverter $converter
  ) {
    $this->repository = $repository;
    $this->converter = $converter;
  }

  /**
   * @Route("/top-products", methods={"GET"})
   *
   *   @OA\Get(
   *     path="/top-products",
   *     summary="List Top 20 Products",
   *     operationId="top-products-list",
   *     tags={"Product"},
   *
   *   @OA\Response(
   *     response=200,
   *     description="Top 20 products list",
   *     @OA\JsonContent(
   *       type="object",
   *       @OA\Property(
   *         property="items",
   *         type="array",
   *         @OA\Items(ref="#/components/schemas/Product")
   *       )
   *     )
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
   */
  public function topProducts(): JsonResponse
  {
    $products = $this->repository->getTopProducts();

    if ($products === null) {
      throw $this->createNotFoundException(sprintf('There are no available products'));
    }

    return new JsonResponse($this->serializeCollection($products, true));
  }

  /**
   * @Route("/", methods={"GET"})
   *
   * @OA\Get(
   *   path="/products",
   *   summary="List products",
   *   operationId="product-list",
   *   tags={"Product"},
   *
   *   @OA\Parameter(
   *     @OA\Schema(type="string"),
   *      name="title",
   *      in="query",
   *      description="Term that will be found in product title",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="string"),
   *      name="ramMemory",
   *      in="query",
   *      description="Filter by Ram memory",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="category",
   *      in="query",
   *      description="Filter by category",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="lastId",
   *      in="query",
   *      description="Set last id of item to get another 20 items",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="string"),
   *      name="sortBy",
   *      in="query",
   *      description="Set order by param, currently can set price or name",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="string"),
   *      name="dir",
   *      in="query",
   *      description="Set order by direction, allowed values are asc or desc",
   *      required=false
   *   ),
   *
   *   @OA\Response(
   *     response=200,
   *     description="Product list",
   *     @OA\JsonContent(
   *       type="object",
   *       @OA\Property(
   *         property="items",
   *         type="array",
   *         @OA\Items(ref="#/components/schemas/Product")
   *       )
   *     )
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
   */
  public function list(Request $request): JsonResponse
  {

    if ($request->query->has(BaseApiController::FIlTER_BY_RAM)) {
      $this->repository
        ->filterBySpecification(
          BaseApiController::FIlTER_BY_RAM,
          $request->query->get(BaseApiController::FIlTER_BY_RAM). ' GB'
        )
        ->filterBySpecification(
          BaseApiController::FIlTER_BY_RAM,
          $request->query->get(BaseApiController::FIlTER_BY_RAM). 'GB'
        );
    }

    if ($request->query->has(BaseApiController::FILTER_BY_CATEGORY)) {
      $this->repository->filterByCategory($request->query->get(BaseApiController::FILTER_BY_CATEGORY));
    }

    if ($request->query->has(BaseApiController::FILTER_BY_TITLE)) {
      $this->repository->filterByTitle($request->query->get(BaseApiController::FILTER_BY_TITLE));
    }

    if ($request->query->has(BaseApiController::LAST_ID)) {
      $this->repository->setLastId($request->query->get(BaseApiController::LAST_ID));
    }

    if ($request->query->has(BaseApiController::SORT_BY)) {
      $sortBy = $request->query->get(BaseApiController::SORT_BY);
      $dir = 'asc';

      if ($request->query->has(BaseApiController::SORT_DIR)) {
        $dir = $request->query->get(BaseApiController::SORT_DIR);
      }

      $this->repository->setOrderBy($sortBy, $dir);
    }

    $products = $this->repository->collection();

    if ($products === null) {
      throw $this->createNotFoundException(sprintf('There are no available products'));
    }

    return new JsonResponse($this->serializeCollection($products, true));
  }

  /**
   * @Route("/{id}", methods={"GET"})
   *
   * @OA\Get(
   *   path="/products/{id}",
   *   summary="Show product",
   *   operationId="product-show",
   *   tags={"Product"},
   *
   *   @OA\Parameter(
   *      @OA\Schema(type="integer"),
   *      name="id",
   *      in="path",
   *      description="Product id",
   *      required=true
   *   ),
   *
   *   @OA\Response(
   *     response=200,
   *     description="Product",
   *     @OA\JsonContent(ref="#/components/schemas/ProductItem")
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
  */
  public function show(string $id)
  {
    $product = $this->repository->getProduct((int) $id);

    if ($product === null) {
      throw $this->createNotFoundException(sprintf('Product with id "%s" not found.', $id));
    }

    return new JsonResponse($this->serializeObject($product, true));
  }

  protected function serializeCollection($collection, $withOffers = false): array
  {
    $items = [];
    foreach ($collection as $item) {
      $items[] = $this->serializeObject($item, $withOffers);
    }

    return ['items' => $items];
  }

  protected function serializeObject($object, $withOffers = false)
  {
    $data = [
      'product' => $object,
      'withOffers' => $withOffers
    ];

    return $this->converter->convert($data);
  }
}
