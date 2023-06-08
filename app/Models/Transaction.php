<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['remetente_id', 'destinatario_id', 'valor'];


    public function user(){
        return $this->belongsTo(User::class);
    }

    // public function remetente()
    // {
    //     return $this->belongsTo(User::class, 'remetente_id');
    // }

    // public function destinatario()
    // {
    //     return $this->belongsTo(User::class, 'destinatario_id');
    // }
}