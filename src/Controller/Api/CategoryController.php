<?php /** @noinspection PhpDocSignatureInspection */

namespace App\Controller\Api;

use App\Api\Converter\CategoryConverter;
use App\Repository\CategoryRepository;
use OpenApi\Annotations as OA;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/categories", defaults={"_format"="json"})
 */
class CategoryController extends BaseApiController
{

  /** @var CategoryRepository */
  private $repository;

  /** @var CategoryConverter */
  private $converter;

  public function __construct(
    CategoryRepository $repository,
    CategoryConverter $converter
  ) {
    $this->repository = $repository;
    $this->converter = $converter;
  }

  /**
   * @Route("/", methods={"GET"})
   *
   * @OA\Get(
   *   path="/categories",
   *   summary="List categories",
   *   operationId="category-list",
   *   tags={"Category"},
   *
   *   @OA\Response(
   *     response=200,
   *     description="Category list",
   *     @OA\JsonContent(
   *       type="object",
   *       @OA\Property(
   *         property="items",
   *         type="array",
   *         @OA\Items(ref="#/components/schemas/Category")
   *       )
   *     )
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
   */
  public function list(): JsonResponse
  {
    $categories = $this->repository->findAll();

    if ($categories === null) {
      throw $this->createNotFoundException(sprintf('There are no available categories'));
    }

    return new JsonResponse($this->serializeCollection($categories));
  }

  /**
   * @Route("/{id}", methods={"GET"})
   *
   * @OA\Get(
   *   path="/categories/{id}",
   *   summary="Show category",
   *   operationId="category-show",
   *   tags={"Category"},
   *
   *   @OA\Parameter(
   *      @OA\Schema(type="integer"),
   *      name="id",
   *      in="path",
   *      description="Category id",
   *      required=true
   *   ),
   *
   *   @OA\Response(
   *     response=200,
   *     description="Category",
   *     @OA\JsonContent(ref="#/components/schemas/Category")
   *   ),
   *   @OA\Response(response=404, ref="#/components/responses/404"),
   *   @OA\Response(response=500, ref="#/components/responses/500")
   * )
   */
  public function show(string $id): JsonResponse
  {
    $category = $this->repository->find((int) $id);

    return new JsonResponse($this->serializeObject($category));
  }

  protected function serializeObject($object)
  {
    $data = ['category' => $object];

    return $this->converter->convert($data);
  }
}
