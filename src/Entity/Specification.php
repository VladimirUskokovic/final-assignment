<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SpecificationRepository")
 */
class Specification
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
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Category", mappedBy="specification", cascade={"persist"})
     * @ORM\JoinTable(name="categories_specifications")
     */
    private $categories;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SpecificationVariant", mappedBy="specification")
     */
    private $specificationVariants;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->specificationVariants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addSpecification($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->contains($category)) {
            $this->categories->removeElement($category);
            $category->removeSpecification($this);
        }

        return $this;
    }

    /**
     * @return Collection|SpecificationVariant[]
     */
    public function getSpecificationVariants(): Collection
    {
        return $this->specificationVariants;
    }

    public function addSpecificationVariant(SpecificationVariant $specificationVariant): self
    {
        if (!$this->specificationVariants->contains($specificationVariant)) {
            $this->specificationVariants[] = $specificationVariant;
            $specificationVariant->setSpecification($this);
        }

        return $this;
    }

    public function removeSpecificationVariant(SpecificationVariant $specificationVariant): self
    {
        if ($this->specificationVariants->contains($specificationVariant)) {
            $this->specificationVariants->removeElement($specificationVariant);
            // set the owning side to null (unless already changed)
            if ($specificationVariant->getSpecification() === $this) {
                $specificationVariant->setSpecification(null);
            }
        }

        return $this;
    }
}
