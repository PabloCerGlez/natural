@extends('adminlte::page')


@section('content_header')
    <h1>Distribuidores</h1>
@stop

@section('content')
    <div class="row-cols-2">
        <x-form :action="route('distributor.store')" method="POST" enctype="multipart/form-data">
            <x-card title="Actualiza distribuidoras/es" class="card-primary">
                <x-slot name="tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i>
                    </button>
                </x-slot>

                <x-form.input name="file" type="file">
                    Distribuidoras/es
                </x-form.input>

                <x-slot name="footer">
                    <div class="fa-pull-right">
                        <button class="btn btn-success">Subir</button>
                    </div>
                </x-slot>
            </x-card>
        </x-form>
    </div>
    <x-card title="Listado de distribuidores">
        <div class="table-responsive">
            {{$dataTable->table()}}
        </div>
    </x-card>
@stop

@section('css')
@stop

@section('js')
    {{$dataTable->scripts()}}
@stop
