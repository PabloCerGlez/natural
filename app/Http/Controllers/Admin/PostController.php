<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\PostDataTable;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use function Complex\theta;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataTable = new PostDataTable();
        return $dataTable->render('admin.post.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create()
    {
        $action = route('post.store');
        $method = 'POST';

        return view('admin.post.createOrUpdate', compact('action', 'method'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $post = Post::create($request->all());
        return response($post)->json();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response|View
     */
    public function edit()
    {
        return view('admin.post.createOrUpdate');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->update([
            $request->all()
        ]);

        return response()->json($post, 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
