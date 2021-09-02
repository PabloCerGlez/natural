<?php

namespace App\DataTables;

use App\Models\Distributor;
use Yajra\DataTables\DataTableAbstract;
use Yajra\DataTables\Html\Builder;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class DistributorsTicketsDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->addColumn('tickets', function (Distributor $distributor) {
                return $distributor->tickets->count();
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param Distributor $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Distributor $model)
    {
        return $model->newQuery()->has('tickets');
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return Builder
     */
    public function html()
    {
        return $this->builder()
            ->parameters([
                'language' => ['url' => asset('languageDataTable.json')],
            ])
            ->setTableId('distributors2-table')
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
            Column::make('name')->title('Nombre'),
            Column::make('tickets')->title('Boletos')
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Distributors2_' . date('YmdHis');
    }
}
