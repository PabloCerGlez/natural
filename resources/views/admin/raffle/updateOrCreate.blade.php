@extends('adminlte::page')


@section('content_header')
    <h1>Sorteo</h1>
@stop

@section('content')
    <div class="row-cols-2">
        <div
            id="formRafflesReact"
            @isset($raffle)
            data-raffle="{{$raffle}}"
            @endisset
        ></div>
    </div>
@stop
