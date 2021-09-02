<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FileStatus extends Model
{
    const PROCESSING = 1;
    const PROCESSED = 2;
    const ERROR = 3;

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

    public function files()
    {
        return $this->hasMany(File::class);
    }
}
