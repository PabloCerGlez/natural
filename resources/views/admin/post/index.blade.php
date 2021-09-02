@extends('adminlte::page')


@section('content_header')
    <h1>Posts</h1>
@stop

@section('content')
    <div class="row-cols-1">
        <a href="{{route('post.create')}}" class="btn btn-info btn-flat"><i class="fa fa-plus"></i> Nuevo post</a>
        <br>
        <br>
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
