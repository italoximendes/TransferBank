<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

Route::delete('/users/{id}', [UserController::class, 'deleteUser'],);
Route::patch('/users/{id}', [UserController::class, 'update']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);



Route::get('/', function () {
    return response()->json([
        'success' => true
    ]);
});
