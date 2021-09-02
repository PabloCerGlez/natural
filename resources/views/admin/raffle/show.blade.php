@php(\Config::set('adminlte.layout_topnav', true))

@extends('adminlte::page')

@section('content_header')
    <h1>Sorteo</h1>
@stop

@section('content')
    <x-card>
        <div
            id="raffleReact"
            data-raffle="{{$raffle}}"
        ></div>
    </x-card>
    <x-card title="Lista de participantes" class="card-success">
        <x-slot name="tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
        </x-slot>
        <div class="table-responsive">
            {{$dataTable->table()}}
        </div>
    </x-card>
@stop

@section('js')
    {{$dataTable->scripts()}}
@stop
