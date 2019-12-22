<?php

namespace App\Service;

use App\Entity\Queue;
use App\Entity\Seller;
use Doctrine\ORM\EntityManagerInterface;

class QueueService
{
  /**
   * @var EntityManagerInterface;
   */
  private $entityManager;

  public function __construct(EntityManagerInterface $entityManager)
  {
    $this->entityManager = $entityManager;
  }

  public function runJob(Queue $queue)
  {
    $seller = $this->getSeller($queue->getUrl());

    StoreImporter::create($this->entityManager, $seller)
      ->setUrl($queue->getUrl())
      ->setPageType($queue->getType())
      ->run();

    $this->entityManager->remove($queue);
    $this->entityManager->flush();
  }

  private function getSeller(string $url)
  {
    $urlObject = parse_url($url);

    if (!$urlObject) {
      return false;
    }

    $seller = $this
      ->entityManager
      ->getRepository(Seller::class)
      ->findOneBy(['link' => "{$urlObject['scheme']}://{$urlObject['host']}"]);

    if (!$seller) {
      return false;
    }

    return $seller;
  }
}
