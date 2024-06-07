<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Member;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AddressController extends Controller
{
    public function address(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'street' => ['required'],
            'province' => ['required'],
            'country' => ['required'],
            'postal_code' => ['required'],
            'phone' => ['required'],
        ]);
        if ($validator->fails())
   {
        return response([
            'errors'=>$validator->errors()
        ],400);
    }
        $user = auth()->user();
        // print_r($user);
        $data = new Address();
        $data->user_id = $user->id;
        $data->street = $request->street;
        $data->province = $request->province;
        $data->country = $request->country;
        $data->postal_code = $request->postal_code;
        $data->phone = $request->phone;
        $data->save();
        return response([
            'data' => [
                $data
            ],
            "message" => "address succeefully add"
        ],200);
    }
    public function delete(Request $request,$id)
    {
        $user = auth()->user();
        $validate = Address::where("user_id",$user->id)->first();
        if(!$validate){
            return response([
                'errors' => [
                    "not found action"
                ]
            ],400);
        }
        $address = Address::find($id);   
        if(!$address){
            return response([
                'errors' => [
                    "not found action"
                ]
            ],400);
        }
        $address->delete();
        return response([
        'data' => [
            true
        ],
        "message" => "address succesfully delete"
    ],200);  
        
    }
}
