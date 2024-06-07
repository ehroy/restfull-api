<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentSetting extends Model
{
    use HasFactory;
    protected $fillable = [
        'tranfer',
        'qris',
        'account_number',
        'account_name',
        'name_bank',
        'qris_url',
        'bank_image',
        'active',
        'inactive'
    ];
}
