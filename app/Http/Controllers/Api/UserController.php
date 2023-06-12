<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate();
        return UserResource::collection($users);

    }

    public function store(StoreUpdateUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        return new UserResource($user);

    }

    public function dashboard($id)
    {
        // Encontra o usuário correspondente no banco de dados
        $user = User::find($id);

        // Verifica se o usuário existe
        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        // Retorna os dados do usuário como resposta
        return response()->json($user);
    }

    public function show(string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        return response()->json($user);

    }

    public function update(StoreUpdateUserRequest $request, string $id)
    {

        $user = User::findOrFail($id);

        $data = $request->validated();

        if ($request->password)
            $data['password'] = bcrypt($request->password);

        $user->update($data);

        return new UserResource($user);

    }

    public function deleteUser(string $id)
    {
        $user = User::findOrFail($id);
        $user ->delete();

        return response()->json([],204);

    }
}
