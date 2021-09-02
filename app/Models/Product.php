<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'image',
        'name',
        'description',
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
        return $this->belongsToMany(Raffle::class);
    }

    /**
     * Get the post's image.
     */
    public function images()
    {
        return $this->morphMany(Gallery::class, 'imageable');
    }
}
