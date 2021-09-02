<x-form :action="route('carousel.update', ['carousel' => $id])" method="PUT" id="formUp_{{$id}}">
    <input type="hidden" name="up" value="up">
</x-form>

<x-form :action="route('carousel.update', ['carousel' => $id])" method="PUT" id="formDown_{{$id}}">
    <input type="hidden" name="down" value="down">
</x-form>

<button class="btn btn-xs btn-info" onclick="document.getElementById('formUp_'+{{$id}}).submit();"><i class="fas fa-arrow-up"></i></button>
<button class="btn btn-xs btn-info" onclick="document.getElementById('formDown_'+{{$id}}).submit();"><i class="fas fa-arrow-down"></i></button>
