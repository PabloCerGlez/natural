<?php

namespace App\Classes;

use JeroenNoten\LaravelAdminLte\Menu\Filters\FilterInterface;

class MenuFilter implements FilterInterface
{
    public function transform($item)
    {
        if (isset($item['permission']) && \Auth::guest()) {
            return false;
        }

        return $item;
    }
}
