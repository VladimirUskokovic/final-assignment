<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Offer;
use App\Entity\Product;
use App\Entity\ProductDetails;
use App\Entity\ProductSpecification;
use App\Entity\Specification;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends Controller
{

  /**
   * @Route("/admin", name="admin")
   */
  public function index()
  {
    $storeProcesses = [];

    return $this->render('admin/base.html.twig', [
      'storeProcesses' => $storeProcesses
    ]);
  }
}
