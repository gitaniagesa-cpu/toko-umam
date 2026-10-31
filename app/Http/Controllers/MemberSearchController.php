<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MemberSearchController extends Controller
{
    /**
     * Pencarian Instan Anggota & Pelanggan menggunakan Nama atau Nomor HP (serta NIM)
     * Digunakan pada layar Kasir Superindo & Modul Anggota Admin
     */
    public function searchByNameOrPhone(Request $request)
    {
        $keyword = trim($request->query('q', ''));

        $query = DB::table('users')
            ->select('id', 'nim_nip', 'name', 'phone', 'role', 'fakultas', 'poin_belanja', 'simpanan_sukarela', 'limit_paylater')
            ->where('status_aktif', 1);

        if ($keyword !== '') {
            $query->where(function ($q) use ($keyword) {
                $q->where('name', 'LIKE', "%{$keyword}%")
                  ->orWhere('phone', 'LIKE', "%{$keyword}%")
                  ->orWhere('nim_nip', 'LIKE', "%{$keyword}%");
            });
        }

        return response()->json([
            'status' => 'success',
            'query' => $keyword,
            'results' => $query->limit(15)->get(),
        ]);
    }
}
