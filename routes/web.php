<?php

use Illuminate\Support\Facades\Route;

Route::get('/*', function () {
    return view('index');
});


Route::get('/login', function () {
    return view('index');
});

Route::get('/cadastro', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('index');
});

Route::get('/transferencia', function () {
    return view('index');
});

Route::get('/transferencia/status', function () {
    return view('index');
});

Route::get('/deposito', function () {
    return view('index');
});

Route::get('/deposito/status', function () {
    return view('index');
});
