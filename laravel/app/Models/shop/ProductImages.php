<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;

class ProductImages extends Model
{
    protected $fillable = ['name', 'status', 'product_id'];

    protected $table = 'product_image';

}
