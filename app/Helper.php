<?php
namespace App\Helper;

Class Helper{

    public static function rupiah($price): string
    {
        return "Rp. ".number_format($price,0,".");
    }
}

