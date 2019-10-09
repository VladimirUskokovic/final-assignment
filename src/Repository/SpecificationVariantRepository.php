<?php

namespace App\Repository;

use App\Entity\SpecificationVariant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method SpecificationVariant|null find($id, $lockMode = null, $lockVersion = null)
 * @method SpecificationVariant|null findOneBy(array $criteria, array $orderBy = null)
 * @method SpecificationVariant[]    findAll()
 * @method SpecificationVariant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpecificationVariantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SpecificationVariant::class);
    }

    public function findVariant($name, $value)
    {
      return $this->createQueryBuilder('sv')
        ->join('sv.specification', 's')
        ->andWhere('s.name = :name')
        ->andWhere('sv.value = :value')
        ->setParameter('name', $name)
        ->setParameter('value', $value)
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return SpecificationVariant[] Returns an array of SpecificationVariant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SpecificationVariant
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
