<?php

namespace App\DataTables;

use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;
use Yajra\DataTables\DataTableAbstract;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class PostDataTable extends DataTable
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
            ->addColumn('action', 'post.action')
            ->addColumn('img', function (Post $post) {
                $img = $post->img;
                return view('dataTable.products.image', compact('img'));
            })
            ->addColumn('options', function (Post $post) {
                $id = $post = $post->id;
                return view('dataTable.post.options', compact('id'));
            })->addColumn('status', function (Post $post) {
                return $post->postStatus->name;
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param Post $model
     * @return Builder
     */
    public function query(Post $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->setTableId('post-table')
            ->parameters([
                'language' => ['url' => asset('languageDataTable.json')],
            ])
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
            Column::make('id')->title('#'),
            Column::make('title')->title('Title'),
            Column::make('img')->title('Imagen'),
            Column::make('status')->title('Estado'),
            Column::make('options')->title('Opciones'),

        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Post_' . date('YmdHis');
    }
}
