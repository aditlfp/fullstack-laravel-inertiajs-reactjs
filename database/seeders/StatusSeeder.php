<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $arr = ['process', 'success'];
        foreach($arr as $data => $value){
            $status = new Status();
            $status->name = $value;
            $status->save();
        }
    }
}
