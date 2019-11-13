<?php

namespace App\Repository;

use App\Controller\Api\BaseApiController;
use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    private $queryBuilder;

    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Product::class);

        $this->queryBuilder =
          $this->createQueryBuilder('p')
            ->join('p.productDetails', 'pd')
            ->leftJoin('pd.productSpecification', 'ps')
            ->join('p.offers', 'o')
            ->join('p.category', 'c');
    }

    public function one()
    {
      return $this->queryBuilder
        ->getQuery()
        ->getOneOrNullResult();
    }

    public function collection()
    {
      return $this->queryBuilder
        ->addOrderBy('p.id')
        ->setMaxResults(BaseApiController::DEFAULT_NUMBER_OF_ITEMS_PER_PAGE)
        ->getQuery()
        ->getResult();
    }

    public function setLastId($id)
    {
      $this->queryBuilder
        ->andWhere('p.id > :id')
        ->setParameter('id', $id);
    }

    public function setOrderBy($orderBy, $dir): void
    {
      if ($orderBy === 'price') {
        $this->queryBuilder
          ->addOrderBy('o.price', $dir);
      } else if ($orderBy === 'name') {
        $this->queryBuilder
          ->addOrderBy('pd.title', $dir);
      }
    }

    public function filterByTitle($title)
    {
      $this->queryBuilder
        ->andWhere('pd.title LIKE :title')
        ->setParameter('title', "%{$title}%");
    }

    public function filterBySpecification($name, $value)
    {
      $this->queryBuilder
        ->andWhere("ps.value LIKE :{$name}")
        ->setParameter($name, "%{$value}%");

      return $this;
    }

    public function filterByCategory($category)
    {
      $this->queryBuilder
        ->andWhere('c.id = :category')
        ->setParameter('category', $category);

      return $this;
    }

  /**
   * @var integer
   * @return Product|null
   * @throws
   */
  public function getProduct($id)
  {
    return $this->createQueryBuilder('p')
      ->join('p.productDetails', 'pd')
      ->leftJoin('p.category', 'c')
      ->join('p.offers', 'o')
      ->andWhere('p.id = :id')
      ->setParameter('id', $id)
      ->getQuery()
      ->getOneOrNullResult();
  }

  /**
   * @return Product[]
   */
    public function getProducts(): array
    {
      return $this->createQueryBuilder('p')
        ->join('p.productDetails', 'pd')
        ->join('p.category', 'c')
        ->setMaxResults(20)
        ->getQuery()
        ->getResult();
    }

  /**
   * @return Product[]
   */
  public function getTopProducts(): array
  {
    return $this->createQueryBuilder('p')
      ->leftJoin('p.category', 'c')
      ->join('p.productDetails', 'pd')
      ->join('p.offers', 'o')
      ->orderBy('o.price')
      ->setMaxResults(20)
      ->getQuery()
      ->getResult();
  }

//    /**
//     * @return Product[] Returns an array of Product objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Product
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
