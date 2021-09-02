<?php

namespace App\Http\Controllers\Mail;

use App\Http\Controllers\Controller;
use App\Http\Requests\SendContactMailRequest;
use App\Mail\ContactMail;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(SendContactMailRequest $request)
    {
        $countTimesToRegister = Message::where('email', $request->email)->count();

        if ($countTimesToRegister >= 2) {
            return response()->json([
                'status' => 'OK'
            ]);
        }

        $message = new Message($request->all());
        $message->save();

        Mail::to(env('EMAIL_TO_SEND_INFO'))->send(new ContactMail(
            $request->name,
            $request->message,
            $request->email
        ));

        return response()->json([
            'status' => 'OK',
        ]);
    }
}
