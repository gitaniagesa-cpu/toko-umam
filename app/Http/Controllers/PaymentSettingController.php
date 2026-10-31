<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class PaymentSettingController extends Controller
{
    /**
     * Tampilkan halaman pengaturan Midtrans Payment Gateway di Admin Panel
     */
    public function edit()
    {
        $setting = DB::table('payment_gateway_settings')->first();
        return view('admin.payment_gateway', compact('setting'));
    }

    /**
     * Simpan perubahan konfigurasi Midtrans secara dinamis dari Admin (Tanpa perlu edit file .env)
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'environment' => 'required|in:sandbox,production',
            'merchant_id' => 'required|string|max:100',
            'client_key' => 'required|string|max:150',
            'server_key' => 'required|string|max:150',
            'enable_qris' => 'boolean',
            'enable_gopay_shopeepay' => 'boolean',
            'enable_va_bank' => 'boolean',
            'enable_simpanan_pay' => 'boolean',
            'fee_mode' => 'required|in:ditanggung_kopma,dibebankan_pembeli',
            'qris_mdr_percent' => 'required|numeric|min:0|max:5',
            'va_flat_fee' => 'required|numeric|min:0',
        ]);

        $snapUrl = $validated['environment'] === 'production'
            ? 'https://app.midtrans.com/snap/snap.js'
            : 'https://app.sandbox.midtrans.com/snap/snap.js';

        DB::table('payment_gateway_settings')->updateOrInsert(
            ['id' => 1],
            array_merge($validated, [
                'snap_url' => $snapUrl,
                'updated_at' => now(),
            ])
        );

        Cache::forget('kopma_midtrans_config');

        return back()->with('success', 'Konfigurasi Midtrans Payment Gateway berhasil diperbarui secara real-time!');
    }
}
