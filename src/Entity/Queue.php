<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QueueRepository")
 */
class Queue
{
  public const PRODUCT_TYPE = 'product';
  public const NAVIGATION_TYPE = 'navigation';

  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $url;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $type;

  /**
   * @ORM\Column(type="integer")
   */
  private $created_at;

  public function getId(): ?int
  {
      return $this->id;
  }

  public function getUrl(): ?string
  {
      return $this->url;
  }

  public function setUrl(string $url): self
  {
      $this->url = $url;

      return $this;
  }

  public function getType(): ?string
  {
      return $this->type;
  }

  public function setType(string $type): self
  {
      $this->type = $type;

      return $this;
  }

  public function getCreatedAt(): ?int
  {
      return $this->created_at;
  }

  public function setCreatedAt(int $created_at): self
  {
      $this->created_at = $created_at;

      return $this;
  }
}
