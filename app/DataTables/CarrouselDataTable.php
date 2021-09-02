<?php

namespace App\DataTables;

use App\Models\Carousel;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class CarrouselDataTable extends DataTable
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
            ->addColumn('action', 'carrousel.action')
            ->addColumn('img', function (Carousel $carrousel) {
                $img = $carrousel->img;
                return view('dataTable.products.image', compact('img'));
            })->addColumn('opciones', function (Carousel $carousel) {
                $id = $carousel->id;
                return view('dataTable.carousel.options', compact('id'));
            })
            ->addColumn('order', function (Carousel $carousel) {
                $id = $carousel->id;
                return view('dataTable.carousel.order', compact('id', ));
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param Carousel $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Carousel $model)
    {
        return $model->newQuery()->orderBy('order', 'asc');
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->setTableId('carrousel-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->orderBy(1);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id'),
            Column::make('title'),
            Column::make('subtitle'),
            Column::make('description'),
            Column::make('img'),
            Column::make('order'),
            Column::make('opciones'),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Carrousel_' . date('YmdHis');
    }
}
