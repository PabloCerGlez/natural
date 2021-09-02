<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SendContactMailRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:2|max:150',
            'email' => 'required|email',
            'message' => 'required|min:20|max:200',
        ];
    }

    /**
     * Get the validation messages.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Ingresa un nombre.',
            'name.min' => 'Ingresa tu nombre completo.',
            'name.max' => 'Tu nombre no debe de exceder los :max caracteres.',
            'email.required' => 'Es necesario ingresar tu dirección de correo.',
            'email.email' => 'La dirección de correo ingresado no es válida.',
            'message.required' => 'Es requerido ingresar un mensaje.',
            'message.min' => 'El mensaje debe de ser de al menos :min caracteres',
            'message.max' => 'El mensaje no debe exceder los :min caracteres',
        ];
    }
}
