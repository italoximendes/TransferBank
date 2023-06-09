<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepositController extends Controller
{
    public function deposit(Request $request)
    {
        // Validação dos dados recebidos
        $validatedData = $request->validate([
            'destinatario_id' => 'required|exists:users,id',
            'valor' => 'required|numeric|min:0',
        ]);

        // Atualização do saldo do usuário
        $user = User::findOrFail( $validatedData['destinatario_id']);
        (float) $user->balance += (float)$validatedData['valor'];
        $user->save();

        return response()->json($user, 200);

        return Inertia::render(response()->json($user, 200));
    }
}