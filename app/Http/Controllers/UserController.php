<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return $users == null ? response()->json("", 403) : response()->json($users, 200);
    }

    public function show($id)
    {
        $user = User::find($id);

        return $user == null ? response()->json("", 403) : response()->json($user, 200);
    }

    public function authorization(Request $request)
    {
        //$this->init();
        $user = User::query()->where(['email' => $request->get('email')])->first();

        if ($user == null) {
            return response()->json("{\"message\": \"User not found\"}", 409);
        }
        
        return $user['password'] == $request->get('password')
            ? response()->json($user, 200)
            : response()->json("{\"message\": \"Wrong password\"}", 409);   
    }
}
