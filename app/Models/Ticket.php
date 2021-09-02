<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'distributor_id'
    ];

    public function distributor()
    {
        return $this->belongsTo(Distributor::class);
    }

}
