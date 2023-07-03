<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'no_plate' => 'required',
            'model' => 'required',
            'last_service_date' => 'nullable',
            'service_date' => 'required',
            'owner' => 'required',
            'mobile_phone' => 'required',
            'birthday' => 'required',
            'description' => 'nullable',
        ];
    }
}
