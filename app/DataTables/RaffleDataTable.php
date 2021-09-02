<?php

namespace App\DataTables;

use App\Models\Raffle;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class RaffleDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->addColumn('reffle_status_id', function (Raffle $raffle) {
                return $raffle->raffleStatus->name;
            })->addColumn('options', function (Raffle $raffle) {
                return view('dataTable.raffles.options', compact('raffle'));
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param Raffle $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Raffle $model)
    {
        return $model->newQuery()->with(['distributor']);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->parameters([
                'language' => ['url' => asset('languageDataTable.json')],
            ])
            ->setTableId('raffle-table')
            ->columns($this->getColumns())
            ->minifiedAjax();
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id')->title('#'),
            Column::make('date')->title('Fecha de realización'),
            Column::make('reffle_status_id')->title('Estado'),
            Column::make('distributor')->name('distributor')
                ->title('Ganadores')
                ->render('`${!data?"Sin ganador":full.distributor.name}`'),
            Column::make('options')->title('Opciones')
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Raffle_' . date('YmdHis');
    }
}
