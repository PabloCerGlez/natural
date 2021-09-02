<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>CerGlez</title>
        <link rel="stylesheet" href="{{ mix('css/web.css').'?'.time() }}">
    </head>
    <body>
        <div id="webReact"></div>
        <script src="{{ mix('js/app.js').'?'.time()}}"></script>
    </body>
</html>
