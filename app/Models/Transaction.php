<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = ['remetente_id', 'destinatario_id', 'valor'];

    public function remetente()
    {
        return $this->belongsTo(User::class, 'remetente_id');
    }

    public function destinatario()
    {
        return $this->belongsTo(User::class, 'destinatario_id');
    }
}