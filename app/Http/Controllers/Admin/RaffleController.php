<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\DistributorsTicketsDataTable;
use App\DataTables\RaffleDataTable;
use App\Http\Controllers\Controller;
use App\Models\Raffle;
use App\Models\RaffleStatus;
use App\Jobs\RaffleQueue;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

class RaffleController extends Controller
{
    /**
     * @return Response
     */
    public function index()
    {
        $dataTable = new RaffleDataTable();
        return $dataTable->render('admin.raffle.index');
    }

    /**
     * @return View
     */
    public function create()
    {
        return view('admin.raffle.updateOrCreate');
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $date = explode('T', $request->date);
        $date = Carbon::createFromFormat('Y-m-d H:i:s', $date[0].' 12:00:00');
        //TODO ACOMODAR LA FECHA Y NO HACER BRUJERIA

        logger('Hora de sorteo: ', [$date]);

        $raffle = Raffle::create([
            'date' => $date
        ]);

        foreach ($request->products as $product) {
            $raffle->products()->attach($product['id']);
        }

        $date = $date->subMinutes(5);
        logger('Fecha de ejecución del queue: ', [$date]);

        dispatch(
            new RaffleQueue($raffle->id)
        )->delay($date);

        return response()->json($raffle, 201);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse|View
     */
    public function show(Request $request, $id)
    {
        $raffle = Raffle::whereId($id)->with(['distributor', 'products']);

        if ($request->axios) {
            $raffle->first();
            return response()->json($raffle);
        }

        $raffle = $raffle
            ->whereId($id)
            ->whereIn('reffle_status_id', [RaffleStatus::PENDING, RaffleStatus::END])
            ->firstOrFail();

        if (Carbon::parse($raffle->date)->addDay()->isBefore(now())) {
            abort(404);
        }

        $dataTable = new DistributorsTicketsDataTable();

        return $dataTable->render('admin.raffle.show', compact('raffle'));
    }

    /**
     * @param $id
     * @return View
     */
    public function edit($id)
    {
        $raffle = Raffle::whereId($id)->with('products')->first();
        return view('admin.raffle.updateOrCreate', compact('raffle'));
    }

    /**
     * @param Request $request
     * @param Raffle $raffle
     * @return RedirectResponse|JsonResponse
     */
    public function update(Request $request, Raffle $raffle)
    {
        //ACTIVA O DESACTIVA UN SORTEO
        if ($request->updateStatus) {
            if ($raffle->reffle_status_id == RaffleStatus::END) {
                flash('No se puede cancel un sorteo que ya fue finalizado')->error();
            }

            if ($raffle->reffle_status_id == RaffleStatus::CANCELED) {
                $raffle->reffle_status_id = RaffleStatus::PENDING;
            } else {
                $raffle->reffle_status_id = RaffleStatus::CANCELED;
            }

            $raffle->save();
            return redirect()->route('raffle.index');
        }

        $date = Carbon::parse($request->date);
        $raffle->products()->detach();

        $raffle->update([
            'date' => $date
        ]);

        foreach ($request->products as $product) {
            $raffle->products()->attach($product['id']);
        }

        return response()->json($raffle, 200);
    }
}
