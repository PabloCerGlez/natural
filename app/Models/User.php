<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'rol_id', 'img'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function rol()
    {
        return $this->belongsTo('Ozparr\AdminlteUsers\Models\Rol');
    }

    public function getImgAttribute($value)
    {
        return 'storage/img/users/' . $value;
    }

    /**
     * @var array $roles
     * @return bool
     */
    public function areRol($roles)
    {
        foreach ($roles as $rol) {
            if ($this->rol->nombre == $rol) {
                return true;
            }
        }
        return false;
    }

    public function isAdmin()
    {
        return $this->rol_id == 0 || $this->rol_id == 1;
    }

    public function raffles()
    {
        return $this->hasMany(Raffle::class);
    }
}
