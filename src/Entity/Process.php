<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProcessRepository")
 */
class Process
{
  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\OneToOne(targetEntity="App\Entity\Seller", cascade={"persist", "remove"})
   * @ORM\JoinColumn(nullable=false)
   */
  private $seller;

  /**
   * @ORM\Column(type="datetime")
   */
  private $startedAt;

  /**
   * @ORM\Column(type="datetime", nullable=true)
   */
  private $finishedAt;

  /**
   * @ORM\Column(type="boolean")
   */
  private $status;

  /**
   * @ORM\Column(type="integer")
   */
  private $pid;

  public function __construct()
  {
    $this->setStatus(true);
  }

  public function getId(): ?int
    {
        return $this->id;
    }

    public function getSeller(): ?Seller
    {
        return $this->seller;
    }

    public function setSeller(Seller $Seller): self
    {
        $this->seller = $Seller;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeInterface
    {
        return $this->startedAt;
    }

    public function setStartedAt(\DateTimeInterface $startedAt): self
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getFinishedAt(): ?\DateTimeInterface
    {
        return $this->finishedAt;
    }

    public function setFinishedAt(\DateTimeInterface $finishedAt): self
    {
        $this->finishedAt = $finishedAt;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getPid(): ?int
    {
        return $this->pid;
    }

    public function setPid(int $pid): self
    {
        $this->pid = $pid;

        return $this;
    }
}
