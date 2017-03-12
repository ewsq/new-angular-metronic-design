<?php

namespace App\Http\Controllers\Angular\config;

use App\Models\Angular\Config;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ParamsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return json_encode(Config::all(['port', 'interval', 'timeauth', 'rule', 'action']));
    }
}
