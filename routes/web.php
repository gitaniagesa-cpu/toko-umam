<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PosKasirController;
use App\Http\Controllers\SmartAnalyticsController;
use App\Http\Controllers\PaymentSettingController;
use App\Http\Controllers\MemberSearchController;

// Redirect root ke halaman Login Multi-Role
Route::get('/', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'authenticate'])->name('login.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Group Middleware Autentikasi Multi-Role
Route::middleware(['auth'])->group(function () {
    // 1. Dashboard Cerdas & Prediksi Rencana Ke Depan (Admin & Pengurus)
    Route::get('/dashboard/analytics', [SmartAnalyticsController::class, 'index'])
        ->name('analytics.index');

    // 2. Kasir Gaya Ritel Superindo + Shortcut Keyboard + Cari Nama/No HP
    Route::get('/pos/superindo-kasir', [PosKasirController::class, 'index'])
        ->name('pos.index');
    Route::post('/pos/checkout', [PosKasirController::class, 'checkout'])
        ->name('pos.checkout');

    // 3. API Pencarian Cepat Anggota & Produk via Nama / Nomor HP / NIM / Barcode
    Route::get('/api/search/members', [MemberSearchController::class, 'searchByNameOrPhone'])
        ->name('api.members.search');
    Route::get('/api/search/products', [PosKasirController::class, 'searchProducts'])
        ->name('api.products.search');

    // 4. Pengaturan Dinamis Midtrans Payment Gateway melalui Admin (Tanpa Edit .env)
    Route::get('/admin/payment-gateway', [PaymentSettingController::class, 'edit'])
        ->name('admin.midtrans.edit');
    Route::put('/admin/payment-gateway', [PaymentSettingController::class, 'update'])
        ->name('admin.midtrans.update');
    Route::post('/admin/payment-gateway/test-ping', [PaymentSettingController::class, 'testConnection'])
        ->name('admin.midtrans.test');
});

// Webhook Callback Midtrans (Bebas CSRF untuk notifikasi otomatis Server-to-Server)
Route::post('/api/midtrans/webhook', [PaymentSettingController::class, 'handleWebhook'])
    ->name('midtrans.webhook');
