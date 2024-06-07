<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'product_id',
        'address_id',
        'payment_settings_id',
        'type',
        'berat',
        'qty',
        'status',
        'total'
    ];
    public function user(){
        return $this->belongsTo(User::class,"user_id",'id');
    }
    public function product(){
        return $this->belongsTo(Product::class,'product_id','id');
    }
    public function address(){
        return $this->belongsTo(Address::class,'address_id','id');
    }
    public function payment_setting(){
        return $this->belongsTo(PaymentSetting::class,'payment_settings_id','id');
    }
}
