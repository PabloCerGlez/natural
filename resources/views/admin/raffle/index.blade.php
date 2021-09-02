@extends('adminlte::page')


@section('content_header')
    <h1>Sorteo</h1>
@stop

@section('content')
    <div class="row-cols-1">
        <a href="{{route('raffle.create')}}" class="btn btn-info btn-flat"><i class="fa fa-plus"></i> Nuevo sorteo</a>
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
