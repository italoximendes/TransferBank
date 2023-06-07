<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TransferController;
use App\Http\Controllers\Api\DepositController;

Route::delete('/users/{id}', [UserController::class, 'deleteUser'],);
Route::patch('/users/{id}', [UserController::class, 'update']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);

Route::post('/transfers', [TransferController::class, 'transfer']);
Route::post('/deposits', [DepositController::class, 'deposit']);



Route::get('/', function () {
    return response()->json([
        'success' => true
    ]);
});
