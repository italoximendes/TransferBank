<?php

namespace App\Http\Resources;


use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'conta' => $this->id,
            'nome' => strtoupper($this->name),
            'email' => $this->email,
            'saldo'=>$this->balance,
            'cpf' => $this->cpf,
            'cnpj' => $this->cnpj,
            'saldo'=>$this->balance,
            'senha' => $this->password,
            'data_do_cadastro' => Carbon::make($this->created_at)->format('Y-m-d H:i:s'),
        ];
    }
}
