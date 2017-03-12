<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auth_history', function (Blueprint $table) {
            $table->string('id')->unique();
            $table->integer('user_id')->unsigned();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->text('logged_in_at')->nullable();
            $table->text('logged_out_at')->nullable();
        });

        Schema::table('auth_history', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('auth_history', function (Blueprint $table) {
            $table->dropForeign('auth_history_user_id_foreign');
        });
        Schema::drop('auth_history');
    }
}
