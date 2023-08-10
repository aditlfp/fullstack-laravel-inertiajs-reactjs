<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\FixingCustomer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InvoicesController extends Controller
{
    public function index($id)
    {
        try {
            $baseUrl = url('/');
            $fix = FixingCustomer::with('Customer', 'Status')->findOrFail($id);
            $dateNow = Carbon::now()->format('d/m/Y');
            $inv = Carbon::now()->format('dmY');
            return Inertia::render('InvoicesPayment/MainInvoices', ['fix' => $fix, 'dateNow' => $dateNow, 'inv' => $inv, 'baseUrl' => $baseUrl]);
        } catch (\Throwable $th) {
            return redirect()->back()->with('peringatan', 'Data Tidak Ditemukan');
        }
    }
}
