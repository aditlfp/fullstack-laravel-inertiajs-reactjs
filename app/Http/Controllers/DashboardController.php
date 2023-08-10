<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\FixingCustomer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $customer = Customer::count();
        $fix = FixingCustomer::count();
        return Inertia::render('Dashboard', ['customer' => $customer, 'fix' => $fix]);
    }
}
