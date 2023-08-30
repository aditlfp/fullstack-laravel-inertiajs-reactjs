<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\FixingCustomer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $bulanSekarang = Carbon::now()->month;
        $customer = Customer::count();
        $fix = FixingCustomer::whereMonth('created_at', $bulanSekarang)->count();
        return Inertia::render('Dashboard', ['customer' => $customer, 'fix' => $fix]);
    }
}
