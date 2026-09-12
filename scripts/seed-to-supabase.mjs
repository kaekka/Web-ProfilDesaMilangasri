// Seed script: migrate static articles + static UMKM into Supabase
// Run with: node scripts/seed-to-supabase.mjs
// Requires: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read .env.local
const envPath = resolve(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf-8");
const env = Object.fromEntries(
  envContent
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => {
      const [k, ...v] = l.split("=");
      return [k.trim(), v.join("=").trim()];
    })
);

const supabaseUrl = env["NEXT_PUBLIC_SUPABASE_URL"];
const supabaseKey = env["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"];

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ── Static Berita Data ─────────────────────────────────────────
const ARTICLES = [
  {
    slug: "upacara-penurunan-bendera-hut-ri-ke-81-di-lapangan-kecamatan-panekan",
    title: "Upacara Penurunan Bendera HUT RI ke-81 di Lapangan Kecamatan Panekan Berlangsung Khidmat, Diikuti Mahasiswa KKN",
    description: "Upacara penurunan bendera HUT RI ke-81 di Lapangan Kecamatan Panekan berlangsung khidmat dan diikuti mahasiswa KKN bersama unsur pemerintah, TNI-Polri, pelajar, serta masyarakat.",
    category: "Kegiatan Masyarakat",
    date: "17 Agu 2026",
    image_url: "/images/berita/upacara-penurunan-bendera-panekan.jpeg",
    alt: "Mahasiswa KKN bersama pejabat Kecamatan Panekan seusai upacara penurunan bendera",
    content: `Magetan - Upacara penurunan bendera dalam rangka memperingati Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-81 berlangsung khidmat di Lapangan Kecamatan Panekan, Kabupaten Magetan, Minggu (17/8) sore. Upacara ini menjadi rangkaian penutup dari serangkaian kegiatan peringatan kemerdekaan yang telah berlangsung sepanjang hari di wilayah tersebut, sekaligus menjadi penutup resmi bagi seluruh rangkaian perayaan HUT RI di tingkat kecamatan.

Upacara dimulai pada sore hari, ditandai dengan barisan peserta yang telah bersiap sejak beberapa saat sebelumnya di area lapangan kecamatan. Bertindak sebagai petugas upacara adalah gabungan dari unsur TNI-Polri, perangkat kecamatan, serta pelajar dari sekolah-sekolah di wilayah Panekan yang telah dipersiapkan secara khusus untuk mengemban tugas sebagai pasukan pengibar/penurun bendera. Prosesi penurunan bendera Merah Putih berlangsung dengan tertib dan penuh kekhidmatan, diiringi lagu-lagu kebangsaan yang menambah suasana haru sekaligus bangga bagi seluruh yang hadir.

Turut hadir dan berpartisipasi sebagai peserta upacara adalah mahasiswa Kuliah Kerja Nyata (KKN) yang tengah menjalankan program pengabdian masyarakat di wilayah Kecamatan Panekan. Para mahasiswa KKN hadir berbaur bersama unsur pemerintah kecamatan, perangkat desa, TNI-Polri, pelajar, dan warga masyarakat yang turut mengikuti jalannya upacara dengan tertib dan disiplin. Kehadiran mereka dalam barisan peserta menunjukkan semangat kebersamaan antara mahasiswa dan masyarakat setempat dalam memperingati hari bersejarah bangsa.

Keikutsertaan mahasiswa KKN dalam upacara tersebut merupakan bentuk partisipasi aktif dalam kegiatan kemasyarakatan sekaligus wujud penghormatan terhadap jasa para pahlawan yang telah memperjuangkan kemerdekaan bangsa. Selain sebagai bagian dari agenda pengabdian masyarakat, keterlibatan ini juga menjadi sarana bagi mahasiswa untuk lebih mengenal dan menyatu dengan kehidupan sosial masyarakat di lokasi KKN, termasuk dalam momen-momen kenegaraan seperti peringatan kemerdekaan.

Suasana lapangan Kecamatan Panekan sore itu tampak khusyuk sekaligus meriah. Warga dari berbagai kalangan usia turut memadati area sekitar lapangan untuk menyaksikan jalannya upacara. Semangat nasionalisme terasa begitu kental, terlebih dengan antusiasme generasi muda, baik pelajar maupun mahasiswa KKN yang ikut ambil bagian dalam kegiatan tersebut.

Upacara penurunan bendera ini menjadi penutup rangkaian panjang peringatan HUT RI di Kecamatan Panekan, yang sebelumnya juga diisi dengan berbagai kegiatan seperti perlombaan warga, kirab budaya, hingga kegiatan sosial lainnya yang melibatkan seluruh elemen masyarakat, termasuk mahasiswa KKN yang berkontribusi dalam berbagai kepanitiaan dan pelaksanaan kegiatan.

Dengan berakhirnya upacara penurunan bendera, rangkaian peringatan HUT Kemerdekaan RI ke-81 di Kecamatan Panekan resmi ditutup. Kegiatan ini diharapkan dapat terus mempererat rasa persatuan dan kesatuan, baik antarwarga maupun antara masyarakat dengan mahasiswa yang tengah mengabdi di wilayah tersebut, sekaligus menumbuhkan semangat cinta tanah air pada generasi muda.`,
  },
  {
    slug: "unesa-terjunkan-puluhan-mahasiswa-kknt-di-kecamatan-panekan",
    title: "UNESA Terjunkan Puluhan Mahasiswa KKNT di Kecamatan Panekan, Magetan",
    description: "Universitas Negeri Surabaya resmi menerjunkan mahasiswa peserta KKNT Semester Gasal 2026/2027 ke sejumlah desa di Kecamatan Panekan, termasuk Desa Milangasri, untuk program pengabdian masyarakat selama enam pekan.",
    category: "KKNT UNESA",
    date: "13 Agu 2026",
    image_url: "/images/berita/pembukaan-kknt-panekan.jpg",
    alt: "Pembukaan KKNT UNESA di Kecamatan Panekan Magetan",
    content: `Universitas Negeri Surabaya (UNESA) resmi menerjunkan mahasiswa peserta Kuliah Kerja Nyata Tematik (KKNT) Semester Gasal 2026/2027 ke sejumlah desa di Kecamatan Panekan, Kabupaten Magetan, 13 Agustus 2026. Acara penerimaan sekaligus penyerahan mahasiswa ini menandai dimulainya rangkaian kegiatan pengabdian masyarakat yang akan berlangsung hingga 25 September 2026.

Kecamatan Panekan menjadi salah satu dari tiga kecamatan di Kabupaten Magetan yang menjadi lokasi pelaksanaan KKNT UNESA tahun ini, bersama Kecamatan Kawedanan dan Kecamatan Ngariboyo. Di wilayah Panekan sendiri, mahasiswa akan ditempatkan di lima desa, yaitu Desa Turi, Desa Banjarejo, Desa Sidowayah, Desa Bedagung, dan Desa Milangasri.

Setiap desa akan menerima sekitar 15 mahasiswa lintas program studi yang didampingi oleh satu Dosen Pembimbing Lapangan (DPL). Program penempatan ini dirancang secara multidisiplin agar mahasiswa dari berbagai latar belakang keilmuan dapat berkolaborasi menjawab kebutuhan riil masyarakat desa.

Acara penerimaan mahasiswa berlangsung di Kantor Kecamatan Panekan dan dihadiri oleh Kepala Kecamatan, jajaran perangkat kecamatan, 5 kepala Desa Lokasi KKNT, Dosen Pembimbing Lapangan, serta seluruh mahasiswa peserta KKNT. Kegiatan ini merupakan bagian dari tahap "Supervisi 1 DPL", yaitu proses penyerahan resmi mahasiswa dari pihak universitas kepada pemerintah desa dan kecamatan setempat.

Secara keseluruhan, KKNT UNESA Semester Gasal 2026/2027 melibatkan sekitar 1.312 mahasiswa dan 89 Dosen Pembimbing Lapangan yang disebar di 91 desa/kelurahan, mencakup empat kabupaten dan satu kota di Jawa Timur, serta dua lokasi luar negeri. Kabupaten Magetan sendiri menjadi lokasi bagi sekitar 225 mahasiswa yang tersebar di 15 desa pada tiga kecamatan.

Selama kurang lebih enam pekan ke depan, mahasiswa akan tinggal di desa penempatan (live-in) untuk menjalankan program kerja yang disusun berdasarkan hasil pemetaan sosial bersama masyarakat, mulai dari penguatan ekonomi desa, pendidikan, hingga pengembangan potensi wisata lokal.`,
  },
  {
    slug: "penyaluran-bantuan-digitalisasi-pelayanan-desa",
    title: "Penyaluran Bantuan & Digitalisasi Pelayanan Desa Berjalan Lancar",
    description: "Pemerintah Desa Milangasri sukses menggelar musyawarah warga dan implementasi anjungan layanan mandiri digital untuk percepatan birokrasi ramah warga.",
    category: "Pembangunan Desa",
    date: "12 Okt 2024",
    image_url: "/images/berita/bantuan-digitalisasi.jpg",
    alt: "Penyaluran Bantuan dan Pelayanan Balai Desa",
    content: null,
  },
  {
    slug: "pelatihan-pemasaran-digital-umkm",
    title: "Pelatihan Pemasaran Digital bagi Pelaku UMKM Hasil Bumi Lokal",
    description: "BUMDes berkolaborasi dengan kelompok tani wanita (KWT) menghadirkan packaging modern dan kemitraan marketplace untuk produk hasil bumi Lawu.",
    category: "Pemberdayaan UMKM",
    date: "08 Okt 2024",
    image_url: "/images/berita/pelatihan-umkm.jpg",
    alt: "Pelatihan Pemasaran Digital bagi Pelaku UMKM Lokal",
    content: null,
  },
  {
    slug: "festival-tradisi-bersih-desa-sumber-duren",
    title: "Semarak Festival Tradisi Bersih Desa di Sumber Duren Lereng Lawu",
    description: "Ratusan warga berbusana adat bersatu dalam upacara kirap mata air suci lereng Lawu sebagai wujud syukur panen melimpah dan lestarinya sumber air alami.",
    category: "Tradisi & Budaya",
    date: "02 Okt 2024",
    image_url: "/images/berita/festival-bersih-desa.jpg",
    alt: "Semarak Festival Tradisi Bersih Desa Milangasri",
    content: null,
  },
];

