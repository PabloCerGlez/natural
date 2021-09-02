<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoyaltyPoint extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'period',
        'point',
        'distributor_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'point' => 'decimal:2',
        'distributor_id' => 'integer',
    ];


    public function distributor()
    {
        return $this->belongsTo(Distributor::class);
    }

}
