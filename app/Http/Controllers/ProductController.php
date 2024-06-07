<?php

namespace App\Http\Controllers;

use App\Models\Categori;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Nette\Utils\Random;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function get()
    {
        $get_product = Product::all();
        return response([
            'data' => [
                $get_product
            ]
            ],200);
    }

    public function getbykeyword(Request $request,$id){
        $search = Categori::where("name",$id)->first();
        if(!$search){
            return response([
                "errors"=> [
                    "message" => "not found action"
                ]
                ],401);
        }
        $product_serach = Product::where("categori_id",$search->id)->get();
        if(!$product_serach){
            $product_searchother = Product::where("categori_id",3)->get();
            return response([
                "data" => [
                    $product_searchother
                ]
            ],200);
        }else{
            return response([
                "data" => [
                    $product_serach
                ]
            ],200);
        }
    }
    public function add_product(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => ['required'],
            'price' => ['required'],
            'stock' => ['required'],
            'description' => ['required'],
            'categori' => ['required'],
            'qty' => ['required'],
        ]);
        if ($validator->fails())
        {
        return response(['errors'=>$validator->errors()],400);
        }
        $categori = Categori::where("name",$request->categori)->first();
        $categoris = null;
        if($categori){
            $categoris = $categori->id;
        }else{
            $categoris = 3;
        }
        $request->only('name','price','stock','decription','categori','qty');
        $product = new Product();
        $product->code = Random::generate(10);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->decription = $request->description;
        $product->qty = $request->qty;
        $product->categori_id = $categoris;
        $product->save();
        return response([
            'data' => [
                $product
            ],
            'message' => "add product successfully"
        ],200);
        
    }
    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(),[
            'name' => ['required'],
            'price' => ['required'],
            'stock' => ['required'],
            'description' => ['required'],
            'categori' => ['required'],
            'qty' => ['required'],
        ]);
        if ($validator->fails())
        {
        return response(['errors'=>$validator->errors()],400);
        }
        $auth = auth()->user();
        if($auth->id == 1){

            $categori = Categori::where("name",$request->categori)->first();
            $categoris = null;
            if($categori){
                $categoris = $categori->id;
            }else{
                $categoris = 3;
            }
            $user = User::where("roles_id",1)->first();
            if(!$user){
                return response([
                    'errors' => [
                        'message' => "not access"
                        ]
                    ],400);
                }
                $product = Product::find($id);
                if(!$product){
                    return response([
                        'errors' => [
                            'message' => "not found !!"
                            ]
                        ],400);
                    }
                    $product->name = $request->name;
                    $product->price = $request->price;
                    $product->stock = $request->stock;
                    $product->decription = $request->description;
                    $product->categori_id = $categoris;
                    $product->qty = $request->qty;
                    $product->save();
                    return response([
                        "data" => [
                            $product
                        ],
                        "message" => "update successfuly"
                    ],200);
            }else{
                 return response([
                        'errors' => [
                            'message' => "not access !!"
                            ]
                        ],400);
            }
                    
    }
}
