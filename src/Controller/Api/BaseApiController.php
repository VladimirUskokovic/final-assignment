<?php /** @noinspection PhpDocSignatureInspection */

namespace App\Controller\Api;

use OpenApi\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @OA\OpenApi(
 *   @OA\Info(
 *     title="API Documentation",
 *     version="1.0.0",
 *     contact={"url"=""},
 *     x={
 *       "logo"={"url"=""}
 *     },
 *     description=""
 *   ),
 *   @OA\Server(url="/api/v1")
 * )
 *
 * @OA\Schema(
 *   schema="Datetime",
 *     type="object",
 *     @OA\Property(
 *         property="date",
 *         type="string",
 *     ),
 *     @OA\Property(
 *         property="timezone_type",
 *         type="integer",
 *     ),
 *     @OA\Property(
 *         property="timezone",
 *         type="string",
 *     ),
 * )
 *
 * @OA\Schema(
 *   schema="Exception",
 *     type="object",
 *     @OA\Property(
 *         property="error",
 *         type="object",
 *         @OA\Property(property="code", type="integer"),
 *         @OA\Property(property="message", type="string")
 *     )
 * )
 *
 * @OA\Response(
 *     response=404,
 *     description="Resource not found",
 *     @OA\JsonContent(
 *         ref="#/components/schemas/Exception",
 *         example={"error": {"code": 404, "message": "Not found"}}
 *     )
 * )
 * @OA\Response(
 *     response=500,
 *     description="Server error",
 *     @OA\JsonContent(
 *         ref="#/components/schemas/Exception",
 *         example={"error": {"code": 500, "message": "Server error"}}
 *     )
 * )
 *
 */
abstract class BaseApiController extends AbstractController
{

    public const FIlTER_BY_RAM = 'ramMemory';
    public const FILTER_BY_CATEGORY = 'category';
    public const FILTER_BY_TITLE = 'title';
    public const FILTER_BY_MIN_PRICE = 'minPrice';
    public const FILTER_BY_MAX_PRICE = 'maxPrice';
    public const FILTER_BY_PRODUCT = 'product';
    public const FILTER_BY_FROM_DATE = 'fromDate';
    public const LAST_ID = 'lastId';
    public const SORT_BY = 'sortBy';
    public const SORT_DIR = 'dir';

    public const DEFAULT_NUMBER_OF_ITEMS_PER_PAGE = 20;

    protected function serializeCollection($collection): array
    {
        $items = [];
        foreach ($collection as $item) {
            $items[] = $this->serializeObject($item);
        }

        return ['items' => $items];
    }

    abstract protected function serializeObject($object);
}
