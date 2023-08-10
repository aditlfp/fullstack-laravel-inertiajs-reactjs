<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function index()
    {
        $product = new ProductCollection( Product::paginate(25));
        return Inertia::render('Admin/Product/ProductIndex', ['product' => $product]);

    }


    public function create()
    {
        return Inertia::render('Admin/Product/ProductCreate');
    }

    public function store (ProductRequest $request){

        $product = new Product();

        $product = [
            'name' => $request->name,
            'satuan' => $request->satuan,
            'stock' => $request->stock,
            'description' => $request->description
        ];

        Product::create($product);
        return redirect(route('products.index'))->with('message', 'Product Has Created');

    }

    public function edit ($id)
    {

        $product = Product::findOrFail($id);
        return Inertia::render('Admin/Product/ProductEdit', ['product' => $product]);

    }

    public function update(Request $request, $id)
    {
        $product = [
            'name' => $request->name,
            'satuan' => $request->satuan,
            'stock' => $request->stock,
            'description' => $request->description
        ];

        $dataProduct = Product::findOrFail($id);
        $dataProduct->update($product);
        return redirect()->to(route('products.index'))->with('message', 'Products Has Updated');
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return back()->with('message', 'Product Has Delete');
    }
}
