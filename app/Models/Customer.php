<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_plate',
        'model',
        'last_service_date',
        'service_date',
        'owner',
        'mobile_phone',
        'birthday',
        'description'
    ];
}
