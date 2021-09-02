<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Raffle extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'date',
        'distributor_id',
        'reffle_status_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'distributor_id' => 'integer',
        'reffle_status_id' => 'integer',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function distributor()
    {
        return $this->belongsTo(Distributor::class);
    }

    public function raffleStatus()
    {
        return $this->belongsTo(RaffleStatus::class, 'reffle_status_id');
    }

    /****************************
     *      PUBLIC METHODS      *
     ****************************/

    public function isCancel()
    {
        return $this->reffle_status_id == RaffleStatus::CANCELED;
    }

    public function isNotFinished()
    {
        return $this->reffle_status_id != RaffleStatus::END;

    }
}
