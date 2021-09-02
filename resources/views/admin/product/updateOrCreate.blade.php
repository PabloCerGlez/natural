@extends('adminlte::page')


@section('content_header')
    <h1>Productos</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-md-6">
            <div id="formProductsReact"
                 @isset($product)
                 data-product="{{$product}}"
                 @endisset
            ></div>
        </div>
    </div>
@stop
