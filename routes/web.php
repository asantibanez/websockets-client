<?php

use App\Events\OrderShipmentStatusUpdated;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/broadcast', function () {
    OrderShipmentStatusUpdated::broadcast();
    return \Carbon\Carbon::now()->toIso8601String();
});
