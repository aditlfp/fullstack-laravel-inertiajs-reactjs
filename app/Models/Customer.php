<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;


    protected $fillable = [
        'no_plate',
        'nama_kendaraan',
        'tahun_kendaraan',
        'model',
        'tahun',
        'nama_warna',
        'code_warna',
        'keterangan_warna',
        'last_service_date',
        'service_date',
        'owner',
        'mobile_phone',
        'alamat',
    ];
}
