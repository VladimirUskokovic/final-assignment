<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductDetailsRepository")
 */
class ProductDetails
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $images = [];

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SpecificationVariant", inversedBy="productDetails", cascade={"persist"})
     */
    private $productSpecification;

    public function __construct()
    {
        $this->productSpecification = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImages(): ?array
    {
        return $this->images;
    }

    public function setImages(?array $images): self
    {
        $this->images = $images;

        return $this;
    }

    /**
     * @return Collection|SpecificationVariant[]
     */
    public function getProductSpecification(): Collection
    {
        return $this->productSpecification;
    }

    public function addProductSpecification(SpecificationVariant $productSpecification): self
    {
        if (!$this->productSpecification->contains($productSpecification)) {
            $this->productSpecification[] = $productSpecification;
        }

        return $this;
    }

    public function removeProductSpecification(SpecificationVariant $productSpecification): self
    {
        if ($this->productSpecification->contains($productSpecification)) {
            $this->productSpecification->removeElement($productSpecification);
        }

        return $this;
    }
}
