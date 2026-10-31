# Panduan Menjalankan Sistem Informasi KOPMA (`kopma_24430121`) di Localhost

Paket ini berisi kode sumber **Laravel 11**, struktur database MySQL **`kopma_24430121`**, beserta data dummy lengkap.

## 1. Persiapan Database MySQL (`kopma_24430121`)
1. Nyalakan **MySQL** melalui **Laragon** atau **XAMPP**.
2. Buka **phpMyAdmin** (`http://localhost/phpmyadmin`) atau terminal MySQL.
3. Import file **`database/kopma_24430121.sql`** (file ini otomatis membuat database `kopma_24430121` beserta seluruh tabel dan data dummy anggota, produk ritel, transaksi, dan pengaturan Midtrans).

## 2. Konfigurasi & Menjalankan Laravel di Localhost
```bash
# 1. Salin file konfigurasi environment
cp .env.example .env

# 2. Pastikan konfigurasi database di .env sesuai:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=kopma_24430121
# DB_USERNAME=root
# DB_PASSWORD=

# 3. Install dependensi Composer & jalankan server lokal
composer install
php artisan key:generate
php artisan serve
```
Buka **`http://localhost:8000`** pada browser Anda.

## 3. Daftar Akun Login Dummy (Multi-Role)
| Role Akun | Email / NIM Login | Nomor HP | Password | Hak Akses Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Super Admin** | `fatkhul.admin@kopma.ac.id` (`ADM-24430121` - Fatkhul Umam) | `081572638362` | `password123` | Smart Analytics AI, Rencana Kedepan, Pengaturan Midtrans UI, Produk & Anggota |
| **Kasir Mart** | `kasir@kopma.ac.id` (`KSR-24430122`) | `081234567802` | `password123` | POS Kasir Gaya Superindo (Shortcut F1-F10, Cari Nama/No HP, Bayar QRIS/Tunai) |
| **Pengurus / Ketua** | `pengurus@kopma.ac.id` (`PGR-24430123`) | `081234567803` | `password123` | Laporan SHU Real-time, Persetujuan Pinjaman, Prediksi Stok & Arus Kas |
| **Anggota Mahasiswa** | `fatkhul.24430121@student.ac.id` (`24430121` - Fatkhul Umam) | `+62 815-7263-8362` | `password123` | Cek Saldo Simpanan, Estimasi SHU, Top-Up via Midtrans, Riwayat Belanja |
