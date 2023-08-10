<?php

namespace App\Http\Controllers;

use App\Http\Requests\FixingCustomerRequest;
use App\Http\Resources\FixingCustomerCollection;
use App\Models\Customer;
use App\Models\FixingCustomer;
use App\Models\Status;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FixingCustomerController extends Controller
{
    public function index()
    {
        $status = Status::all();
        $fix = new FixingCustomerCollection(FixingCustomer::with('Customer')->paginate(15));
        return Inertia::render('Admin/Fixing/FixingIndex', ['fix' => $fix, 'status' => $status]);
    }

    public function create()
    {
        $jenisKerusakan = [
            ['id' => 1, 'name' => 'Kenteng'],
            ['id' => 2, 'name' => 'Cat'],
            ['id' => 3, 'name' => 'Repair',]
        ];

        $panel = [
            ['id' => 1, 'name' => 'panel 1.png', 'panel' => 'Body Samping Kiri'],
            ['id' => 2, 'name' => 'panel 2.png', 'panel' => 'Body Atas'],
            ['id' => 3, 'name' => 'panel 3.png', 'panel' => 'Body Samping Kanan'],
            ['id' => 4, 'name' => 'panel 4.png', 'panel' => 'Body Bamper Depan'],
            ['id' => 5, 'name' => 'panel 5.png', 'panel' => 'Body Bamper Belakang'],
        ];

        $baseUrl = url('/');

        $customer = Customer::all();
        $status = Status::all();
        $tanggal = Carbon::now()->format('Y-m-d');
        return Inertia::render('Admin/Fixing/FixingCreate', ['baseUrl' => $baseUrl, 'panel' => $panel, 'customer' => $customer, 'status' => $status, 'tanggal' => $tanggal, 'jenisKerusakan' => $jenisKerusakan]);
    }

    public function store(FixingCustomerRequest $request)
    {
        $fix = new FixingCustomer();

        $fix = [
            'customer_id' => $request->customer_id,
            'jenis_kerusakan' => $request->jenis_kerusakan,
            'nama_panel' => $request->nama_panel,
            'lama_pengerjaan' => $request->lama_pengerjaan,
            'estimasi_harga' => $request->estimasi_harga,
            'catatan_customer' => $request->catatan_customer,
            'status_id' => $request->status_id
        ];
            FixingCustomer::create($fix);
            return redirect(route('fixing.index'))->with('message', 'Data Berhasil Ditambahkan');
        
    }

    public function edit($id)
    {
        try {
            $jenisKerusakan = [
                ['id' => 1, 'name' => 'Kenteng'],
                ['id' => 2, 'name' => 'Cat'],
                ['id' => 3, 'name' => 'Repair',]
            ];
    
            $panel = [
                ['id' => 1, 'name' => 'panel 1.png', 'panel' => 'Body Samping Kiri'],
                ['id' => 2, 'name' => 'panel 2.png', 'panel' => 'Body Atas'],
                ['id' => 3, 'name' => 'panel 3.png', 'panel' => 'Body Samping Kanan'],
                ['id' => 4, 'name' => 'panel 4.png', 'panel' => 'Body Bamper Depan'],
                ['id' => 5, 'name' => 'panel 5.png', 'panel' => 'Body Bamper Belakang'],
            ];
    
            $baseUrl = url('/');

            $customer = Customer::all();
            $status = Status::all();
            $fix = FixingCustomer::with('Customer')->findOrFail( $id);
            return Inertia::render('Admin/Fixing/FixingEdit', ['fix' => $fix, 'customer' => $customer, 'status' => $status, 'jenisKerusakan' => $jenisKerusakan, 'panel' => $panel, 'baseUrl' => $baseUrl]);
        } catch (\Throwable $th) {
            return redirect(route('fixing.index'))->with('problem', 'Data Not Found');
        }
    }

    public function update(Request $request, $id)
    {
        $fix = [
            'customer_id' => $request->customer_id,
            'jenis_kerusakan' => $request->jenis_kerusakan,
            'nama_panel' => $request->nama_panel,
            'lama_pengerjaan' => $request->lama_pengerjaan,
            'estimasi_harga' => $request->estimasi_harga,
            'catatan_customer' => $request->catatan_customer,
            'status_id' => $request->status_id
        ];

        try {
            $fixId = FixingCustomer::findOrFail($id);
            $fixId->update($fix);
            return to_route('fixing.index')->with('message', 'Data Berhasil Di Update');
        } catch (\Throwable $th) {
            return redirect(route('fixing.index'))->with('error', 'Data Tidak Ditemukan');
        }
    }

    public function destroy($id)
    {
        try {
            $fixId = FixingCustomer::findOrFail($id);
            $fixId->delete();
            return to_route('fixing.index')->with('peringatan', 'Peringatan Data Telah Dihapus!');
        } catch (\Throwable $th) {
            return redirect(route('fixing.index'))->with('error', 'Data Tidak Ditemukan');
        }
    }

    public function updateStatus($id)
    {
        try {
            $fix = [
                'status_id' => 2
            ];

            $fixId = FixingCustomer::findOrFail($id);
            $fixId->update($fix);
            return redirect()->back()->with('message', 'Status Di Update');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
