<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;

class ProductCategories extends Model
{
    protected $fillable = ['name', 'status'];
    protected $table = 'products_category';

}
