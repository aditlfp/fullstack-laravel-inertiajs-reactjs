<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('no_plate');
            $table->string('nama_kendaraan');
            $table->string('tahun_kendaraan');
            $table->string('model');
            $table->string('tahun');
            $table->string('nama_warna');
            $table->string('code_warna');
            $table->string('keterangan_warna');
            $table->string('last_service_date')->nullable();
            $table->string('service_date');
            $table->string('owner');
            $table->string('mobile_phone');
            $table->string('alamat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
