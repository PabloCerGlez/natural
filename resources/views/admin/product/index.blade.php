@extends('adminlte::page')


@section('content_header')
    <h1>Productos</h1>
@stop

@section('content')
    @include('flash::message')
    <div class="row-cols-1">
        <a href="{{route('product.create')}}" class="btn btn-info btn-flat"><i class="fa fa-plus"></i> Nuevo producto</a>
        <br>
        <br>
    </div>
    <x-card>
        <div class="table-responsive">
            {{$dataTable->table()}}
        </div>
    </x-card>
@stop

@section('js')
    {{$dataTable->scripts()}}
@stop
