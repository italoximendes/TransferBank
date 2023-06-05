<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function deposit(Request $request, $userId)
    {
        // Validação dos campos de entrada
        $request->validate([
            'valor' => 'required|numeric|min:0'
        ]);

        $user = User::findOrFail($userId);

        // Realização do depósito
        $user->saldo += $request->valor;
        $user->save();

        return response()->json(['message' => 'Depósito realizado com sucesso']);
    }
}