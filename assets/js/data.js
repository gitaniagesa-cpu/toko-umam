/* ==========================================================================
   SIM-KOPMA — Data Dummy Lengkap (Shopee / Mart Style)
   Koleksi Produk Brand Ternama & UMKM Lokal Nyata + Harga Pasar & Foto HD
   ========================================================================== */
window.KOPMA_SEED = {
  users: [
    { id: 1, nim_nip: 'ADM-24430121', name: 'Fatkhul Umam', title: 'Super Admin', email: 'fatkhul.admin@kopma.ac.id', phone: '081572638362', role: 'admin', password: 'password123', fakultas: 'Manajemen KOPMA', poin_belanja: 120, simpanan_pokok: 100000, simpanan_wajib: 600000, simpanan_sukarela: 1500000, limit_paylater: 1000000 },
    { id: 2, nim_nip: 'KSR-24430122', name: 'Siti Rahmawati', title: 'Kasir Utama', email: 'kasir@kopma.ac.id', phone: '081234567802', role: 'kasir', password: 'password123', fakultas: 'Operasional Mart', poin_belanja: 85, simpanan_pokok: 100000, simpanan_wajib: 450000, simpanan_sukarela: 500000, limit_paylater: 500000 },
    { id: 3, nim_nip: 'PGR-24430123', name: 'Dr. Hendra Wijaya', title: 'Ketua Pengurus', email: 'pengurus@kopma.ac.id', phone: '081234567803', role: 'pengurus', password: 'password123', fakultas: 'Fakultas Ekonomi & Bisnis', poin_belanja: 310, simpanan_pokok: 100000, simpanan_wajib: 1200000, simpanan_sukarela: 4500000, limit_paylater: 2000000 },
    { id: 4, nim_nip: '24430121', name: 'Fatkhul Umam', title: 'Anggota Mahasiswa', email: 'fatkhul.24430121@student.ac.id', phone: '+62 815-7263-8362', role: 'anggota', password: 'password123', fakultas: 'Fakultas Ilmu Komputer', poin_belanja: 450, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 1250000, limit_paylater: 500000 },
    { id: 5, nim_nip: '24430125', name: 'Nabila Putri Maharani', title: 'Anggota Mahasiswa', email: 'nabila.24430125@student.ac.id', phone: '085712349876', role: 'anggota', password: 'password123', fakultas: 'Fakultas Ekonomi & Bisnis', poin_belanja: 620, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 2100000, limit_paylater: 750000 },
    { id: 6, nim_nip: '24430129', name: 'Rizky Ramadhan', title: 'Anggota Mahasiswa', email: 'rizky.24430129@student.ac.id', phone: '081345678910', role: 'anggota', password: 'password123', fakultas: 'Fakultas Teknik', poin_belanja: 275, simpanan_pokok: 100000, simpanan_wajib: 250000, simpanan_sukarela: 450000, limit_paylater: 300000 },
    { id: 7, nim_nip: '24430133', name: 'Dewi Lestari Ningrum', title: 'Anggota Mahasiswa', email: 'dewi.24430133@student.ac.id', phone: '082199887766', role: 'anggota', password: 'password123', fakultas: 'Fakultas Kedokteran', poin_belanja: 890, simpanan_pokok: 100000, simpanan_wajib: 350000, simpanan_sukarela: 3400000, limit_paylater: 1000000 },
    { id: 8, nim_nip: '24430140', name: 'Fajar Nugroho', title: 'Anggota Mahasiswa', email: 'fajar.24430140@student.ac.id', phone: '087811223344', role: 'anggota', password: 'password123', fakultas: 'Fakultas Pertanian', poin_belanja: 190, simpanan_pokok: 100000, simpanan_wajib: 200000, simpanan_sukarela: 300000, limit_paylater: 250000 },
    { id: 9, nim_nip: '24430148', name: 'Citra Kirana Sari', title: 'Anggota Mahasiswa', email: 'citra.24430148@student.ac.id', phone: '089655443322', role: 'anggota', password: 'password123', fakultas: 'Fakultas Hukum', poin_belanja: 530, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 980000, limit_paylater: 500000 },
    { id: 10, nim_nip: '24430155', name: 'Dimas Aditya', title: 'Anggota Mahasiswa', email: 'dimas.24430155@student.ac.id', phone: '081900112233', role: 'anggota', password: 'password123', fakultas: 'Fakultas Ilmu Sosial', poin_belanja: 340, simpanan_pokok: 100000, simpanan_wajib: 300000, simpanan_sukarela: 720000, limit_paylater: 500000 }
  ],

  banners: [
    {
      id: 1,
      tag: '🔥 FLASH SALE HARI INI',
      title: 'Pesta Diskon Brand & Kuliner UMKM',
      subtitle: 'Dapatkan Mie Sedaap, Sari Roti, Dimsum Mentai & Fudgy Brownies dengan harga miring khusus member KOPMA!',
      image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=900&auto=format&fit=crop&q=80',
      actionText: 'Serbu Flash Sale',
      actionTarget: '#/products'
    },
    {
      id: 2,
      tag: '🥪 FRESH BAKERY MORNING',
      title: 'Roti Panggang & Bakery Fresh Tiap Pagi',
      subtitle: 'Sari Roti Sobek Cokelat Keju & Roti Bakar Lumer hangat siap menemani sarapan sebelum kuliah pagi.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&auto=format&fit=crop&q=80',
      actionText: 'Lihat Menu Roti & Snack',
      actionTarget: '#/products'
    },
    {
      id: 3,
      tag: '💳 PAYLATER 0% BUNGA',
      title: 'Belanja Dulu, Bayar Pas Kiriman Tiba',
      subtitle: 'Nikmati limit PayLater hingga Rp 1.000.000 tanpa bunga untuk beli sembako, buku kuliah & jajanan favorit.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=900&auto=format&fit=crop&q=80',
      actionText: 'Cek Saldo & Limit Saya',
      actionTarget: '#/home'
    }
  ],

  categories: [
    { key: 'Semua', label: 'Semua Produk', icon: '🏪' },
    { key: 'Snack & Roti', label: 'Roti & Bakery', icon: '🥪' },
    { key: 'Sembako', label: 'Mie & Sembako', icon: '🍜' },
    { key: 'Konsinyasi Mahasiswa', label: 'UMKM Mahasiswa', icon: '🥟' },
    { key: 'Minuman', label: 'Minuman Dingin', icon: '🥤' },
    { key: 'ATK & Kampus', label: 'ATK Kuliah', icon: '📚' },
    { key: 'Merchandise', label: 'Merchandise', icon: '🎨' }
  ],

  products: [
    {
      id: 1, plu_code: '1001', barcode: '899238810101',
      name: 'Kopi Susu Gula Aren KOPMA Botol 250ml',
      category: 'Minuman', brand: 'KOPMA Barista Lab', brand_type: 'umkm',
      original_price: 15000, sell_price: 12000, member_discount: 1000, discount_pct: 20,
      cost_price: 8500, stock: 24, min_stock: 15, avg_daily_sales: 14.5, lead_time_days: 2,
      is_consignment: 1, supplier_name: 'KOPMA Barista Lab', supplier_phone: '081233445566',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
      desc: 'Espresso biji robusta Lampung pilihan diracik dengan fresh milk creamy dan gula aren murni organik tanpa pemanis buatan. Disajikan dingin menyegarkan dalam botol higienis.',
      rating: 4.9, sold_count: 520, badge_label: '⭐ BEST SELLER', location: 'Metro Kampus'
    },
    {
      id: 2, plu_code: '1002', barcode: '899238810102',
      name: 'Aqua Air Mineral Botol Dingin 600ml',
      category: 'Minuman', brand: 'Danone Aqua', brand_type: 'brand',
      original_price: 4500, sell_price: 3500, member_discount: 500, discount_pct: 22,
      cost_price: 2200, stock: 140, min_stock: 40, avg_daily_sales: 28, lead_time_days: 2,
      is_consignment: 0, supplier_name: 'PT Tirta Investama Danone', supplier_phone: '081199887711',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=600&auto=format&fit=crop&q=80',
      desc: 'Air mineral murni pegunungan terpilih yang diproses higienis dan teruji klinis. Menjaga hidrasi tubuh tetap prima saat kuliah dan beraktivitas.',
      rating: 4.9, sold_count: 1420, badge_label: '🔥 SUPER BRAND', location: 'Gudang Mart'
    },
    {
      id: 3, plu_code: '1003', barcode: '899238810103',
      name: 'Teh Pucuk Harum Melati Less Sugar 350ml',
      category: 'Minuman', brand: 'Mayora', brand_type: 'brand',
      original_price: 5500, sell_price: 4500, member_discount: 500, discount_pct: 18,
      cost_price: 3100, stock: 68, min_stock: 30, avg_daily_sales: 16, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'Distributor Mayora Metro', supplier_phone: '081377889900',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=80',
      desc: 'Minuman teh melati asli yang diekstrak dari pucuk daun teh pilihan dengan rasa manis pas tidak seret di leher. Dingin menyegarkan.',
      rating: 4.8, sold_count: 780, badge_label: '⭐ FAVORIT', location: 'Kulkas Mart'
    },
    {
      id: 4, plu_code: '1004', barcode: '899238810104',
      name: 'Susu Ultra Milk Cokelat UHT 250ml',
      category: 'Minuman', brand: 'Ultrajaya', brand_type: 'brand',
      original_price: 8500, sell_price: 7000, member_discount: 500, discount_pct: 17,
      cost_price: 5400, stock: 36, min_stock: 25, avg_daily_sales: 11.2, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'PT Ultrajaya Milk Industry', supplier_phone: '081266554433',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80',
      desc: 'Susu cair segar berkualitas tinggi dari peternakan sapi pilihan dengan rasa cokelat lezat kaya kalsium, fosfor, dan vitamin esensial.',
      rating: 4.9, sold_count: 480, badge_label: '⭐ RESMI', location: 'Rak Susu'
    },
    {
      id: 5, plu_code: '2001', barcode: '899238820201',
      name: 'Indomie Goreng Spesial Original 85gr',
      category: 'Sembako', brand: 'Indofood', brand_type: 'brand',
      original_price: 4000, sell_price: 3500, member_discount: 300, discount_pct: 12,
      cost_price: 2700, stock: 95, min_stock: 50, avg_daily_sales: 32, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'Indofood CBP Sukses Makmur', supplier_phone: '081122331122',
      image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80',
      desc: 'Mie goreng instan paling populer dengan aroma bawang goreng gurih khas, kecap manis legit, dan bumbu rempah nikmat yang melegenda.',
      rating: 5.0, sold_count: 2450, badge_label: '🔥 TERLARIS #1', location: 'Rak Mie Instan'
    },
    {
      id: 6, plu_code: '2002', barcode: '899238820202',
      name: 'Mie Sedaap Goreng Spesial Krispi Bawang 90gr',
      category: 'Sembako', brand: 'Wings Food', brand_type: 'brand',
      original_price: 4000, sell_price: 3500, member_discount: 300, discount_pct: 12,
      cost_price: 2650, stock: 80, min_stock: 45, avg_daily_sales: 29, lead_time_days: 2,
      is_consignment: 0, supplier_name: 'Wings Surya Distribution', supplier_phone: '081299884422',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80',
      desc: 'Mie instan goreng dengan tekstur kenyal sempurna dan taburan bawang goreng super krispi "Kriuk-Kriuk" yang melimpah dan harum gurih.',
      rating: 4.9, sold_count: 1890, badge_label: '🔥 POPULER', location: 'Rak Mie Instan'
    },
    {
      id: 7, plu_code: '2003', barcode: '899238820203',
      name: 'Beras Premium Sania Pulen Wangi 5 Kg',
      category: 'Sembako', brand: 'Wilmar Sania', brand_type: 'brand',
      original_price: 78000, sell_price: 72000, member_discount: 2500, discount_pct: 8,
      cost_price: 64000, stock: 18, min_stock: 12, avg_daily_sales: 4.5, lead_time_days: 4,
      is_consignment: 0, supplier_name: 'Wilmar Nabati Indonesia', supplier_phone: '085266778899',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      desc: 'Beras putih kualitas premium hasil seleksi padi unggul dengan aroma pandan alami, bulir utuh, pulen empuk saat dimasak.',
      rating: 4.9, sold_count: 145, badge_label: '⭐ KUALITAS TOP', location: 'Sembako Mart'
    },
    {
      id: 8, plu_code: '2004', barcode: '899238820204',
      name: 'Minyak Goreng Bimoli Klasik Pouch 1 Liter',
      category: 'Sembako', brand: 'Indofood Bimoli', brand_type: 'brand',
      original_price: 21000, sell_price: 18500, member_discount: 1000, discount_pct: 12,
      cost_price: 15500, stock: 32, min_stock: 20, avg_daily_sales: 6.8, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'Salim Ivomas Pratama', supplier_phone: '081544332211',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
      desc: 'Minyak kelapa sawit murni kualitas emas kaya vitamin E dan omega 9, jernih keemasan dan tidak mudah hitam saat menggoreng.',
      rating: 4.8, sold_count: 280, badge_label: '⭐ KELUARGA', location: 'Sembako Mart'
    },
    {
      id: 9, plu_code: '3001', barcode: '899238830301',
      name: 'Sari Roti Sobek Cokelat Keju Fresh Pack',
      category: 'Snack & Roti', brand: 'Sari Roti', brand_type: 'brand',
      original_price: 16500, sell_price: 14000, member_discount: 1000, discount_pct: 15,
      cost_price: 11000, stock: 16, min_stock: 12, avg_daily_sales: 12, lead_time_days: 1,
      is_consignment: 0, supplier_name: 'PT Nippon Indosari Corpindo', supplier_phone: '081288991100',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80',
      desc: 'Roti sobek legendaris bertekstur empuk lembut dengan kombinasi filling cokelat kental manis dan krim keju gurih berlimpah.',
      rating: 4.9, sold_count: 380, badge_label: '🥪 FRESH ROTI', location: 'Rak Bakery'
    },
    {
      id: 10, plu_code: '3002', barcode: '899238830302',
      name: 'Sari Roti Roti Tawar Gandum Kupas Sehat',
      category: 'Snack & Roti', brand: 'Sari Roti', brand_type: 'brand',
      original_price: 19000, sell_price: 16500, member_discount: 1000, discount_pct: 13,
      cost_price: 13000, stock: 14, min_stock: 10, avg_daily_sales: 8, lead_time_days: 1,
      is_consignment: 0, supplier_name: 'PT Nippon Indosari Corpindo', supplier_phone: '081288991100',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      desc: 'Roti tawar gandum kupas tanpa kulit pinggir, tinggi serat pangan alami dan rendah gula. Sangat pas untuk menu diet dan sarapan sehat.',
      rating: 4.8, sold_count: 210, badge_label: '🌿 SEHAT', location: 'Rak Bakery'
    },
    {
      id: 11, plu_code: '3003', barcode: '899238830303',
      name: 'Roti Panggang Cokelat Keju Lumer Fresh',
      category: 'Snack & Roti', brand: 'UKM Tataboga Mahasiswa', brand_type: 'umkm',
      original_price: 12000, sell_price: 9500, member_discount: 1000, discount_pct: 21,
      cost_price: 6500, stock: 15, min_stock: 15, avg_daily_sales: 18, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'UKM Tataboga Mahasiswa', supplier_phone: '085788990011',
      image: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=600&auto=format&fit=crop&q=80',
      desc: 'Roti tawar tebal panggang mentega dengan isian lelehan cokelat pasta tebal dan keju cheddar parut lumer. Dibuat fresh setiap hari.',
      rating: 5.0, sold_count: 420, badge_label: '⭐ UMKM FAVORIT', location: 'Kitchen Corner'
    },
    {
      id: 12, plu_code: '3004', barcode: '899238830304',
      name: 'Risoles Mayo Smoked Beef Mozarella (Isi 3)',
      category: 'Konsinyasi Mahasiswa', brand: 'Nabila Culinary (Mhs FEB)', brand_type: 'umkm',
      original_price: 13000, sell_price: 10000, member_discount: 1000, discount_pct: 23,
      cost_price: 7500, stock: 18, min_stock: 15, avg_daily_sales: 24, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Nabila Culinary (Anggota)', supplier_phone: '085712349876',
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&auto=format&fit=crop&q=80',
      desc: 'Risoles segitiga berlapis tepung panir emas renyah dengan isian smoked beef daging sapi asli, telur rebus, dan saus mayones keju lumer meleleh.',
      rating: 5.0, sold_count: 650, badge_label: '⭐ BEST SNACK', location: 'Etalase Hangat'
    },
    {
      id: 13, plu_code: '3005', barcode: '899238830305',
      name: 'Dimsum Ayam Udang Mentai Mozarella (Isi 4)',
      category: 'Konsinyasi Mahasiswa', brand: 'Kukus Barokah (Mhs Fasilkom)', brand_type: 'umkm',
      original_price: 20000, sell_price: 16000, member_discount: 1000, discount_pct: 20,
      cost_price: 12000, stock: 22, min_stock: 15, avg_daily_sales: 26, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Kukus Barokah (Mhs Fasilkom)', supplier_phone: '081299881122',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop&q=80',
      desc: 'Dimsum siomay daging ayam dan udang cincang padat juicy disiram saus mentai bakar spesial torch dan lelehan keju mozarella. Dibuat fresh setiap pagi.',
      rating: 5.0, sold_count: 720, badge_label: '⭐ VIRAL KAMPUS', location: 'Etalase Hangat'
    },
    {
      id: 14, plu_code: '3006', barcode: '899238830306',
      name: 'Fudgy Brownies Shiny Crust 4 Topping Melt',
      category: 'Konsinyasi Mahasiswa', brand: 'Dapur Manis (Mhs FEB)', brand_type: 'umkm',
      original_price: 30000, sell_price: 25000, member_discount: 2000, discount_pct: 17,
      cost_price: 18000, stock: 15, min_stock: 10, avg_daily_sales: 12, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Dapur Manis (Mhs FEB)', supplier_phone: '085711223399',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
      desc: 'Brownies panggang cokelat pekat asli Belgia dengan tekstur fudgy lumer di dalam dan lapisan shiny crust cantik di atas. Topping: almond slice, oreo crumble, choco melt, dan keju.',
      rating: 5.0, sold_count: 390, badge_label: '⭐ SWEET DESSERT', location: 'Chiller Display'
    },
    {
      id: 15, plu_code: '3007', barcode: '899238830307',
      name: 'Croffle Butter Caramel Crispy Crunch (Isi 2)',
      category: 'Konsinyasi Mahasiswa', brand: 'Waffle House Mahasiswa', brand_type: 'umkm',
      original_price: 15000, sell_price: 12000, member_discount: 1000, discount_pct: 20,
      cost_price: 8000, stock: 16, min_stock: 12, avg_daily_sales: 15, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Waffle House Mahasiswa', supplier_phone: '081233887766',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&auto=format&fit=crop&q=80',
      desc: 'Adonan croissant mentega Prancis yang dipanggang renyah berkaramel dengan lelehan gula aren wangi dan taburan bubuk kayu manis.',
      rating: 4.9, sold_count: 340, badge_label: '⭐ KEKINIAN', location: 'Etalase Bakery'
    },
    {
      id: 16, plu_code: '3008', barcode: '899238830308',
      name: 'Salad Buah Saus Keju Lumer Melimpah 300ml',
      category: 'Konsinyasi Mahasiswa', brand: 'Fresh Saladbox Mahasiswa', brand_type: 'umkm',
      original_price: 18000, sell_price: 14000, member_discount: 1000, discount_pct: 22,
      cost_price: 10000, stock: 18, min_stock: 12, avg_daily_sales: 16, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Fresh Saladbox Mhs', supplier_phone: '089644332211',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
      desc: 'Irisan buah segar melon madu, anggur merah, apel fuji, kiwi, dan nata de coco disiram dressing creamy yoghurt spesial dan taburan keju cheddar melimpah.',
      rating: 4.9, sold_count: 450, badge_label: '🌿 SEHAT SEGAR', location: 'Kulkas Display'
    },
    {
      id: 17, plu_code: '3009', barcode: '899238830309',
      name: 'Keripik Pisang Cokelat Lumer Khas Lampung',
      category: 'Konsinyasi Mahasiswa', brand: 'Andi Snack UMKM', brand_type: 'umkm',
      original_price: 17000, sell_price: 13500, member_discount: 1000, discount_pct: 21,
      cost_price: 9500, stock: 35, min_stock: 15, avg_daily_sales: 14, lead_time_days: 2,
      is_consignment: 1, supplier_name: 'Andi Snack UMKM', supplier_phone: '081298765432',
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?w=600&auto=format&fit=crop&q=80',
      desc: 'Keripik pisang kepok pilihan renyah dibalut lapisan bubuk cokelat pekat lumer manis gurih. Oleh-oleh hits khas Lampung.',
      rating: 4.9, sold_count: 510, badge_label: '⭐ OLEH-OLEH', location: 'Rak Snack'
    },
    {
      id: 18, plu_code: '3010', barcode: '899238830310',
      name: 'Baso Aci Tulang Rangu Garut Instan Komplit',
      category: 'Konsinyasi Mahasiswa', brand: 'Boci Teh Lilis UMKM', brand_type: 'umkm',
      original_price: 19000, sell_price: 15500, member_discount: 1000, discount_pct: 18,
      cost_price: 11500, stock: 32, min_stock: 20, avg_daily_sales: 15, lead_time_days: 2,
      is_consignment: 1, supplier_name: 'Boci Teh Lilis UMKM', supplier_phone: '087811994455',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&auto=format&fit=crop&q=80',
      desc: 'Paket boci lengkap isi baso aci tulang rangu renyah kenyal, cuankie tahu, cuankie lidah, sukro cikur, bumbu cabe rawit pedas dan minyak bawang aromatik.',
      rating: 4.8, sold_count: 610, badge_label: '🌶️ PEDAS JUARA', location: 'Rak Instan'
    },
    {
      id: 19, plu_code: '3011', barcode: '899238830311',
      name: 'Makaroni Bantet Pedas Daun Jeruk 120gr',
      category: 'Konsinyasi Mahasiswa', brand: 'Camilan Ngehe (Mhs Teknik)', brand_type: 'umkm',
      original_price: 12000, sell_price: 9500, member_discount: 500, discount_pct: 21,
      cost_price: 6500, stock: 48, min_stock: 20, avg_daily_sales: 22, lead_time_days: 2,
      is_consignment: 1, supplier_name: 'Camilan Ngehe (Mhs Teknik)', supplier_phone: '081377441100',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&auto=format&fit=crop&q=80',
      desc: 'Makaroni pipa goreng renyah tidak keras dengan balutan bumbu cabe rawit merah segar dan aroma wangi daun jeruk purut asli.',
      rating: 4.8, sold_count: 890, badge_label: '🌶️ NGEHE PEDAS', location: 'Rak Snack'
    },
    {
      id: 20, plu_code: '3012', barcode: '899238830312',
      name: 'Mango Sticky Rice Thailand Santan Gurih',
      category: 'Konsinyasi Mahasiswa', brand: 'Thai Sweet Mhs Pertanian', brand_type: 'umkm',
      original_price: 22000, sell_price: 18000, member_discount: 1000, discount_pct: 18,
      cost_price: 13000, stock: 15, min_stock: 10, avg_daily_sales: 11, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Thai Sweet Mhs Pertanian', supplier_phone: '081988221144',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=80',
      desc: 'Ketan pulen pandan gurih disajikan dengan irisan mangga harum manis matang alami dan siraman saus santan kelapa kental gurih.',
      rating: 4.9, sold_count: 280, badge_label: '⭐ DESSERT TOP', location: 'Chiller Display'
    },
    {
      id: 21, plu_code: '3013', barcode: '899238830313',
      name: 'Keripik Tempe Sagu Oven Renyah 150gr',
      category: 'Konsinyasi Mahasiswa', brand: 'Kripik Bu Siti UMKM', brand_type: 'umkm',
      original_price: 16000, sell_price: 13000, member_discount: 1000, discount_pct: 19,
      cost_price: 9000, stock: 26, min_stock: 15, avg_daily_sales: 10, lead_time_days: 2,
      is_consignment: 1, supplier_name: 'Kripik Bu Siti UMKM Metro', supplier_phone: '085266119933',
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format&fit=crop&q=80',
      desc: 'Tempe kedelai lokal berpadu tepung sagu renyah tipis digoreng oven renyah dengan rasa gurih rempah ketumbar dan bawang putih.',
      rating: 4.8, sold_count: 320, badge_label: '⭐ RENYAH', location: 'Rak Snack'
    },
    {
      id: 22, plu_code: '3014', barcode: '899238830314',
      name: 'Tahu Bakso Sapi Asli Khas Semarang (Isi 5)',
      category: 'Konsinyasi Mahasiswa', brand: 'Tahu Juara Mitra UMKM', brand_type: 'umkm',
      original_price: 23000, sell_price: 19000, member_discount: 1000, discount_pct: 17,
      cost_price: 14000, stock: 20, min_stock: 12, avg_daily_sales: 9, lead_time_days: 2,
      is_consignment: 1, supplier_name: 'Tahu Juara Mitra UMKM', supplier_phone: '082155667788',
      image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&auto=format&fit=crop&q=80',
      desc: 'Tahu cokelat gurih padat berisi adonan daging sapi segar cincang tanpa bahan pengawet, lezat digoreng atau dikukus hangat dengan rawit.',
      rating: 4.9, sold_count: 270, badge_label: '⭐ DAGING SAPI', location: 'Etalase Hangat'
    },
    {
      id: 23, plu_code: '3015', barcode: '899238830315',
      name: 'Pastel Kari Daging Telur Renyah (Isi 2)',
      category: 'Konsinyasi Mahasiswa', brand: 'Snack Ibu Kiki UMKM', brand_type: 'umkm',
      original_price: 9000, sell_price: 7500, member_discount: 500, discount_pct: 17,
      cost_price: 5000, stock: 30, min_stock: 18, avg_daily_sales: 16, lead_time_days: 1,
      is_consignment: 1, supplier_name: 'Snack Ibu Kiki UMKM', supplier_phone: '085699887711',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
      desc: 'Pastel ulir renyah gurih berisi tumisan wortel, kentang bumbu kari daging cincang harum, dan potongan telur rebus empuk.',
      rating: 4.8, sold_count: 380, badge_label: '⭐ GURIH', location: 'Etalase Hangat'
    },
    {
      id: 24, plu_code: '3016', barcode: '899238830316',
      name: 'Chitato Sapi Panggang Beef BBQ 68gr',
      category: 'Snack & Roti', brand: 'Indofood Chitato', brand_type: 'brand',
      original_price: 14000, sell_price: 12000, member_discount: 1000, discount_pct: 14,
      cost_price: 9500, stock: 40, min_stock: 20, avg_daily_sales: 14, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'Indofood Fritolay Makmur', supplier_phone: '081122331122',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&auto=format&fit=crop&q=80',
      desc: 'Keripik kentang bergelombang terbuat dari kentang asli dengan cita rasa daging sapi panggang BBQ yang gurih pekat di setiap gigitan.',
      rating: 4.9, sold_count: 640, badge_label: '🔥 CHIPS FAVORIT', location: 'Rak Snack'
    },
    {
      id: 25, plu_code: '3017', barcode: '899238830317',
      name: 'SilverQueen Chocolate Cashew Mede 58gr',
      category: 'Snack & Roti', brand: 'SilverQueen', brand_type: 'brand',
      original_price: 21000, sell_price: 17500, member_discount: 1500, discount_pct: 17,
      cost_price: 13500, stock: 28, min_stock: 15, avg_daily_sales: 10, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'PT Petra Food Distribution', supplier_phone: '081822334455',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&auto=format&fit=crop&q=80',
      desc: 'Cokelat susu klasik Indonesia dengan paduan lelehan cokelat lembut dan kacang mete renyah gurih melimpah.',
      rating: 5.0, sold_count: 580, badge_label: '🍫 COKELAT TOP', location: 'Chiller Display'
    },
    {
      id: 26, plu_code: '1005', barcode: '899238810105',
      name: 'Matcha Latte Oatmilk KOPMA 250ml',
      category: 'Minuman', brand: 'KOPMA Barista Lab', brand_type: 'umkm',
      original_price: 17000, sell_price: 14000, member_discount: 1000, discount_pct: 18,
      cost_price: 9000, stock: 22, min_stock: 15, avg_daily_sales: 11, lead_time_days: 2,
      is_consignment: 0, supplier_name: 'KOPMA Barista Lab', supplier_phone: '081233445566',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80',
      desc: 'Bubuk green tea matcha Uji murni dipadukan susu oat nabati gurih lembut. Kaya antioksidan, 100% dairy-free aman untuk vegan.',
      rating: 4.9, sold_count: 310, badge_label: '🌿 VEGAN CHOICE', location: 'Kulkas Display'
    },
    {
      id: 27, plu_code: '1006', barcode: '899238810106',
      name: 'Es Teh Melati Jumbo Kampus 450ml Cup',
      category: 'Minuman', brand: 'KOPMA Barista Lab', brand_type: 'umkm',
      original_price: 5000, sell_price: 4000, member_discount: 500, discount_pct: 20,
      cost_price: 2000, stock: 85, min_stock: 40, avg_daily_sales: 42, lead_time_days: 1,
      is_consignment: 0, supplier_name: 'KOPMA Barista Lab', supplier_phone: '081233445566',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
      desc: 'Segelas jumbo 450ml teh melati seduh segar dengan es kristal dingin melimpah. Penghilang dahaga paling hemat di kampus.',
      rating: 4.9, sold_count: 1520, badge_label: '🥤 SEGAR JUMBO', location: 'Bar Counter'
    },
    {
      id: 28, plu_code: '4001', barcode: '899238840401',
      name: 'Kertas HVS A4 80gr SiDu Sinar Dunia (1 Rim)',
      category: 'ATK & Kampus', brand: 'Sinar Dunia (SiDu)', brand_type: 'brand',
      original_price: 60000, sell_price: 54000, member_discount: 2000, discount_pct: 10,
      cost_price: 46000, stock: 25, min_stock: 20, avg_daily_sales: 8.5, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'Gramedia Mitra Kampus', supplier_phone: '081177665544',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&auto=format&fit=crop&q=80',
      desc: 'Kertas HVS putih bersih tebal 80 gsm ukuran A4 isi 500 lembar. Hasil cetak skripsi, tugas akhir dan laporan jernih bebas macet.',
      rating: 4.9, sold_count: 480, badge_label: '📚 SKRIPSI READY', location: 'Rak ATK'
    },
    {
      id: 29, plu_code: '4002', barcode: '899238840402',
      name: 'Buku Tulis Spiral B5 Aesthetic 100 Lembar',
      category: 'ATK & Kampus', brand: 'Gramedia Mitra', brand_type: 'brand',
      original_price: 18000, sell_price: 15000, member_discount: 1000, discount_pct: 17,
      cost_price: 11000, stock: 45, min_stock: 25, avg_daily_sales: 9.2, lead_time_days: 4,
      is_consignment: 0, supplier_name: 'Gramedia Mitra Kampus', supplier_phone: '081177665544',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
      desc: 'Buku catatan jilid spiral wire-o anti lepas dengan kertas bergaris halus tebal 100 lembar dan cover aesthetic minimalis.',
      rating: 4.8, sold_count: 310, badge_label: '📚 CATATAN', location: 'Rak ATK'
    },
    {
      id: 30, plu_code: '4003', barcode: '899238840403',
      name: 'Pulpen Gel Faster C600 Hitam 0.5mm (1 Box)',
      category: 'ATK & Kampus', brand: 'Faster', brand_type: 'brand',
      original_price: 28000, sell_price: 24000, member_discount: 1500, discount_pct: 14,
      cost_price: 18000, stock: 38, min_stock: 15, avg_daily_sales: 6, lead_time_days: 3,
      is_consignment: 0, supplier_name: 'Gramedia Mitra Kampus', supplier_phone: '081177665544',
      image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80',
      desc: 'Kotak isi 12 pulpen gel Faster C600 tinta hitam pekat ujung jarum 0.5mm lancar anti beleber, sangat nyaman untuk ujian.',
      rating: 4.9, sold_count: 560, badge_label: '✍️ ANTI MACET', location: 'Rak ATK'
    },
    {
      id: 31, plu_code: '5001', barcode: '899238850501',
      name: 'Totebag Kanvas Tebal Mahasiswa Aesthetic',
      category: 'Merchandise', brand: 'Konveksi Kreatif Kampus', brand_type: 'umkm',
      original_price: 42000, sell_price: 35000, member_discount: 3000, discount_pct: 17,
      cost_price: 22000, stock: 30, min_stock: 15, avg_daily_sales: 5, lead_time_days: 5,
      is_consignment: 1, supplier_name: 'Konveksi Kreatif Kampus', supplier_phone: '082233445566',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
      desc: 'Tas jinjing kanvas twill premium tebal beresleting dengan kantong laptop khusus hingga 15 inci. Kuat, modis dan ramah lingkungan.',
      rating: 4.9, sold_count: 240, badge_label: '👜 AESTHETIC', location: 'Rak Merchandise'
    },
    {
      id: 32, plu_code: '5002', barcode: '899238850502',
      name: 'Sticker Pack Kuliah Aesthetic Vinyl Waterproof',
      category: 'Merchandise', brand: 'Studio Seni Rupa Mahasiswa', brand_type: 'umkm',
      original_price: 13000, sell_price: 10000, member_discount: 1000, discount_pct: 23,
      cost_price: 5000, stock: 65, min_stock: 25, avg_daily_sales: 12, lead_time_days: 3,
      is_consignment: 1, supplier_name: 'Studio Seni Rupa Mhs', supplier_phone: '089533221100',
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&auto=format&fit=crop&q=80',
      desc: 'Paket 10 lembar stiker vinyl laminasi doff anti gores dan anti air dengan ilustrasi lucu seputar nugas, dosen pembimbing dan kehidupan kampus.',
      rating: 5.0, sold_count: 680, badge_label: '🎨 VINYL ART', location: 'Rak Merchandise'
    }
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
    hideDemoGuide: false,
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