// ── Static UMKM Data ───────────────────────────────────────────
const UMKM_LIST = [
  {
    nama: "Keripik Pisang Tanduk",
    pemilik: null,
    kategori: "Kuliner & Makanan",
    deskripsi: "Keripik pisang tanduk renyah khas lereng Gunung Lawu, dibuat dari pisang tanduk pilihan yang dipetik langsung dari kebun warga.",
    produk: "Keripik Pisang Tanduk",
    kontak: null,
    alamat: "Dusun 3, Milangasri",
    image_url: "/images/umkm/keripik-pisang.jpg",
  },
  {
    nama: "Sayur Organik Lereng Lawu",
    pemilik: null,
    kategori: "Pertanian & Perkebunan",
    deskripsi: "Sayuran organik segar dipetik dari kebun pekarangan warga Desa Milangasri. Bebas pestisida, kaya nutrisi.",
    produk: "Sayuran Organik",
    kontak: null,
    alamat: "Dusun Tirta, Milangasri",
    image_url: "/images/umkm/sayur-organik.jpg",
  },
  {
    nama: "Madu Murni Lereng Lawu",
    pemilik: null,
    kategori: "Pertanian & Perkebunan",
    deskripsi: "Madu murni alami yang dipanen dari lebah liar di kawasan hutan lereng Gunung Lawu. 100% murni tanpa campuran.",
    produk: "Madu Murni",
    kontak: null,
    alamat: "Dusun Hutan, Milangasri",
    image_url: "/images/umkm/madu-murni.jpg",
  },
  {
    nama: "Kerajinan Anyaman Bambu",
    pemilik: null,
    kategori: "Kerajinan Tangan",
    deskripsi: "Kerajinan anyaman bambu tradisional buatan tangan warga Milangasri. Produk ramah lingkungan dan bernilai seni tinggi.",
    produk: "Anyaman Bambu, Keranjang, Tempat Nasi",
    kontak: null,
    alamat: "Dusun Krajan, Milangasri",
    image_url: "/images/umkm/anyaman-bambu.jpg",
  },
];

