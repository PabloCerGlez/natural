<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'path',
        'payload',
        'file_status_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'payload' => 'array',
        'file_status_id' => 'integer',
    ];


    public function fileStatus()
    {
        return $this->belongsTo(FileStatus::class);
    }

}
