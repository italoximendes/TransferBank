<?php

use Illuminate\Console\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/*', function () {
    return view('index');
});


Route::get('/', function () {
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

Route::get('/deposito', function () {
    return view('index');
});



