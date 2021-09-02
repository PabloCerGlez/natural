<?php

use App\Http\Controllers\Admin\CarouselController;
use App\Http\Controllers\Web\CarouselController as WebCarruselController;
use App\Http\Controllers\Admin\DistributorController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Web\PostController as WebPostController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RaffleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Mail\ContactController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

//Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::resource('/raffle', RaffleController::class)->only(['show']);
Route::resource('/send_contact', ContactController::class)->only('store');

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::resource('/carousel', CarouselController::class);
    Route::resource('/home', AdminHomeController::class)->only('index');
    Route::middleware('rolByLvl:1')->group(function () {
        Route::resource('/distributor', DistributorController::class)
            ->except(['create', 'edit', 'show']);

        Route::resource('/raffle', RaffleController::class)->except(['show']);

        Route::resource('/product', ProductController::class)->except(['destroy', 'show']);
        Route::resource('/post', PostController::class);
    });
});

Route::resource('/post', WebPostController::class)->only('show');
Route::get('/carousel', [WebCarruselController::class, 'index'])
    ->name('web.carousel.index');

Route::get('/{path?}', [HomeController::class, 'index'])->where('path', '.*');
