<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarrouselUpdateRequest extends FormRequest
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
        $validate = [];
        if ($this->get('up') == null && $this->get('down') == null) {
            $validate = [
                'title' => ['required', 'string', 'max:20'],
                'subtitle' => ['required', 'string', 'max:50'],
                'description' => ['required', 'string'],
            ];
        }

        return $validate;
    }
}
