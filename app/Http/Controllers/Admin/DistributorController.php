<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\DistributorDataTable;
use App\Models\Distributor;
use App\Models\File;
use App\Models\FileStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\DistributorStoreRequest;
use App\Http\Requests\DistributorUpdateRequest;
use App\Imports\DistrictsV2Import;
use App\Models\Ticket;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class DistributorController extends Controller
{
    /**
     * @return Response
     */
    public function index()
    {
        $dataTable = new DistributorDataTable();

        return $dataTable->render('admin.distributor.index');
    }

    /**
     * @param DistributorStoreRequest $request
     * @return RedirectResponse
     */
    public function store(DistributorStoreRequest $request)
    {
        $reportFile = Storage::disk('local')->put("/", $request->file);

        $file = File::create([
            'path' => $reportFile,
            'file_status_id' => FileStatus::PROCESSING,
        ]);
        Ticket::truncate();
        Excel::queueImport(new DistrictsV2Import($file), $file->path);

        flash('Los archivos se esta procesando')->success();
        return redirect()->route('distributor.index');
    }

    /**
     * @param DistributorUpdateRequest $request
     * @param Distributor $distributor
     * @return RedirectResponse
     */
    public function update(DistributorUpdateRequest $request, Distributor $distributor)
    {
        $distributor->update($request->validated());

        $request->session()->flash('distributor.id', $distributor->id);

        return redirect()->route('distributor.index');
    }

    /**
     * @param Distributor $distributor
     * @return RedirectResponse
     * @throws \Exception
     */
    public function destroy(Distributor $distributor)
    {
        $distributor->delete();

        return redirect()->route('distributor.index');
    }
}
