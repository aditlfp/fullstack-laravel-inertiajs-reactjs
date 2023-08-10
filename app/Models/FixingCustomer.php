<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FixingCustomer extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'jenis_kerusakan',
        'nama_panel',
        'lama_pengerjaan',
        'estimasi_harga',
        'catatan_customer',
        'status_id'
    ];

    protected $casts = [
        'jenis_kerusakan' => 'array',
        'nama_panel' => 'array',
    ];

    public function Customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function Status()
    {
        return $this->belongsTo(Status::class);
    }
}
