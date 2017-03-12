<?php

namespace App\Models\shop;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'price', 'count', 'status'];

    public function category()
    {
        return $this->belongsToMany('\App\Models\shop\ProductCategories', 'product_assigned_categories', 'product_id', 'category_id');
    }

    public function image()
    {
        return $this->hasMany('\App\Models\shop\ProductImages', 'product_id', 'id');
    }

    public static function getWithJoin()
    {
        $products = (new self())
            ->select('id')
            ->orderBy('products.created_at', 'desc')
            ->paginate(10);

        return $products;
    }
}
