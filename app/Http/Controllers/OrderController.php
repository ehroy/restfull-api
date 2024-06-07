<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Models\PaymentSetting;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index(Request $request){
        $validator = Validator::make($request->all(),[
            'product' => ['required'],
            'address' => ['required'],
            'payment' => ['required'],
            'type' => ['required'],
            'berat' => ['required'],
            'qty' => ['required'],

        ]);
        if ($validator->fails())
        {
        return response(
            ['errors'=>$validator->errors()],400
        );
        }
        $auth = auth()->user();
        if($auth){
            $hitung = Product::where("code",$request->product)->first();
            if(!$hitung){
                return response([
                    "errors" => [
                        "message" => "product not found !!"
                        ]
                    ],401);
            }
            $address = Address::where('user_id',$auth->id)->first();
            if(!$address){
                return response([
                    "errors" => [
                        "message" => "setting address"
                        ]
                    ],401);
            }else{
                $payment = PaymentSetting::where("name_bank",strtoupper($request->payment))->first();
                if(!$payment){
                    return response([
                        "errors" => [
                            "message" => "payment not found !!"
                            ]
                        ],401);
                }
                $data = new Order();
                $data->user_id = $auth->id;
                $data->product_id = $hitung->id;
                $data->address_id = $address->id;
                $data->payment_settings_id = $payment->id;
                $data->type = $request->type;
                $data->berat = $request->berat;
                $data->qty = $request->qty;
                $data->total = $request->qty * $hitung->price;
                $data->save();
                return response([
                    "data" => [
                        $data
                        ]
                    ],200);
                }
                }else{
                    return response([
                        "errors" => [
                            "message" => "not access !!"
                            ]
                        ],401);
        }
        
    }
}
