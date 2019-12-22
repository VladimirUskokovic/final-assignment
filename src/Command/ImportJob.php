<?php

namespace App\Command;

use App\Entity\Queue;
use App\Entity\Seller;
use App\Service\QueueService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportJob extends Command
{
  protected static $defaultName = 'import:job';

  private $entityManager;
  private $queueService;

  public function __construct(EntityManagerInterface $entityManager, QueueService $queueService)
  {
    $this->entityManager = $entityManager;
    $this->queueService = $queueService;

    parent::__construct();
  }

  protected function configure()
  {
    $this
      // the short description shown while running "php bin/console list"
      ->setDescription('Executes one job from queue')

      // the full command description shown when running the command with
      // the "--help" option
      ->setHelp('This command executes one job from queue every minute.');
  }

  protected function execute(InputInterface $input, OutputInterface $output)
  {
    $queue = $this->entityManager
      ->getRepository(Queue::class)
      ->findOneBy([], ['created_at' => 'ASC']);

    if ($queue) {
      $this->queueService->runJob($queue);
    } else {
      $sellers = $this->getSellers();

      foreach ($sellers as $key => $seller) {
        foreach ($seller->getPagesToFetch() as $page) {
          $queue = new Queue();
          $queue->setCreatedAt((new \DateTime('now'))->getTimestamp());
          $queue->setUrl("{$seller->getLink()}{$page}");
          $queue->setType(Queue::NAVIGATION_TYPE);

          $this->entityManager->persist($queue);
        }
      }

      $this->entityManager->flush();
    }
  }

  private function getSellers()
  {
    $sellerRepository = $this->entityManager->getRepository(Seller::class);
    $sellers = $sellerRepository->findAll();

    if (!$sellers) {
      return null;
    }

    return $sellers;
  }
}
