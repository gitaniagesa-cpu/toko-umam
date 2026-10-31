/* ==========================================================================
   SIM-KOPMA — Data Dummy (dikonversi dari database/kopma_24430121.sql)
   ========================================================================== */
window.KOPMA_SEED = {
  users: [
    { id: 1, nim_nip: 'ADM-24430121', name: 'Fatkhul Umam', title: 'Super Admin', email: 'fatkhul.admin@kopma.ac.id', phone: '081572638362', role: 'admin', fakultas: 'Manajemen KOPMA', poin_belanja: 120, simpanan_pokok: 100000, simpanan_wajib: 600000, simpanan_sukarela: 1500000, limit_paylater: 1000000 },
    { id: 2, nim_nip: 'KSR-24430122', name: 'Siti Rahmawati', title: 'Kasir Utama', email: 'kasir@kopma.ac.id', phone: '081234567802', role: 'kasir', fakultas: 'Operasional Mart', poin_belanja: 85, simpanan_pokok: 100000, simpanan_wajib: 450000, simpanan_sukarela: 500000, limit_paylater: 500000 },
    { id: 3, nim_nip: 'PGR-24430123', name: 'Dr. Hendra Wijaya', title: 'Ketua Pengurus', email: 'pengurus@kopma.ac.id', phone: '081234567803', role: 'pengurus', fakultas: 'Fakultas Ekonomi & Bisnis', poin_belanja: 310, simpanan_pokok: 100000, simpanan_wajib: 1200000, simpanan_sukarela: 4500000, limit_paylater: 2000000 },
    { id: 4, nim_nip: '24430121', name: 'Fatkhul Umam', title: 'Anggota Mahasiswa', email: 'fatkhul.24430121@student.ac.id', phone: '+62 815-7263-8362', role: 'anggota', fakultas: 'Fakultas Ilmu Komputer', poin_belanja: 450, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 1250000, limit_paylater: 500000 },
    { id: 5, nim_nip: '24430125', name: 'Nabila Putri Maharani', title: 'Anggota Mahasiswa', email: 'nabila.24430125@student.ac.id', phone: '085712349876', role: 'anggota', fakultas: 'Fakultas Ekonomi & Bisnis', poin_belanja: 620, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 2100000, limit_paylater: 750000 },
    { id: 6, nim_nip: '24430129', name: 'Rizky Ramadhan', title: 'Anggota Mahasiswa', email: 'rizky.24430129@student.ac.id', phone: '081345678910', role: 'anggota', fakultas: 'Fakultas Teknik', poin_belanja: 275, simpanan_pokok: 100000, simpanan_wajib: 250000, simpanan_sukarela: 450000, limit_paylater: 300000 },
    { id: 7, nim_nip: '24430133', name: 'Dewi Lestari Ningrum', title: 'Anggota Mahasiswa', email: 'dewi.24430133@student.ac.id', phone: '082199887766', role: 'anggota', fakultas: 'Fakultas Kedokteran', poin_belanja: 890, simpanan_pokok: 100000, simpanan_wajib: 350000, simpanan_sukarela: 3400000, limit_paylater: 1000000 },
    { id: 8, nim_nip: '24430140', name: 'Fajar Nugroho', title: 'Anggota Mahasiswa', email: 'fajar.24430140@student.ac.id', phone: '087811223344', role: 'anggota', fakultas: 'Fakultas Pertanian', poin_belanja: 190, simpanan_pokok: 100000, simpanan_wajib: 200000, simpanan_sukarela: 300000, limit_paylater: 250000 },
    { id: 9, nim_nip: '24430148', name: 'Citra Kirana Sari', title: 'Anggota Mahasiswa', email: 'citra.24430148@student.ac.id', phone: '089655443322', role: 'anggota', fakultas: 'Fakultas Hukum', poin_belanja: 530, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 980000, limit_paylater: 500000 },
    { id: 10, nim_nip: '24430155', name: 'Dimas Aditya', title: 'Anggota Mahasiswa', email: 'dimas.24430155@student.ac.id', phone: '081900112233', role: 'anggota', fakultas: 'Fakultas Ilmu Sosial', poin_belanja: 340, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 720000, limit_paylater: 500000 }
  ],

  products: [
    { id: 1, plu_code: '1001', barcode: '899238810101', name: 'Kopi Susu Gula Aren KOPMA 250ml', category: 'Minuman', cost_price: 8500, sell_price: 12000, member_discount: 1000, stock: 18, min_stock: 25, avg_daily_sales: 14.5, lead_time_days: 2, is_consignment: 0, supplier_name: 'KOPMA Barista Lab', supplier_phone: '081233445566' },
    { id: 2, plu_code: '1002', barcode: '899238810102', name: 'Air Mineral Gelas / Botol 600ml', category: 'Minuman', cost_price: 2200, sell_price: 3500, member_discount: 500, stock: 140, min_stock: 40, avg_daily_sales: 28, lead_time_days: 2, is_consignment: 0, supplier_name: 'PT Tirta Kampus Jaya', supplier_phone: '081199887711' },
    { id: 3, plu_code: '1003', barcode: '899238810103', name: 'Teh Pucuk Harum Less Sugar 350ml', category: 'Minuman', cost_price: 3100, sell_price: 4500, member_discount: 500, stock: 64, min_stock: 30, avg_daily_sales: 16, lead_time_days: 3, is_consignment: 0, supplier_name: 'Distributor Mayora Metro', supplier_phone: '081377889900' },
    { id: 4, plu_code: '1004', barcode: '899238810104', name: 'Susu Ultra Milk Cokelat 250ml', category: 'Minuman', cost_price: 5400, sell_price: 7000, member_discount: 500, stock: 22, min_stock: 30, avg_daily_sales: 11.2, lead_time_days: 3, is_consignment: 0, supplier_name: 'PT Ultrajaya Cabang', supplier_phone: '081266554433' },
    { id: 5, plu_code: '2001', barcode: '899238820201', name: 'Indomie Goreng Spesial Kampus', category: 'Sembako', cost_price: 2700, sell_price: 3500, member_discount: 200, stock: 35, min_stock: 60, avg_daily_sales: 32, lead_time_days: 3, is_consignment: 0, supplier_name: 'Indofood Grosir Kampus', supplier_phone: '081122331122' },
    { id: 6, plu_code: '2002', barcode: '899238820202', name: 'Beras Premium KOPMA Tani 5 Kg', category: 'Sembako', cost_price: 64000, sell_price: 72000, member_discount: 2500, stock: 14, min_stock: 15, avg_daily_sales: 4.5, lead_time_days: 4, is_consignment: 0, supplier_name: 'Gapoktan Metro Makmur', supplier_phone: '085266778899' },
    { id: 7, plu_code: '2003', barcode: '899238820203', name: 'Minyak Goreng Pouch 1 Liter', category: 'Sembako', cost_price: 14800, sell_price: 17500, member_discount: 1000, stock: 28, min_stock: 20, avg_daily_sales: 6.8, lead_time_days: 3, is_consignment: 0, supplier_name: 'Sembako Nusantara', supplier_phone: '081544332211' },
    { id: 8, plu_code: '3001', barcode: '899238830301', name: 'Roti Bakar Cokelat Keju Fresh', category: 'Snack & Roti', cost_price: 6000, sell_price: 9000, member_discount: 500, stock: 12, min_stock: 20, avg_daily_sales: 15, lead_time_days: 1, is_consignment: 1, supplier_name: 'UKM Tataboga Mahasiswa', supplier_phone: '085788990011' },
    { id: 9, plu_code: '3002', barcode: '899238830302', name: 'Risoles Mayo Smoked Beef (Isi 3)', category: 'Konsinyasi Mahasiswa', cost_price: 7500, sell_price: 10000, member_discount: 0, stock: 9, min_stock: 20, avg_daily_sales: 18.5, lead_time_days: 1, is_consignment: 1, supplier_name: 'Nabila Culinary (Anggota)', supplier_phone: '085712349876' },
    { id: 10, plu_code: '3003', barcode: '899238830303', name: 'Keripik Pisang Cokelat Lumer Lampung', category: 'Konsinyasi Mahasiswa', cost_price: 9500, sell_price: 13500, member_discount: 500, stock: 31, min_stock: 15, avg_daily_sales: 8.4, lead_time_days: 2, is_consignment: 1, supplier_name: 'Andi Snack UMKM', supplier_phone: '081298765432' },
    { id: 11, plu_code: '4001', barcode: '899238840401', name: 'Kertas HVS A4 80gr SiDu (1 Rim)', category: 'ATK & Kampus', cost_price: 46000, sell_price: 54000, member_discount: 2000, stock: 11, min_stock: 20, avg_daily_sales: 7.5, lead_time_days: 3, is_consignment: 0, supplier_name: 'Gramedia Mitra Kampus', supplier_phone: '081177665544' },
    { id: 12, plu_code: '4002', barcode: '899238840402', name: 'Buku Tulis Spiral Kampus B5 100 Lbr', category: 'ATK & Kampus', cost_price: 11000, sell_price: 15000, member_discount: 1000, stock: 45, min_stock: 25, avg_daily_sales: 9.2, lead_time_days: 4, is_consignment: 0, supplier_name: 'Gramedia Mitra Kampus', supplier_phone: '081177665544' },
    { id: 13, plu_code: '4003', barcode: '899238840403', name: 'Pulpen Gel Faster C600 Hitam (Box)', category: 'ATK & Kampus', cost_price: 18000, sell_price: 24000, member_discount: 1500, stock: 40, min_stock: 15, avg_daily_sales: 5, lead_time_days: 3, is_consignment: 0, supplier_name: 'Gramedia Mitra Kampus', supplier_phone: '081177665544' },
    { id: 14, plu_code: '4004', barcode: '899238840404', name: 'Flashdisk Kingston 64GB USB 3.2', category: 'ATK & Kampus', cost_price: 58000, sell_price: 75000, member_discount: 3000, stock: 16, min_stock: 10, avg_daily_sales: 2.8, lead_time_days: 5, is_consignment: 0, supplier_name: 'IT Center Distro', supplier_phone: '081988776655' },
    { id: 15, plu_code: '5001', barcode: '899238850501', name: 'Lanyard + ID Card Holder KOPMA', category: 'Merchandise', cost_price: 12000, sell_price: 20000, member_discount: 2000, stock: 52, min_stock: 20, avg_daily_sales: 6.5, lead_time_days: 5, is_consignment: 0, supplier_name: 'Konveksi Kreatif Kampus', supplier_phone: '082233445566' },
    { id: 16, plu_code: '5002', barcode: '899238850502', name: 'Totebag Kanvas Tebal Mahasiswa', category: 'Merchandise', cost_price: 22000, sell_price: 35000, member_discount: 3000, stock: 29, min_stock: 15, avg_daily_sales: 4.2, lead_time_days: 5, is_consignment: 0, supplier_name: 'Konveksi Kreatif Kampus', supplier_phone: '082233445566' }
  ],

  paymentSettings: {
    provider: 'midtrans', environment: 'sandbox', merchant_id: 'G8124430121',
    client_key: 'SB-Mid-client-Kopma24430121Key', server_key: 'SB-Mid-server-Kopma24430121Secret',
    enable_qris: true, enable_gopay_shopeepay: true, enable_va_bank: true, enable_simpanan_pay: true,
    fee_mode: 'ditanggung_kopma', qris_mdr_percent: 0.7, va_flat_fee: 4000,
    webhook_url: 'https://your-domain.com/api/midtrans/webhook'
  },

  transactions: [
    { id: 1, invoice_no: 'INV-20261028-001', user_id: 4, subtotal: 86000, discount_total: 3500, grand_total: 82500, payment_method: 'MIDTRANS_QRIS', payment_status: 'PAID', reference: 'MID-QRIS-992811', points_earned: 8, created_at: '2026-10-28T09:15:00' },
    { id: 2, invoice_no: 'INV-20261028-002', user_id: 5, subtotal: 69000, discount_total: 3000, grand_total: 66000, payment_method: 'SALDO_SIMPANAN', payment_status: 'PAID', reference: 'SIMP-24430125-01', points_earned: 6, created_at: '2026-10-28T11:30:00' },
    { id: 3, invoice_no: 'INV-20261029-003', user_id: 7, subtotal: 124000, discount_total: 5000, grand_total: 119000, payment_method: 'MIDTRANS_VA', payment_status: 'PAID', reference: 'MID-BCA-883712', points_earned: 11, created_at: '2026-10-29T13:20:00' },
    { id: 4, invoice_no: 'INV-20261030-004', user_id: 6, subtotal: 42000, discount_total: 1500, grand_total: 40500, payment_method: 'TUNAI', payment_status: 'PAID', reference: null, points_earned: 4, created_at: '2026-10-30T10:05:00' },
    { id: 5, invoice_no: 'INV-20261030-005', user_id: 9, subtotal: 95000, discount_total: 4000, grand_total: 91000, payment_method: 'MIDTRANS_EWALLET', payment_status: 'PAID', reference: 'MID-GOPAY-774123', points_earned: 9, created_at: '2026-10-30T15:45:00' },
    { id: 6, invoice_no: 'INV-20261031-006', user_id: 4, subtotal: 54000, discount_total: 2000, grand_total: 52000, payment_method: 'MIDTRANS_QRIS', payment_status: 'PAID', reference: 'MID-QRIS-998120', points_earned: 5, created_at: '2026-10-31T08:40:00' },
    { id: 7, invoice_no: 'INV-20261031-007', user_id: 10, subtotal: 107000, discount_total: 4500, grand_total: 102500, payment_method: 'MIDTRANS_QRIS', payment_status: 'PAID', reference: 'MID-QRIS-998451', points_earned: 10, created_at: '2026-10-31T14:10:00' },
    { id: 8, invoice_no: 'INV-20261101-008', user_id: 5, subtotal: 36000, discount_total: 2000, grand_total: 34000, payment_method: 'TUNAI', payment_status: 'PAID', reference: null, points_earned: 3, created_at: '2026-10-31T16:30:00' }
  ],

  finances: [
    { id: 1, user_id: 4, type: 'SIMPANAN_WAJIB', amount: 50000, channel: 'MIDTRANS_QRIS', status: 'BERHASIL', notes: 'Setoran Simpanan Wajib Bulan Oktober 2026', created_at: '2026-10-05T10:00:00' },
    { id: 2, user_id: 5, type: 'SIMPANAN_SUKARELA', amount: 250000, channel: 'MIDTRANS_VA_BRI', status: 'BERHASIL', notes: 'Topup Simpanan Sukarela via Virtual Account', created_at: '2026-10-12T14:20:00' },
    { id: 3, user_id: 7, type: 'SIMPANAN_SUKARELA', amount: 500000, channel: 'MIDTRANS_QRIS', status: 'BERHASIL', notes: 'Tabungan Sukarela Akhir Semester', created_at: '2026-10-20T09:10:00' },
    { id: 4, user_id: 6, type: 'PINJAMAN_DARURAT', amount: 300000, channel: 'TRANSFER_KOPMA', status: 'BERHASIL', notes: 'Pinjaman Buku Kuliah & Praktikum Teknik', created_at: '2026-10-22T11:45:00' },
    { id: 5, user_id: 8, type: 'PINJAMAN_DARURAT', amount: 250000, channel: 'TRANSFER_KOPMA', status: 'MENUNGGU', notes: 'Pinjaman Biaya Praktikum Lapangan', created_at: '2026-10-30T16:00:00' },
    { id: 6, user_id: 10, type: 'PINJAMAN_DARURAT', amount: 400000, channel: 'TRANSFER_KOPMA', status: 'MENUNGGU', notes: 'Pinjaman Biaya KKN Semester Ganjil', created_at: '2026-10-31T09:30:00' }
  ],

  academicForecast: [
    { periode: 'Pekan Ujian Akhir Semester (UAS)', waktu: '2 minggu lagi', lonjakan: '+42%', detail: 'Permintaan ATK, Kertas HVS A4 & Kopi Susu KOPMA', aksi: 'Tingkatkan stok HVS A4 minimal 45 rim dan bahan baku Kopi Susu Gula Aren +50% sebelum Senin depan.' },
    { periode: 'Awal Bulan / Pencairan Beasiswa', waktu: 'Tanggal 1 – 7', lonjakan: '+35%', detail: 'Transaksi Sembako & Setoran Simpanan Sukarela via QRIS', aksi: 'Aktifkan Promo Paket Hemat Kos Mahasiswa dan pastikan kuota settlement QRIS Midtrans aktif.' }
  ],

  security: {
    pin: '123456',
    autoLockMinutes: 5,
    twoFactorAuth: false,
    encryptionStatus: 'AES-256 Vault Aktif',
    failedAttempts: 0,
    lockoutUntil: null,
    auditLogs: [
      { id: 1, time: '2026-10-31T14:32:00', actor: 'Fatkhul Umam (Admin)', action: 'Login otentikasi sesi berhasil', ip: '192.168.1.10', level: 'INFO' },
      { id: 2, time: '2026-10-31T14:45:12', actor: 'Siti Rahmawati (Kasir)', action: 'Sesi Kasir Mart dibuka dengan shortcut F2', ip: '192.168.1.14', level: 'INFO' },
      { id: 3, time: '2026-10-31T15:10:05', actor: 'Sistem Toko Umam', action: 'Inisialisasi enkripsi sesi & repository publik', ip: '127.0.0.1', level: 'INFO' },
      { id: 4, time: '2026-10-31T15:25:50', actor: 'Fatkhul Umam (Admin)', action: 'Sinkronisasi konfigurasi Midtrans API Keys', ip: '192.168.1.10', level: 'WARN' },
      { id: 5, time: '2026-10-31T15:35:20', actor: 'Sistem Audit Keamanan', action: 'Pemeriksaan integritas database: 100% Valid & Aman', ip: '127.0.0.1', level: 'INFO' }
    ]
  }
};
