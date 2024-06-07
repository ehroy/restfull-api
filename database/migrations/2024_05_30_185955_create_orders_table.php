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
            $table->integer("user_id")->nullable(false);
            $table->integer('product_id')->nullable(false);
            $table->integer('address_id')->nullable(false);
            $table->integer('payment_settings_id')->nullable(false);
            $table->enum('type',['reguler','kargo']);
            $table->integer('berat');
            $table->integer('qty');
            $table->enum('status',['paid','unpaid','cancelled'])->default('unpaid');
            $table->integer("total")->comment('jumlah product');
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
