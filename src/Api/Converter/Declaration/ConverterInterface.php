<?php

namespace App\Api\Converter\Declaration;

interface ConverterInterface
{
    /**
     * Create new model and fill it from data array.
     *
     * @param array $data
     *
     * @return mixed
     */
    public function convert(array $data);

    /**
     * Fill the model with data from array.
     *
     * @param object $model
     * @param array  $data
     */
    public function map($model, array $data): void;
}
