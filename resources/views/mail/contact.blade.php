@component('mail::message')
    # Información del cliente

@component('mail::table')
| Campo | Datos |
| ------------- |:-------------:|
|**Nombre**:| {{$name}} |
|**Email**:|{{$email}}|
|**Mensaje**:|{{$message}}|
@endcomponent

@endcomponent
