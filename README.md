# 🏛️ SIM-KOPMA — Smart Cooperative System

Sistem Informasi Koperasi Mahasiswa: **POS Kasir ritel**, **Smart Analytics**, **Simpanan & SHU Anggota**, dan **integrasi Midtrans** dalam tampilan yang elegan dan nyaman di mata.

> **Demo live:** `https://<username-github>.github.io/<nama-repo>/`

---

## ✨ Fitur

| Modul | Deskripsi |
| :--- | :--- |
| **Dashboard Eksekutif** | Tren & proyeksi omzet 7 hari (Weighted Moving Average), distribusi metode bayar, rekomendasi restock (Reorder Point), dan rencana berbasis kalender akademik |
| **Kasir Mart (POS)** | Cari produk / scan barcode / PLU, pilih anggota (nama, NIM, No HP), diskon member otomatis, Tunai · QRIS · E-Wallet · VA · Saldo Simpanan, cetak struk, shortcut keyboard **F1–F10** |
| **Data Anggota** | Direktori multi-role dengan pencarian instan |
| **Produk & Stok** | Margin, nilai persediaan, status stok (Aman / Siaga / Kritis) |
| **Riwayat Transaksi** | Filter per metode pembayaran + lihat struk |
| **Laporan SHU** | Estimasi SHU per anggota (jasa transaksi + jasa modal) secara real-time |
| **Persetujuan Pinjaman** | Setujui / tolak pengajuan pinjaman anggota |
| **Payment Gateway** | Atur kredensial Midtrans (sandbox/production), metode & biaya — tanpa edit `.env` |
| **Beranda Anggota** | Kartu saldo simpanan, estimasi SHU, poin, riwayat belanja, top-up |

## 🔐 Akun Demo

Semua akun memakai kata sandi **`password123`** (atau klik tombol akun demo di halaman login).

| Role | Login |
| :--- | :--- |
| Super Admin | `fatkhul.admin@kopma.ac.id` |
| Kasir Mart | `kasir@kopma.ac.id` |
| Pengurus / Ketua | `pengurus@kopma.ac.id` |
| Anggota Mahasiswa | `fatkhul.24430121@student.ac.id` |

> Data tersimpan di `localStorage` browser. Tambahkan `?reset` di URL untuk mengembalikan data awal.

## 🚀 Publikasi ke GitHub Pages

1. Buat repository baru di GitHub (Public), misalnya `sim-kopma`.
2. Unggah seluruh isi folder ini (via **Add file → Upload files** atau `git push`).
3. Buka **Settings → Pages**, pada **Source** pilih **GitHub Actions**.
4. Workflow `.github/workflows/pages.yml` akan otomatis men-deploy. Situs aktif di
   `https://<username>.github.io/sim-kopma/` dalam 1–2 menit.

Alternatif tanpa Actions: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

## 🗂️ Struktur

```
├── index.html                 # Aplikasi demo (static, siap GitHub Pages)
├── assets/
│   ├── css/style.css          # Tema luxury muted (charcoal & champagne gold)
│   └── js/
│       ├── data.js            # Data dummy (konversi dari SQL)
│       └── app.js             # SPA: routing, POS, analytics, SHU, dll.
├── app/                       # Source backend Laravel 11 (Controller & Service)
├── routes/web.php
├── database/kopma_24430121.sql
└── README_INSTALASI_LOCALHOST.md  # Panduan menjalankan versi Laravel di localhost
```

## 🧠 Metode Analitik

- **Reorder Point** = (rata-rata penjualan harian × lead time) + safety stock (2 hari)
- **Rekomendasi order** = max(kebutuhan 14 hari − stok, 2 × stok minimum)
- **Proyeksi omzet** = Weighted Moving Average 4 hari dengan faktor musiman ringan
- **SHU** = 40% jasa transaksi (proporsional belanja) + 25% jasa modal (proporsional simpanan)

## ⚙️ Versi Backend (Laravel)

Versi demo ini berjalan sepenuhnya di browser. Untuk versi server (Laravel + MySQL + Midtrans asli), lihat [README_INSTALASI_LOCALHOST.md](README_INSTALASI_LOCALHOST.md).

---

© 2026 SIM-KOPMA · NIM 24430121
