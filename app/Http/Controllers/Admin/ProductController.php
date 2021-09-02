<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\ProductDataTable;
use App\Models\Gallery;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class ProductController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        if (isset($request->searchProduct)) {
            $search = $request->searchProduct;
            $products = Product::where('name', 'like', "%{$search}%")
                ->limit(10)
                ->get();
            return response()->json($products);
        }

        $dataTables = new ProductDataTable();
        return $dataTables->render('admin.product.index');
    }

    /**
     * @return View
     */
    public function create()
    {
        $route = route('product.store');
        $method = 'POST';
        return view('admin.product.updateOrCreate', compact('route', 'method'));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $product = Product::create($request->all());

        $this->uploadFiles($request, $product);

        return response()->json($product, 201);
    }

    /**
     * @param \App\product $product
     * @return View
     */
    public function edit($product)
    {
        $product = Product::whereId($product)->with('images')->first();
        return view('admin.product.updateOrCreate', compact('product'));
    }

    /**
     * @param Request $request
     * @param Product $product
     * @return JsonResponse
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());

        //Elimina todas las imágenes del producto
        foreach ($product->images as $image) {
            Storage::disk('public')->delete("/", $image->path);
            $image->delete();
        }

        //Sube las Imágenes del producto
        $this->uploadFiles($request, $product);

        return response()->json($product, 200);
    }

    /****************************
     *      PRIVATE METHODS     *
     ****************************/

    /**
     * Guarda las imágenes de los productos.
     *
     * @param $request
     * @param $product
     */
    private function uploadFiles($request, $product)
    {
        $files = $request->file('images');
        $order = 1;
        if ($request->hasFile('images')) {
            foreach ($files as $file) {
                $path = Storage::disk('public')->put("/", $file);
                $gallery = new Gallery([
                    'path' => $path,
                    'order' => $order
                ]);
                $order++;
                $gallery->imageable()->associate($product);
                $gallery->save();
            }
        }
    }
}
