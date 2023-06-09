<?php

use Illuminate\Support\Facades\Route;


Route::get('/login', function () {
    return view('index');
});

Route::get('/cadastro', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('index');
});
