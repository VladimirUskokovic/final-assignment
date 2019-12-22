<?php

namespace App\Api\Converter\Declaration;

use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractConverter implements ConverterInterface
{
    /** @var OptionsResolver */
    private $resolver;

    public function convert(array $data)
    {
        $model = $this->createModel();
        $this->map($model, $data);

        return $model;
    }

    public function map($model, array $data): void
    {
        try {
            $data = $this->getResolver()->resolve($data);
        } catch (\Exception $e) {
            throw new \RuntimeException(sprintf(
                '%s cannot map the given data to %s. %s',
                \get_class($this),
                \get_class($this->createModel()),
                $e->getMessage()
            ), 0, $e);
        }

        $this->mapModel($model, $data);
    }

    /**
     * Create the model object.
     *
     * @return mixed
     */
    abstract protected function createModel();

    /**
     * Configure expected data in options resolver.
     *
     * @param OptionsResolver $resolver
     */
    abstract protected function configure(OptionsResolver $resolver): void;

    /**
     * Map data from array to the $model object.
     *
     * @param object $model
     * @param array  $data
     */
    abstract protected function mapModel($model, array $data): void;

    private function getResolver(): OptionsResolver
    {
        if ($this->resolver === null) {
            $this->resolver = new OptionsResolver();
            $this->configure($this->resolver);
        }

        return $this->resolver;
    }
}
