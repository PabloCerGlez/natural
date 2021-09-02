<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RaffleStatus extends Model
{
    const PENDING = 1;
    const END = 2;
    const CANCELED = 3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
    ];


    public function raffles()
    {
        return $this->hasMany(Raffle::class);
    }
}
