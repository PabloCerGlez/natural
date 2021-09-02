<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\CarrouselDataTable;
use App\Http\Controllers\Controller;
use App\Models\Carousel;
use App\Http\Requests\CarrouselStoreRequest;
use App\Http\Requests\CarrouselUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class CarouselController extends Controller
{
    /**
     * @return View
     */
    public function index()
    {
        $dataTable = new CarrouselDataTable();
        return $dataTable->render('admin.carousel.index') ;
    }

    /**
     * @return Response|View
     */
    public function create()
    {
        $method = 'POST';
        $route = route('carousel.store');

        return view(
            'admin.carousel.createOrUpdate',
            compact('method', 'route')
        );
    }

    /**
     * @param CarrouselStoreRequest $request
     * @return RedirectResponse
     */
    public function store(CarrouselStoreRequest $request)
    {
        $file = $request->file('image');
        if ($request->hasFile('image')) {
            $path = Storage::disk('public')->put("/", $file);
            $last = Carousel::orderBy('order', 'desc')->latest()->first();
            Carousel::create(
                collect($request->all())->merge(['img' => $path, 'order' => $last->order+1])->toArray()
            );
        }
        return redirect()->route('carousel.index');
    }

    /**
     * @param Request $request
     * @param Carousel $carousel
     * @return View
     */
    public function edit(Request $request, Carousel $carousel)
    {
        $method = 'PUT';
        $route = route('carousel.update', ['carousel' => $carousel->id]);
        $model = $carousel;

        return view(
            'admin.carousel.createOrUpdate',
            compact('method', 'route', 'model')
        );
    }

    /**
     * @param CarrouselUpdateRequest $request
     * @param Carousel $carousel
     * @return RedirectResponse
     */
    public function update(CarrouselUpdateRequest $request, Carousel $carousel)
    {
        if ($request->up || $request->down) {
            //Actualiza solo el orden
            $carouselChange = $request->up
                ? Carousel::where('order', '<=', $carousel->order-1)->orderBy('order', 'desc')->first()
                : Carousel::where('order', '>=', $carousel->order+1)->orderBy('order', 'asc')->first();

            //dd($carouselChange, $carousel);

            if (!$carouselChange || $carouselChange->id == $carousel->id) {
                return redirect()->route('carousel.index');
            }

            $currentOrder = $carousel->order;

            $carousel->order = $carouselChange->order;
            $carouselChange->order = $currentOrder;
            $carousel->save();
            $carouselChange->save();
        } else {
            //Actualiza el carrusel completo
            $path = null;
            $file = $request->file('image');
            if ($request->hasFile('image')) {
                Storage::disk('public')->delete("/", $carousel->img);
                $path = Storage::disk('public')->put("/", $file);
            } else {
                $path = $carousel->img;
            }

            $carousel->update(
                collect($request->all())->merge(['img' => $path])->toArray()
            );

        }

        return redirect()->route('carousel.index');
    }

    /**
     * @param Carousel $carousel
     * @return RedirectResponse
     */
    public function destroy(Carousel $carousel)
    {
        $carousel->delete();
        return redirect()->route('carousel.index');
    }
}
