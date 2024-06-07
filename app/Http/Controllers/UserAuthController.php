<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Member;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class UserAuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'username' => ['required'],
            'email' => ['required','email'],
            'password' => ['required'],
        ]);
        if ($validator->fails())
        {
        return response(
            ['errors'=>$validator->errors()],400
        );
        }
        if(User::where("username",$request['username'])->count() == 1)
        {
            return response()->json([
                "errors" => [
                    'message' => [
                        'username already register.'
                    ]
                ]
                    ],400);
        }
        if(User::where("email",$request['email'])->count() == 1)
        {
            return response()->json([
                "errors" => [
                    'message' => [
                        'email already register.'
                    ]
                ]
                    ],400);
        }
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->roles_id = Role::where("name",'customer')->first()->id;
        $user->save();
        

        return response()->json([
            "data" => [
                "username" => $request->username,
                "email" => $request->email,
            ],
                'message' => 'Create Successfully'
        ],201);



    }

    public function get (Request $request)
    {
        $auth = auth()->user();
        $addres = Address::where("user_id",$auth->id)->get();
        if(!$addres){
            return response([
                'data' => [
                    'account' => [
                        $auth
                    ],
                    'address' => [
                        null
                    ]
                ]
                    ],200);
        }
        
        return response([
            'data' => [
                'account' => [
                    $auth
                ],
                "address" => [
                    $addres
                ] 
            ]
                ],200);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => ['required','email'],
            'password' => ['required'],
        ]);
        if ($validator->fails())
        {
        return response()->json(['errors'=>$validator->errors()]);
        }
        $user = User::where("email",$request['email'])->first();
        if($user){
            if(Hash::check($request['password'],$user->password)){
                $user->save();
                return response([
                        "data" => [
                            "id" => $user->id,
                            "username" => $user->username,
                            "email" => $request->email,
                            "token" => $user->createToken('user')->plainTextToken,
                        ],
                            'message' => 'Login Suceesfully'
                            
                        
                    ],200);
            }else{
                return response([
                    'errors'=> [
                        'message' => "email or password wrong"
                    ]
                    ],401);
            }
        }else{
            return response([
                'errors'=> [
                    'message' => "unauthorized"
                ]
                ],401);
        }
    }
    
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => ['required','email'],
            'password' => ['required'],
        ]);
        if ($validator->fails())
        {
        return response()->json(['errors'=>$validator->errors()]);
        }
        $token = $request->header("Authorization");
        $user = User::where("remember_token",$token)->first();
        if(isset($request['email'])){
            $user->email = $request['email'];
        }
        if(isset($request['password'])){
            $user->password = Hash::make($request['password']);
        }
        $user->save();
        return response([
            'data' => [
                'email' => $user->email,
                'password' => $request->password,
            ],
            'message' => 'Update Successfully'
        ]);
    }
    public function logout(Request $request)
    {
        $token = $request->header("Authorization");
        $user = User::where("remember_token",$token)->first();
        if($user){
            $user->remember_token = null;
            $user->save();
            return response([
                'data' => [
                    'status' => true
                ]
                ],200);
        }else{
            return response([
                'errors' => [
                    'status' =>false
                ]
                ],401);
        }
    }
}
