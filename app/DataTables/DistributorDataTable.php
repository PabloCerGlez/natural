<?php

namespace App\DataTables;

use App\Models\Distributor;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class DistributorDataTable extends DataTable
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
            ->addColumn('action', 'distributor.action')
            ->addColumn('loyalty_points', function (Distributor $distributor) {
                $now = now();
                $loyaltyPoint = $distributor->loyaltyPoints()
                    ->where('period', '>=', $now->year.'-'.$now->month.'-01 00:00:00')->first();
                return $loyaltyPoint ? $loyaltyPoint->point : 0;
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
        return $model->newQuery()->with(['loyaltyPoints' => function ($query) {
            $now = now();
            return $query->where('period', '>=', $now->year.'-'.$now->month.'-'.$now->day.' 00:00:00');
        }]);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('distributor-table')
                    ->parameters([
                        'language' => ['url' => asset('languageDataTable.json')],
                    ])
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
            Column::make('identifier')->title('Identificador'),
            Column::make('name')->title('Nombre'),
            Column::make('phone'),
            Column::make('loyalty_points')->title('LRP')
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Distributor_' . date('YmdHis');
    }
}
