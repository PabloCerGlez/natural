<a href="{{route('carousel.edit', ['carousel' => $id])}}" class="btn btn-xs btn-warning">
    <i class="fas fa-edit"></i>
    Editar
</a>

<form action="{{route('carousel.destroy', ['carousel' => $id])}}" method="POST">
    @method('DELETE')
    @csrf

    <button type="submit" class="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i> Eliminar</button>
</form>
