<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserAuthController;
use App\Http\Middleware\ApiAuthMiddleware;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post("/users/register",[UserAuthController::class,'register']);
Route::post("/users/login",[UserAuthController::class,'login']);
Route::get('/users/product/{id}',[ProductController::class,'getbykeyword']);
Route::group(['middleware'=>'auth:sanctum'],function(){
        Route::get('/users',[UserAuthController::class,'get']);
        Route::patch('/users/update',[UserAuthController::class,'update']);
        Route::delete('/users/logout',[UserAuthController::class,'logout']);
        Route::post('/users/address',[AddressController::class,'address']);
        Route::delete('/users/address/{id}',[AddressController::class,'delete']);
        Route::post('/users/product',[ProductController::class,'add_product']);
        Route::get('/users/product',[ProductController::class,'get']);
        Route::patch('/users/product/{id}/edit',[ProductController::class,'update']);
        Route::post('/users/order',[OrderController::class,'index']);

});
