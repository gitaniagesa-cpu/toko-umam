-- ============================================================================
-- DATABASE: kopma_24430121
-- Sistem Informasi Koperasi Mahasiswa (SIM-KOPMA) Smart POS & Analytics
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `kopma_24430121` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `kopma_24430121`;

-- 1. Tabel Users (Multi-Role: admin, kasir, pengurus, anggota)
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nim_nip` varchar(30) NOT NULL UNIQUE,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL UNIQUE,
  `phone` varchar(25) NOT NULL UNIQUE,
  `role` enum('admin','kasir','pengurus','anggota') NOT NULL DEFAULT 'anggota',
  `fakultas` varchar(100) DEFAULT NULL,
  `poin_belanja` int NOT NULL DEFAULT 0,
  `simpanan_pokok` decimal(15,2) NOT NULL DEFAULT 0.00,
  `simpanan_wajib` decimal(15,2) NOT NULL DEFAULT 0.00,
  `simpanan_sukarela` decimal(15,2) NOT NULL DEFAULT 0.00,
  `limit_paylater` decimal(15,2) NOT NULL DEFAULT 250000.00,
  `password` varchar(255) NOT NULL,
  `status_aktif` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_user_search` (`name`, `phone`, `nim_nip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Password default semua akun dummy: password123 (bcrypt hash)
INSERT INTO `users` (`id`, `nim_nip`, `name`, `email`, `phone`, `role`, `fakultas`, `poin_belanja`, `simpanan_pokok`, `simpanan_wajib`, `simpanan_sukarela`, `limit_paylater`, `password`) VALUES
(1, 'ADM-24430121', 'Fatkhul Umam (Super Admin)', 'fatkhul.admin@kopma.ac.id', '081572638362', 'admin', 'Manajemen KOPMA', 120, 100000, 600000, 1500000, 1000000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(2, 'KSR-24430122', 'Siti Rahmawati (Kasir Utama)', 'kasir@kopma.ac.id', '081234567802', 'kasir', 'Operasional Mart', 85, 100000, 450000, 500000, 500000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(3, 'PGR-24430123', 'Dr. Hendra Wijaya (Ketua Pengurus)', 'pengurus@kopma.ac.id', '081234567803', 'pengurus', 'Fakultas Ekonomi & Bisnis', 310, 100000, 1200000, 4500000, 2000000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(4, '24430121', 'Fatkhul Umam', 'fatkhul.24430121@student.ac.id', '+62 815-7263-8362', 'anggota', 'Fakultas Ilmu Komputer', 450, 100000, 300000, 1250000, 500000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(5, '24430125', 'Nabila Putri Maharani', 'nabila.24430125@student.ac.id', '085712349876', 'anggota', 'Fakultas Ekonomi & Bisnis', 620, 100000, 300000, 2100000, 750000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(6, '24430129', 'Rizky Ramadhan', 'rizky.24430129@student.ac.id', '081345678910', 'anggota', 'Fakultas Teknik', 275, 100000, 250000, 450000, 300000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(7, '24430133', 'Dewi Lestari Ningrum', 'dewi.24430133@student.ac.id', '082199887766', 'anggota', 'Fakultas Kedokteran', 890, 100000, 350000, 3400000, 1000000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(8, '24430140', 'Fajar Nugroho', 'fajar.24430140@student.ac.id', '087811223344', 'anggota', 'Fakultas Pertanian', 190, 100000, 200000, 300000, 250000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(9, '24430148', 'Citra Kirana Sari', 'citra.24430148@student.ac.id', '089655443322', 'anggota', 'Fakultas Hukum', 530, 100000, 300000, 980000, 500000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1'),
(10, '24430155', 'Dimas Aditya', 'dimas.24430155@student.ac.id', '081900112233', 'anggota', 'Fakultas Ilmu Sosial', 340, 100000, 300000, 720000, 500000, '$2y$12$K8y4fQvE1p.W0k.x0f1xO.9v1W7x1x1x1x1x1x1x1x1x1x1x1x1x1');

-- 2. Tabel Products (Inventori KOPMA Mart + Konsinyasi Mahasiswa)
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `plu_code` varchar(20) NOT NULL UNIQUE,
  `barcode` varchar(40) NOT NULL UNIQUE,
  `name` varchar(150) NOT NULL,
  `category` enum('Sembako','Minuman','Snack & Roti','ATK & Kampus','Merchandise','Konsinyasi Mahasiswa') NOT NULL,
  `cost_price` decimal(12,2) NOT NULL,
  `sell_price` decimal(12,2) NOT NULL,
  `member_discount` decimal(12,2) NOT NULL DEFAULT 0.00,
  `stock` int NOT NULL DEFAULT 0,
  `min_stock` int NOT NULL DEFAULT 15,
  `avg_daily_sales` decimal(8,2) NOT NULL DEFAULT 5.00,
  `lead_time_days` int NOT NULL DEFAULT 3,
  `is_consignment` tinyint(1) NOT NULL DEFAULT 0,
  `supplier_name` varchar(100) DEFAULT 'Gudang Utama KOPMA',
  `supplier_phone` varchar(25) DEFAULT '081122334455',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_product_pos` (`plu_code`, `barcode`, `name`, `category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `products` (`id`, `plu_code`, `barcode`, `name`, `category`, `cost_price`, `sell_price`, `member_discount`, `stock`, `min_stock`, `avg_daily_sales`, `lead_time_days`, `is_consignment`, `supplier_name`, `supplier_phone`) VALUES
(1, '1001', '899238810101', 'Kopi Susu Gula Aren KOPMA 250ml', 'Minuman', 8500, 12000, 1000, 18, 25, 14.50, 2, 0, 'KOPMA Barista Lab', '081233445566'),
(2, '1002', '899238810102', 'Air Mineral Gelas / Botol 600ml', 'Minuman', 2200, 3500, 500, 140, 40, 28.00, 2, 0, 'PT Tirta Kampus Jaya', '081199887711'),
(3, '1003', '899238810103', 'Teh Pucuk Harum Less Sugar 350ml', 'Minuman', 3100, 4500, 500, 64, 30, 16.00, 3, 0, 'Distributor Mayora Metro', '081377889900'),
(4, '1004', '899238810104', 'Susu Ultra Milk Cokelat 250ml', 'Minuman', 5400, 7000, 500, 22, 30, 11.20, 3, 0, 'PT Ultrajaya Cabang', '081266554433'),
(5, '2001', '899238820201', 'Indomie Goreng Spesial Kampus', 'Sembako', 2700, 3500, 200, 35, 60, 32.00, 3, 0, 'Indofood Grosir Kampus', '081122331122'),
(6, '2002', '899238820202', 'Beras Premium KOPMA Tani 5 Kg', 'Sembako', 64000, 72000, 2500, 14, 15, 4.50, 4, 0, 'Gapoktan Metro Makmur', '085266778899'),
(7, '2003', '899238820203', 'Minyak Goreng Pouch 1 Liter', 'Sembako', 14800, 17500, 1000, 28, 20, 6.80, 3, 0, 'Sembako Nusantara', '081544332211'),
(8, '3001', '899238830301', 'Roti Bakar Cokelat Keju Fresh', 'Snack & Roti', 6000, 9000, 500, 12, 20, 15.00, 1, 1, 'UKM Tataboga Mahasiswa', '085788990011'),
(9, '3002', '899238830302', 'Risoles Mayo Smoked Beef (Isi 3)', 'Konsinyasi Mahasiswa', 7500, 10000, 0, 9, 20, 18.50, 1, 1, 'Nabila Culinary (Anggota)', '085712349876'),
(10, '3003', '899238830303', 'Keripik Pisang Cokelat Lumer Lampung', 'Konsinyasi Mahasiswa', 9500, 13500, 500, 31, 15, 8.40, 2, 1, 'Andi Snack UMKM', '081298765432'),
(11, '4001', '899238840401', 'Kertas HVS A4 80gr SiDu (1 Rim)', 'ATK & Kampus', 46000, 54000, 2000, 11, 20, 7.50, 3, 0, 'Gramedia Mitra Kampus', '081177665544'),
(12, '4002', '899238840402', 'Buku Tulis Spiral Kampus B5 100 Lbr', 'ATK & Kampus', 11000, 15000, 1000, 45, 25, 9.20, 4, 0, 'Gramedia Mitra Kampus', '081177665544'),
(13, '4003', '899238840403', 'Pulpen Gel Faster C600 Hitam (Box)', 'ATK & Kampus', 18000, 24000, 1500, 40, 15, 5.00, 3, 0, 'Gramedia Mitra Kampus', '081177665544'),
(14, '4004', '899238840404', 'Flashdisk Kingston 64GB USB 3.2', 'ATK & Kampus', 58000, 75000, 3000, 16, 10, 2.80, 5, 0, 'IT Center Distro', '081988776655'),
(15, '5001', '899238850501', 'Lanyard + ID Card Holder KOPMA', 'Merchandise', 12000, 20000, 2000, 52, 20, 6.50, 5, 0, 'Konveksi Kreatif Kampus', '082233445566'),
(16, '5002', '899238850502', 'Totebag Kanvas Tebal Mahasiswa', 'Merchandise', 22000, 35000, 3000, 29, 15, 4.20, 5, 0, 'Konveksi Kreatif Kampus', '082233445566');

-- 3. Tabel Payment Gateway Settings (Dikelola via Panel Admin tanpa edit .env)
DROP TABLE IF EXISTS `payment_gateway_settings`;
CREATE TABLE `payment_gateway_settings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `provider` varchar(50) NOT NULL DEFAULT 'midtrans',
  `environment` enum('sandbox','production') NOT NULL DEFAULT 'sandbox',
  `merchant_id` varchar(100) NOT NULL,
  `client_key` varchar(150) NOT NULL,
  `server_key` varchar(150) NOT NULL,
  `snap_url` varchar(255) NOT NULL DEFAULT 'https://app.sandbox.midtrans.com/snap/snap.js',
  `enable_qris` tinyint(1) NOT NULL DEFAULT 1,
  `enable_gopay_shopeepay` tinyint(1) NOT NULL DEFAULT 1,
  `enable_va_bank` tinyint(1) NOT NULL DEFAULT 1,
  `enable_simpanan_pay` tinyint(1) NOT NULL DEFAULT 1,
  `fee_mode` enum('ditanggung_kopma','dibebankan_pembeli') NOT NULL DEFAULT 'ditanggung_kopma',
  `qris_mdr_percent` decimal(5,2) NOT NULL DEFAULT 0.70,
  `va_flat_fee` decimal(10,2) NOT NULL DEFAULT 4000.00,
  `webhook_url` varchar(255) NOT NULL DEFAULT 'http://localhost:8000/api/midtrans/webhook',
  `updated_by` bigint unsigned DEFAULT 1,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `payment_gateway_settings` (`id`, `provider`, `environment`, `merchant_id`, `client_key`, `server_key`, `snap_url`, `enable_qris`, `enable_gopay_shopeepay`, `enable_va_bank`, `enable_simpanan_pay`, `fee_mode`, `qris_mdr_percent`, `va_flat_fee`, `webhook_url`) VALUES
(1, 'midtrans', 'sandbox', 'G8124430121', 'SB-Mid-client-Kopma24430121Key', 'SB-Mid-server-Kopma24430121Secret', 'https://app.sandbox.midtrans.com/snap/snap.js', 1, 1, 1, 1, 'ditanggung_kopma', 0.70, 4000.00, 'http://localhost:8000/api/midtrans/webhook');

-- 4. Tabel Transactions (Header Transaksi Kasir & Midtrans)
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `invoice_no` varchar(40) NOT NULL UNIQUE,
  `user_id` bigint unsigned DEFAULT NULL COMMENT 'Anggota KOPMA (Nullable jika Umum)',
  `cashier_id` bigint unsigned NOT NULL DEFAULT 2,
  `subtotal` decimal(15,2) NOT NULL,
  `discount_total` decimal(15,2) NOT NULL DEFAULT 0.00,
  `admin_fee` decimal(15,2) NOT NULL DEFAULT 0.00,
  `grand_total` decimal(15,2) NOT NULL,
  `payment_method` enum('TUNAI','MIDTRANS_QRIS','MIDTRANS_VA','MIDTRANS_EWALLET','SALDO_SIMPANAN') NOT NULL,
  `payment_status` enum('PAID','PENDING','EXPIRED','REFUNDED') NOT NULL DEFAULT 'PAID',
  `midtrans_snap_token` varchar(120) DEFAULT NULL,
  `midtrans_reference` varchar(120) DEFAULT NULL,
  `points_earned` int NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_trx_date` (`created_at`, `payment_status`),
  CONSTRAINT `fk_trx_member` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `transactions` (`id`, `invoice_no`, `user_id`, `cashier_id`, `subtotal`, `discount_total`, `admin_fee`, `grand_total`, `payment_method`, `payment_status`, `midtrans_reference`, `points_earned`, `created_at`) VALUES
(1, 'INV-20261028-001', 4, 2, 86000, 3500, 0, 82500, 'MIDTRANS_QRIS', 'PAID', 'MID-QRIS-992811', 8, '2026-10-28 09:15:00'),
(2, 'INV-20261028-002', 5, 2, 69000, 3000, 0, 66000, 'SALDO_SIMPANAN', 'PAID', 'SIMP-24430125-01', 6, '2026-10-28 11:30:00'),
(3, 'INV-20261029-003', 7, 2, 124000, 5000, 0, 119000, 'MIDTRANS_VA', 'PAID', 'MID-BCA-883712', 11, '2026-10-29 13:20:00'),
(4, 'INV-20261030-004', 6, 2, 42000, 1500, 0, 40500, 'TUNAI', 'PAID', NULL, 4, '2026-10-30 10:05:00'),
(5, 'INV-20261030-005', 9, 2, 95000, 4000, 0, 91000, 'MIDTRANS_EWALLET', 'PAID', 'MID-GOPAY-774123', 9, '2026-10-30 15:45:00'),
(6, 'INV-20261031-006', 4, 2, 54000, 2000, 0, 52000, 'MIDTRANS_QRIS', 'PAID', 'MID-QRIS-998120', 5, '2026-10-31 08:40:00'),
(7, 'INV-20261031-007', 10, 2, 107000, 4500, 0, 102500, 'MIDTRANS_QRIS', 'PAID', 'MID-QRIS-998451', 10, '2026-10-31 14:10:00'),
(8, 'INV-20261101-008', 5, 2, 36000, 2000, 0, 34000, 'TUNAI', 'PAID', NULL, 3, '2026-11-01 01:30:00');

-- 5. Tabel Simpanan & Pinjaman Anggota
DROP TABLE IF EXISTS `member_finances`;
CREATE TABLE `member_finances` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `type` enum('SIMPANAN_POKOK','SIMPANAN_WAJIB','SIMPANAN_SUKARELA','PINJAMAN_DARURAT','ANGSURAN_PINJAMAN') NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `payment_channel` varchar(50) NOT NULL DEFAULT 'MIDTRANS_QRIS',
  `status` enum('BERHASIL','MENUNGGU','DITOLAK') NOT NULL DEFAULT 'BERHASIL',
  `notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_fin_member` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `member_finances` (`id`, `user_id`, `type`, `amount`, `payment_channel`, `status`, `notes`) VALUES
(1, 4, 'SIMPANAN_WAJIB', 50000, 'MIDTRANS_QRIS', 'BERHASIL', 'Setoran Simpanan Wajib Bulan Oktober 2026'),
(2, 5, 'SIMPANAN_SUKARELA', 250000, 'MIDTRANS_VA_BRI', 'BERHASIL', 'Topup Simpanan Sukarela via Virtual Account'),
(3, 7, 'SIMPANAN_SUKARELA', 500000, 'MIDTRANS_QRIS', 'BERHASIL', 'Tabungan Sukarela Akhir Semester'),
(4, 6, 'PINJAMAN_DARURAT', 300000, 'TRANSFER_KOPMA', 'BERHASIL', 'Pinjaman Buku Kuliah & Praktikum Teknik');
