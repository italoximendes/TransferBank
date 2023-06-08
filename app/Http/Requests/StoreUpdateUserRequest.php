<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = 
            [
                'name' => 'required|string|min:3|max:255',
                'email' => [
                    'required',
                    'email',
                    'max:255',
                    'unique:users', 
                    
                ],

                'cpf' => [
                    'required',
                    'max:11',
                    'min:10',
                    'unique:users', 
                ],

                  'cnpj' => [
                    'nullable',
                    'max:15',
                    'min:14',
                    'unique:users', 
                ],

                'balance' => [
                    'required',
                    'max:255',
                    'min:0.01',
                ],


                'password' => [
                    'required',
                    'min:6',
                    'max:100',
               
                ],
            ];

            if($this->method() === 'PATCH') {


                $rules['name'] = [
                    'nullable',
                    'string',
                    'min:3',
                    'max:255',
                ]; 
                
                $rules['email'] = [
                    'required',
                    'email',
                    'max:255',
                    "unique:users,email,{$this->id},id", 

                ];

                $rules['cpf'] = [ 
                    'nullable',           
                    'max:11',
                    'min:10',
                    "unique:users,cpf,{$this->id},id", 
                ];

                $rules['cnpf'] = [
                    'nullable', 
                    'max:15',
                    'min:11',
                    "unique:users,cpnf,{$this->id},id", 
                ];

                $rules['balance'] = [
                    'nullable', 
                    'max:255',
                    'min:0.01',
                ];

                $rules['password'] = [
                    'nullable',
                    'min:6',
                    'max:100',
                ];
            }

            return  $rules;
    }
}
