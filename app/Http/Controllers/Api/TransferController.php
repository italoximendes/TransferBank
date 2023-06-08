<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TransferController extends Controller
{
    public function transfer(Request $request)
    {
        // Validação dos campos de entrada
        $validatedData = $request->validate([
            'remetente_id' => 'required|exists:users,id',
            'destinatario_id' => 'required|exists:users,id',
            'valor' => 'required|numeric|min:0.01'
        ]);

        // Verifica se o remetente é lojista

        $remetente = User::findOrFail($validatedData['remetente_id']);
        if ($remetente->cnpj == true ){
        throw ValidationException::withMessages([
            'id' => 'Lojistas não podem realizar transferências',
        ]);
        }


       // Verifica se o remetente tem saldo suficiente
      
       if ( (float) $remetente->balance < $validatedData['valor']) {
           throw ValidationException::withMessages([
               'valor' => 'Saldo insuficiente para a transferência.',
           ]);
       }


       // Inicia uma transação para garantir consistência
       DB::beginTransaction();

       try {
           // Atualiza o saldo do remetente
           (float) $remetente->balance -= $validatedData['valor'];
           $remetente->save();
           
           
           // Adiciona o valor à carteira do destinatário
           $destinatario = User::findOrFail($validatedData['destinatario_id']);
           (float) $destinatario->balance += $validatedData['valor'];
           $destinatario->save();

           // Cria o registro da transferência
           $transfer = Transaction::create([
               'remetente_id' => $remetente->id,
               'destinatario_id' => $destinatario->id,
               'valor' => $validatedData['valor'],
           ]);

           // Confirma a transação
           DB::commit();

           return response()->json($transfer, 201);
        } catch (\Exception $e) {
            // Reverte a transação em caso de erro
            DB::rollBack();

            throw $e;
        }
    }
}