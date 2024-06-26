<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'street',
        'province',
        'country',
        'postal_code',
        'phone'
    ];
    // public function user(){
    //     return $this->belongsTo(Address::class);
    // }
}
