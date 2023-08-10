<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerCollection;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customer = new CustomerCollection(Customer::paginate(25));
        return Inertia::render('Admin/Customer/CustomerIndex', ['customer' => $customer]);
    }

    public function create()
    {
        $customer = Customer::all();
        return Inertia::render('Admin/Customer/CustomerCreate', ['customer' => $customer]);
        
    }

    public function createExist()
    {
        $customer = Customer::all();

        return Inertia::render('Admin/ExistCustomer/CreateExistCustomer', compact('customer'));
    }

    public function store(CustomerRequest $request)
    {
        $customer = new Customer();

        $customer = [
            'no_plate' => $request->no_plate,
            'nama_kendaraan' => $request->nama_kendaraan,
            'tahun_kendaraan' => $request->tahun_kendaraan,
            'model' => $request->model,
            'tahun' => $request->tahun,
            'nama_warna' => $request->nama_warna,
            'code_warna' => $request->code_warna,
            'keterangan_warna' => $request->keterangan_warna,
            'last_service_date' => $request->last_service_date,
            'service_date' => $request->service_date,
            'owner' => $request->owner,
            'mobile_phone' => $request->mobile_phone,
            'alamat' => $request->alamat,
        ];

        Customer::create($customer);
        return redirect()->to(route('customer.index'))->with('message', 'Berhasil Membuat Data Customer!!');
    }

    public function edit($id)
    {
        $customer = Customer::findOrFail($id);
        return Inertia::render('Admin/Customer/CustomerEdit', ['customer' => $customer]);
    }

    public function update(Request $request, $id)
    {
        $customer = [
            'no_plate' => $request->no_plate,
            'nama_kendaraan' => $request->nama_kendaraan,
            'tahun_kendaraan' => $request->tahun_kendaraan,
            'model' => $request->model,
            'tahun' => $request->tahun,
            'nama_warna' => $request->nama_warna,
            'code_warna' => $request->code_warna,
            'keterangan_warna' => $request->keterangan_warna,
            'last_service_date' => $request->last_service_date,
            'service_date' => $request->service_date,
            'owner' => $request->owner,
            'mobile_phone' => $request->mobile_phone,
            'alamat' => $request->alamat,
        ];

        $dataCust = Customer::findOrFail($id);
        $dataCust->update($customer);
        return to_route('customer.index')->with('message', 'Data Customer Di Edit !!');
    }

    public function show($id)
    {
        $customer = Customer::findOrFail($id);
        return Inertia::render('Admin/Customer/CustomerShow', ['customer' => $customer]);
    }

    public function destroy($id)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete($id);
        return to_route('customer.index')->with('peringatan', 'Data Customer Telah Di Hapus');
    }
}
