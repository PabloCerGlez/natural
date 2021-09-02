<a class="btn btn-xs btn-default" href="{{route('raffle.show', ['raffle' => $raffle->id])}}">
    <i class="fas fa-eye"></i>
</a>

{{--<a href="{{route('raffle.edit', ['raffle' => $raffle->id])}}" class="btn btn-xs btn-warning">--}}
{{--    <i class="fas fa-edit"></i>--}}
{{--</a>--}}

@if($raffle->isNotFinished())
    <x-form style="display: contents;" id="updateStatusForm_{{$raffle->id}}" :action="route('raffle.update', ['raffle' => $raffle->id])" method="PUT">
        <input hidden value="true" name="updateStatus">
        <a class="btn btn-lg btn-link " onclick="document.getElementById('updateStatusForm_{{$raffle->id}}').submit()">
            @if(!$raffle->isCancel())
                <i class="fas fa-toggle-on" style="color: green"></i>
            @else
                <i class="fas fa-toggle-off"></i>
            @endif
        </a>
    </x-form>
@endif

