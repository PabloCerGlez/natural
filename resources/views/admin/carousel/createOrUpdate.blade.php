@extends('adminlte::page')

@section('content_header')
    <h1>Nuevo imagen de cabecera</h1>
@stop

@section('content')
    <x-form :action="$route" :method="$method" enctype="multipart/form-data">
        <x-card title="Información" class="card-primary">

            @if(isset($model) && $model->img)
                <div class="text-center">
                    <img src="{{'/storage/'.$model->img}}" height="300px">
                </div>
            @endif

            <x-form.input type="file" name="image">
                Imagen
            </x-form.input>

            <x-form.input name="title" :model="$model??null">
                Titulo
            </x-form.input>

            <x-form.input name="subtitle" :model="$model??null">
                Subtitulo
            </x-form.input>

            <x-form.textarea name="description" :model="$model??null">
                Description
            </x-form.textarea>

            <x-slot name="footer">
                <div class="pull-right">
                    <button type="submit" class="btn btn-success btn-flat" >Guardar</button>
                </div>
            </x-slot>
        </x-card>
    </x-form>
@stop

@section('css')
@stop

@section('js')
@stop
