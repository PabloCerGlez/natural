<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Carroucel;

class CarroucelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Carroucel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(4),
            'subtitle' => $this->faker->word,
            'description' => $this->faker->text,
            'img' => $this->faker->word,
            'order' => $this->faker->numberBetween(-10000, 10000),
        ];
    }
}
