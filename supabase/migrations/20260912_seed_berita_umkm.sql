-- =============================================================
-- Seed: Isi data awal berita & UMKM ke Supabase
-- Jalankan di Supabase Dashboard > SQL Editor
-- Gunakan INSERT ... ON CONFLICT DO NOTHING untuk idempotent
-- =============================================================

-- ── Berita ────────────────────────────────────────────────────
INSERT INTO berita (slug, title, description, category, date, image_url, alt, content) VALUES
(
  'upacara-penurunan-bendera-hut-ri-ke-81-di-lapangan-kecamatan-panekan',
  'Upacara Penurunan Bendera HUT RI ke-81 di Lapangan Kecamatan Panekan Berlangsung Khidmat, Diikuti Mahasiswa KKN',
  'Upacara penurunan bendera HUT RI ke-81 di Lapangan Kecamatan Panekan berlangsung khidmat dan diikuti mahasiswa KKN bersama unsur pemerintah, TNI-Polri, pelajar, serta masyarakat.',
  'Kegiatan Masyarakat',
  '17 Agu 2026',
  '/images/berita/upacara-penurunan-bendera-panekan.jpeg',
  'Mahasiswa KKN bersama pejabat Kecamatan Panekan seusai upacara penurunan bendera',
  'Magetan - Upacara penurunan bendera dalam rangka memperingati Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-81 berlangsung khidmat di Lapangan Kecamatan Panekan, Kabupaten Magetan, Minggu (17/8) sore.' || chr(10) || chr(10) ||
  'Upacara dimulai pada sore hari, ditandai dengan barisan peserta yang telah bersiap sejak beberapa saat sebelumnya di area lapangan kecamatan. Bertindak sebagai petugas upacara adalah gabungan dari unsur TNI-Polri, perangkat kecamatan, serta pelajar dari sekolah-sekolah di wilayah Panekan.' || chr(10) || chr(10) ||
  'Turut hadir dan berpartisipasi sebagai peserta upacara adalah mahasiswa Kuliah Kerja Nyata (KKN) yang tengah menjalankan program pengabdian masyarakat di wilayah Kecamatan Panekan.' || chr(10) || chr(10) ||
  'Keikutsertaan mahasiswa KKN dalam upacara tersebut merupakan bentuk partisipasi aktif dalam kegiatan kemasyarakatan sekaligus wujud penghormatan terhadap jasa para pahlawan yang telah memperjuangkan kemerdekaan bangsa.' || chr(10) || chr(10) ||
  'Dengan berakhirnya upacara penurunan bendera, rangkaian peringatan HUT Kemerdekaan RI ke-81 di Kecamatan Panekan resmi ditutup.'
),
(
  'unesa-terjunkan-puluhan-mahasiswa-kknt-di-kecamatan-panekan',
  'UNESA Terjunkan Puluhan Mahasiswa KKNT di Kecamatan Panekan, Magetan',
  'Universitas Negeri Surabaya resmi menerjunkan mahasiswa peserta KKNT Semester Gasal 2026/2027 ke sejumlah desa di Kecamatan Panekan, termasuk Desa Milangasri, untuk program pengabdian masyarakat selama enam pekan.',
  'KKNT UNESA',
  '13 Agu 2026',
  '/images/berita/pembukaan-kknt-panekan.jpg',
  'Pembukaan KKNT UNESA di Kecamatan Panekan Magetan',
  'Universitas Negeri Surabaya (UNESA) resmi menerjunkan mahasiswa peserta Kuliah Kerja Nyata Tematik (KKNT) Semester Gasal 2026/2027 ke sejumlah desa di Kecamatan Panekan, Kabupaten Magetan, 13 Agustus 2026.' || chr(10) || chr(10) ||
  'Kecamatan Panekan menjadi salah satu dari tiga kecamatan di Kabupaten Magetan yang menjadi lokasi pelaksanaan KKNT UNESA tahun ini, bersama Kecamatan Kawedanan dan Kecamatan Ngariboyo. Di wilayah Panekan sendiri, mahasiswa akan ditempatkan di lima desa, yaitu Desa Turi, Desa Banjarejo, Desa Sidowayah, Desa Bedagung, dan Desa Milangasri.' || chr(10) || chr(10) ||
  'Setiap desa akan menerima sekitar 15 mahasiswa lintas program studi yang didampingi oleh satu Dosen Pembimbing Lapangan (DPL).' || chr(10) || chr(10) ||
  'Secara keseluruhan, KKNT UNESA Semester Gasal 2026/2027 melibatkan sekitar 1.312 mahasiswa dan 89 Dosen Pembimbing Lapangan yang disebar di 91 desa/kelurahan.'
),
(
  'penyaluran-bantuan-digitalisasi-pelayanan-desa',
  'Penyaluran Bantuan & Digitalisasi Pelayanan Desa Berjalan Lancar',
  'Pemerintah Desa Milangasri sukses menggelar musyawarah warga dan implementasi anjungan layanan mandiri digital untuk percepatan birokrasi ramah warga.',
  'Pembangunan Desa',
  '12 Okt 2024',
  '/images/berita/bantuan-digitalisasi.jpg',
  'Penyaluran Bantuan dan Pelayanan Balai Desa',
  NULL
),
(
  'pelatihan-pemasaran-digital-umkm',
  'Pelatihan Pemasaran Digital bagi Pelaku UMKM Hasil Bumi Lokal',
  'BUMDes berkolaborasi dengan kelompok tani wanita (KWT) menghadirkan packaging modern dan kemitraan marketplace untuk produk hasil bumi Lawu.',
  'Pemberdayaan UMKM',
  '08 Okt 2024',
  '/images/berita/pelatihan-umkm.jpg',
  'Pelatihan Pemasaran Digital bagi Pelaku UMKM Lokal',
  NULL
),
(
  'festival-tradisi-bersih-desa-sumber-duren',
  'Semarak Festival Tradisi Bersih Desa di Sumber Duren Lereng Lawu',
  'Ratusan warga berbusana adat bersatu dalam upacara kirap mata air suci lereng Lawu sebagai wujud syukur panen melimpah dan lestarinya sumber air alami.',
  'Tradisi & Budaya',
  '02 Okt 2024',
  '/images/berita/festival-bersih-desa.jpg',
  'Semarak Festival Tradisi Bersih Desa Milangasri',
  NULL
)
ON CONFLICT (slug) DO NOTHING;

