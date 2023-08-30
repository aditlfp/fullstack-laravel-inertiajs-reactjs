<?php

namespace App\Http\Controllers;

use App\Models\FixingCustomer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanController extends Controller
{
    public function index()
    {
        $bulanSekarang = Carbon::now()->month;
        $fix = FixingCustomer::with('Customer', 'Status')->get();
        return Inertia::render('Admin/Laporan/LaporanIndex', ['fix' => $fix]);
    }
    
    public function report($month)
    {
        $parse = Carbon::parse($month);
        $dat = $parse->isoFormat('MMMM-Y');
        $fix = FixingCustomer::with('Customer', 'Status')->whereMonth('created_at', $parse->month)->get();
        return Inertia::render('Admin/Laporan/LaporanExport', ['fix' => $fix, 'parse' => $dat]);
    }
}
