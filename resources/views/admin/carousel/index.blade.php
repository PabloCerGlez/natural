@extends('adminlte::page')


@section('content_header')
    <h1>Imagines de cabecera</h1>
@stop

@section('content')
    <div class="row-cols-1">
        <a href="{{route('carousel.create')}}" class="btn btn-info btn-flat"><i class="fa fa-plus"></i> Nuevo</a>
        <br>
        <br>
    </div>
    <x-card title="Listado de carrusel">
        {{$dataTable->table()}}
    </x-card>
@stop

@section('css')
@stop

@section('js')
    {{$dataTable->scripts()}}
@stop
