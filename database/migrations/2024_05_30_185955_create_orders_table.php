<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id")->nullable(false);
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('product_id')->nullable(false);
            $table->foreign('product_id')->references('id')->on('products');
            $table->unsignedBigInteger('address_id')->nullable(false);
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->integer('payment_settings_id')->nullable(false);
            $table->enum('type',['reguler','kargo']);
            $table->integer('berat');
            $table->integer('qty');
            $table->enum('status',['paid','unpaid','cancelled'])->default('unpaid');
            $table->integer('ongkir');
            $table->integer("total")->comment('jumlah product');
            $table->string('invoice');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
