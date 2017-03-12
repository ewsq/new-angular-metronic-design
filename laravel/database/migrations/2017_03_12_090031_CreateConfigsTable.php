<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('params', function (Blueprint $table) {
            $table->increments('id');
            $table->text('url');
            $table->integer('port');
            $table->integer('interval');
            $table->integer('timeauth');
            $table->text('rule');
            $table->text('action');
            $table->timestamps();
        });

        DB::table('params')->insert(config('socket.angular.params'));

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('configs');
    }
}
