<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    public function transfer(Request $request)
    {
        // Validação dos campos de entrada
        $request->validate([
            'remetente_id' => 'required|exists:users,id',
            'destinatario_id' => 'required|exists:users,id',
            'valor' => 'required|numeric|min:0'
        ]);

        $remetente = User::findOrFail($request->remetente_id);
        $destinatario = User::findOrFail($request->destinatario_id);

        // Verificação do saldo do remetente


        if ($remetente->balance < $request->valor) {
            return response()->json(['error' => 'Saldo insuficiente'], 400);
        }

        // Realização da transferência
        $remetente->balance -= $request->valor;
        $destinatario->balance += $request->valor;

        $transaction = Transaction::create([
            'remetente_id' => $remetente->id,
            'destinatario_id' => $destinatario->id,
            'valor' => $request->valor
        ]);

        $remetente->save();
        $destinatario->save();

        return response()->json($transaction, 201);
    }
}