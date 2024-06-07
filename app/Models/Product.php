<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'price',
        'stock',
        'code',
        'categori_id',
        'qty',
        'description'
    ];
    public function categori()
    {
        return $this->belongsTo(Categori::class);
    }
}
