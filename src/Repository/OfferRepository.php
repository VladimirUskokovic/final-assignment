<?php

namespace App\Repository;

use App\Controller\Api\BaseApiController;
use App\Entity\Offer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Offer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Offer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Offer[]    findAll()
 * @method Offer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OfferRepository extends ServiceEntityRepository
{
    private $queryBuilder;

    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Offer::class);
        $this->queryBuilder = $this->createQueryBuilder('o');
    }

    public function getOffersForProduct($id): array
    {
      return $this->createQueryBuilder('o')
        ->andWhere('o.product = :product')
        ->setParameter('product', $id)
        ->getQuery()
        ->getResult();
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
        ->orderBy('o.id')
        ->setMaxResults(BaseApiController::DEFAULT_NUMBER_OF_ITEMS_PER_PAGE)
        ->getQuery()
        ->getResult();
    }

    public function setLastId($id)
    {
      $this->queryBuilder
        ->andWhere('o.id > :id')
        ->setParameter('id', $id);
    }

    public function filterByProduct($product)
    {
      $this->queryBuilder
        ->andWhere('o.product_id = :product')
        ->setParameter('product', $product);
    }

    public function filterByMinPrice($price)
    {
      $this->queryBuilder
        ->andWhere('o.price > :price')
        ->setParameter('price', $price);

      return $this;
    }

    public function filterByMaxPrice($price)
    {
      $this->queryBuilder
        ->andWhere('o.price < :price')
        ->setParameter('price', $price);

      return $this;
    }

    public function filterByFromDate($timestamp)
    {
      $date = new \DateTime();
      $date->setTimestamp($timestamp);

      $this->queryBuilder
        ->andWhere('o.updatedAt > :date')
        ->setParameter('date', $date);

      return $this;
    }
//    /**
//     * @return Offer[] Returns an array of Offer objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Offer
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
