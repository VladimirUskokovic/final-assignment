<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/doc")
 */
class DocumentationController extends AbstractController
{
    private $projectDir;

    public function __construct(string $projectDir)
    {
      $this->projectDir = $projectDir;
    }

  /**
     * @Route("/", name="app_api_documentation_html")
     */
    public function htmlDoc()
    {
      return $this->render('client/pages/doc/index.html.twig');
    }

  /**
   * @Route("/openapi.json", name="app_api_documentation_json")
   */
  public function openApiJson()
  {
    return JsonResponse::fromJsonString(file_get_contents("{$this->projectDir}/openapi.json"));
  }
}
