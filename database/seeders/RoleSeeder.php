<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $name = ['admin', 'user'];
        foreach( $name as $arr => $value )
        {
            \App\Models\Role::factory()->create([
                'name' => $value,
            ]);
        }
    }
}
