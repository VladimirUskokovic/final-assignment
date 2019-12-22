<?php

namespace App\Controller;

use App\Entity\Queue;
use App\Entity\Seller;
use App\Service\QueueService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller {

    private $entityManager;
    private $queueService;

    public function __construct(EntityManagerInterface $entityManager, QueueService $queueService)
    {
      $this->entityManager = $entityManager;
      $this->queueService = $queueService;
    }

  /**
     * @Route("/", name="index")
     */
    public function index() {
      return $this->redirectToRoute('app_api_documentation_html');
    }

    /**
    * @Route("/cronjob", name="cronjob")
    */
    public function cronjob() {
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

      return new Response();
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