-- ── UMKM ─────────────────────────────────────────────────────
INSERT INTO umkm (nama, pemilik, kategori, deskripsi, produk, kontak, alamat, image_url) VALUES
(
  'Keripik Pisang Tanduk',
  NULL,
  'Kuliner & Makanan',
  'Keripik pisang tanduk renyah khas lereng Gunung Lawu, dibuat dari pisang tanduk pilihan yang dipetik langsung dari kebun warga.',
  'Keripik Pisang Tanduk',
  NULL,
  'Dusun 3, Milangasri',
  '/images/umkm/keripik-pisang.jpg'
),
(
  'Sayur Organik Lereng Lawu',
  NULL,
  'Pertanian & Perkebunan',
  'Sayuran organik segar dipetik dari kebun pekarangan warga Desa Milangasri. Bebas pestisida, kaya nutrisi.',
  'Sayuran Organik',
  NULL,
  'Dusun Tirta, Milangasri',
  '/images/umkm/sayur-organik.jpg'
),
(
  'Madu Murni Lereng Lawu',
  NULL,
  'Pertanian & Perkebunan',
  'Madu murni alami yang dipanen dari lebah liar di kawasan hutan lereng Gunung Lawu. 100% murni tanpa campuran.',
  'Madu Murni',
  NULL,
  'Dusun Hutan, Milangasri',
  '/images/umkm/madu-murni.jpg'
),
(
  'Kerajinan Anyaman Bambu',
  NULL,
  'Kerajinan Tangan',
  'Kerajinan anyaman bambu tradisional buatan tangan warga Milangasri. Produk ramah lingkungan dan bernilai seni tinggi.',
  'Anyaman Bambu, Keranjang, Tempat Nasi',
  NULL,
  'Dusun Krajan, Milangasri',
  '/images/umkm/anyaman-bambu.jpg'
)
ON CONFLICT DO NOTHING;
