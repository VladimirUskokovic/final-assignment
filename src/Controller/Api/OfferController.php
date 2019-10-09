<?php /** @noinspection PhpDocSignatureInspection */

namespace App\Controller\Api;

use App\Api\Converter\OfferConverter;
use App\Repository\OfferRepository;
use OpenApi\Annotations as OA;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/offers", defaults={"_format"="json"})
 */
class OfferController extends BaseApiController
{

  /** @var OfferRepository */
  private $repository;

  /** @var OfferConverter */
  private $converter;

  public function __construct(
    OfferRepository $repository,
    OfferConverter $converter
  ) {
    $this->repository = $repository;
    $this->converter = $converter;
  }

  /**
   * @Route("/", methods={"GET"})
   *
   * @OA\Get(
   *   path="/offers",
   *   summary="List offers",
   *   operationId="offer-list",
   *   tags={"Offer"},
   *
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="lastId",
   *      in="query",
   *      description="Set last id of item to get another 20 items",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="minPrice",
   *      in="query",
   *      description="Set min price",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="maxPrice",
   *      in="query",
   *      description="Set max price",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="product",
   *      in="query",
   *      description="Filter by product",
   *      required=false
   *   ),
   *   @OA\Parameter(
   *     @OA\Schema(type="integer"),
   *      name="fromDate",
   *      in="query",
   *      description="Get offers from given date, provide date in timestamp value",
   *      required=false
   *   ),
   *
   *   @OA\Response(
   *     response=200,
   *     description="Offer list",
   *     @OA\JsonContent(
   *       type="object",
   *       @OA\Property(
   *         property="items",
   *         type="array",
   *         @OA\Items(ref="#/components/schemas/Offer")
   *       )
   *     )
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
   */
  public function list(Request $request): JsonResponse
  {
      if ($request->query->has(BaseApiController::LAST_ID)) {
        $this->repository->setLastId((int) $request->query->get(self::LAST_ID));
      }

      if ($request->query->has(BaseApiController::FILTER_BY_MIN_PRICE)) {
        $this->repository->filterByMinPrice((int) $request->query->get(self::FILTER_BY_MIN_PRICE));
      }

      if ($request->query->has(BaseApiController::FILTER_BY_MAX_PRICE)) {
        $this->repository->filterByMaxPrice((int) $request->query->get(self::FILTER_BY_MAX_PRICE));
      }

      if ($request->query->has(BaseApiController::FILTER_BY_PRODUCT)) {
        $this->repository->filterByProduct((int) $request->query->get(self::FILTER_BY_PRODUCT));
      }

    if ($request->query->has(BaseApiController::FILTER_BY_FROM_DATE)) {
      $this->repository->filterByFromDate((int) $request->query->get(self::FILTER_BY_FROM_DATE));
    }

      $offers = $this->repository->collection();

      if ($offers === null) {
        throw $this->createNotFoundException(sprintf('Offers not found.'));
      }

      return new JsonResponse($this->serializeCollection($offers));
  }

  /**
   * @Route("/{id}", methods={"GET"})
   *
   * @OA\Get(
   *   path="/offers/{id}",
   *   summary="Show offer",
   *   operationId="offer-show",
   *   tags={"Offer"},
   *
   *   @OA\Parameter(
   *      @OA\Schema(type="integer"),
   *      name="id",
   *      in="path",
   *      description="Offer id",
   *      required=true
   *   ),
   *
   *   @OA\Response(
   *     response=200,
   *     description="Offer",
   *     @OA\JsonContent(ref="#/components/schemas/Offer")
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
  */
  public function show(string $id, Request $request): JsonResponse
  {
    $offer = $this->repository->find((int) $id);

    return new JsonResponse($this->serializeObject($offer));
  }

  protected function serializeObject($object)
  {
    $data = ['offer' => $object];

    return $this->converter->convert($data);
  }
}
