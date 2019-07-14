<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


        <!-- Styles -->
        <style>
            html, body {
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }


                .form-signin {
                width: 100%;
                max-width: 420px;
                padding: 15px;
                margin: auto;
                }

                .form-label-group {
                position: relative;
                margin-bottom: 1rem;
                }

                .form-label-group > input,
                .form-label-group > label {
                height: 3.125rem;
                padding: .75rem;
                }

                .form-label-group > label {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                margin-bottom: 0; /* Override default `<label>` margin */
                line-height: 1.5;
                color: #495057;
                pointer-events: none;
                cursor: text; /* Match the input under the label */
                border: 1px solid transparent;
                border-radius: .25rem;
                transition: all .1s ease-in-out;
                }

                .form-label-group input::-webkit-input-placeholder {
                color: transparent;
                }

                .form-label-group input:-ms-input-placeholder {
                color: transparent;
                }

                .form-label-group input::-ms-input-placeholder {
                color: transparent;
                }

                .form-label-group input::-moz-placeholder {
                color: transparent;
                }

                .form-label-group input::placeholder {
                color: transparent;
                }

                .form-label-group input:not(:placeholder-shown) {
                padding-top: 1.25rem;
                padding-bottom: .25rem;
                }

                .form-label-group input:not(:placeholder-shown) ~ label {
                padding-top: .25rem;
                padding-bottom: .25rem;
                font-size: 12px;
                color: #777;
                }

                /* Fallback for Edge
                -------------------------------------------------- */
                @supports (-ms-ime-align: auto) {
                .form-label-group > label {
                    display: none;
                }
                .form-label-group input::-ms-input-placeholder {
                    color: #777;
                }
                }

                /* Fallback for IE
                -------------------------------------------------- */
                @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
                .form-label-group > label {
                    display: none;
                }
                .form-label-group input:-ms-input-placeholder {
                    color: #777;
                }
                }
        </style>
    </head>
    <body>
        <div id="app">
           <root-component />
        </div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
