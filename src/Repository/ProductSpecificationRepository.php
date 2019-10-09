<?php

namespace App\Repository;

use App\Entity\ProductSpecification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProductSpecification|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductSpecification|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductSpecification[]    findAll()
 * @method ProductSpecification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductSpecificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProductSpecification::class);
    }

    // /**
    //  * @return ProductSpecification[] Returns an array of ProductSpecification objects
    //  */
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
    public function findOneBySomeField($value): ?ProductSpecification
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
