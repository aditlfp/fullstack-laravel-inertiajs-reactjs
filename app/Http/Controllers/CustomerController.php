<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customer = Customer::all();
        return Inertia::render('Admin/Customer/CustomerIndex', ['customer' => $customer]);
    }

    public function create()
    {
        $customer = Customer::all();
        return Inertia::render('Admin/Customer/CustomerCreate', ['customer' => $customer]);
    }

    public function store(CustomerRequest $request)
    {
        $customer = new Customer();

        $customer = [
            'no_plate' => $request->no_plate,
            'model' => $request->model,
            'last_service_date' => $request->last_service_date,
            'service_date' => $request->service_date,
            'owner' => $request->owner,
            'mobile_phone' => $request->mobile_phone,
            'birthday' => $request->birthday,
            'description' => $request->description
        ];

        Customer::create($customer);
        return redirect()->to(route('customer.index'))->with('message', 'Customer Has Created!!');
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
            'model' => $request->model,
            'last_service_date' => $request->last_service_date,
            'service_date' => $request->service_date,
            'owner' => $request->owner,
            'mobie_phone' => $request->mobile_phone,
            'birthday' => $request->birthday,
            'description' => $request->description
        ];

        $dataCust = Customer::findOrFail($id);
        $dataCust->update($customer);
        return to_route('customer.index')->with('message', 'Customer Was Edited');
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
        return back()->with('message', 'Customer Has Deleted');
    }
}
