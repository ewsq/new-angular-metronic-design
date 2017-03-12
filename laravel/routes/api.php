<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Auth::routes();

Route::group(['namespace' => 'Home'], function ($request) {
    Route::get('home', 'DashboardController@index');
});

Route::group(['namespace' => 'Angular'], function ($request) {
    Route::group(['namespace' => 'config'], function ($request) {
        Route::resource('params', 'ParamsController');
//        Route::resource('app', 'AppController');
    });
//    Route::group([ 'namespace' => 'user' ], function ( $request ) {
//			Route::group([ 'middleware' => 'auth' ], function ( $request ) {
//        Route::resource('profile', 'ProfileController');
//			});
//    });
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.auth']], function () {

});