async function seed() {
  console.log("🌱 Memulai seeding data ke Supabase...\n");

  // ── Seed Berita ──────────────────────────────────────────────
  console.log("📰 Seeding tabel berita...");
  let beritaInserted = 0;
  let beritaSkipped = 0;

  for (const article of ARTICLES) {
    const { data: existing } = await supabase
      .from("berita")
      .select("id")
      .eq("slug", article.slug)
      .maybeSingle();

    if (existing) {
      console.log(`   ⏭  Skip (sudah ada): ${article.slug}`);
      beritaSkipped++;
      continue;
    }

    const { error } = await supabase.from("berita").insert(article);
    if (error) {
      console.error(`   ❌ Error insert berita "${article.slug}": ${error.message}`);
    } else {
      console.log(`   ✅ Inserted: ${article.title.slice(0, 60)}...`);
      beritaInserted++;
    }
  }

  console.log(`\n   Berita: ${beritaInserted} inserted, ${beritaSkipped} skipped\n`);

  // ── Seed UMKM ────────────────────────────────────────────────
  console.log("🏪 Seeding tabel umkm...");
  let umkmInserted = 0;
  let umkmSkipped = 0;

  for (const umkm of UMKM_LIST) {
    const { data: existing } = await supabase
      .from("umkm")
      .select("id")
      .eq("nama", umkm.nama)
      .maybeSingle();

    if (existing) {
      console.log(`   ⏭  Skip (sudah ada): ${umkm.nama}`);
      umkmSkipped++;
      continue;
    }

    const { error } = await supabase.from("umkm").insert(umkm);
    if (error) {
      console.error(`   ❌ Error insert UMKM "${umkm.nama}": ${error.message}`);
    } else {
      console.log(`   ✅ Inserted: ${umkm.nama}`);
      umkmInserted++;
    }
  }

  console.log(`\n   UMKM: ${umkmInserted} inserted, ${umkmSkipped} skipped`);
  console.log("\n🎉 Seeding selesai!");
}

seed().catch(console.error);
