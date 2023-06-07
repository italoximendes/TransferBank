<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function deposit(Request $request)
    {
        // Validação dos dados recebidos
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'valor' => 'required|numeric|min:0',
        ]);

        // Atualização do saldo do usuário
        $user = User::findOrFail($validatedData['user_id']);
        $user->balance += $validatedData['valor'];
        $user->save();

        return response()->json($user, 200);
    }
}