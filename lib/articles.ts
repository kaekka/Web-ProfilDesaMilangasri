export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  date: string;
  image: string;
  alt: string;
  content?: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "unesa-terjunkan-puluhan-mahasiswa-kknt-di-kecamatan-panekan",
    title:
      "UNESA Terjunkan Puluhan Mahasiswa KKNT di Kecamatan Panekan, Magetan",
    description:
      "Universitas Negeri Surabaya resmi menerjunkan mahasiswa peserta KKNT Semester Gasal 2026/2027 ke sejumlah desa di Kecamatan Panekan, termasuk Desa Milangasri, untuk program pengabdian masyarakat selama enam pekan.",
    category: "KKNT UNESA",
    categoryColor: "text-tertiary",
    date: "13 Agu 2026",
    image: "/images/berita/pembukaan-kknt-panekan.jpg",
    alt: "Pembukaan KKNT UNESA di Kecamatan Panekan Magetan",
    content: `Universitas Negeri Surabaya (UNESA) resmi menerjunkan mahasiswa peserta Kuliah Kerja Nyata Tematik (KKNT) Semester Gasal 2026/2027 ke sejumlah desa di Kecamatan Panekan, Kabupaten Magetan, 13 Agustus 2026. Acara penerimaan sekaligus penyerahan mahasiswa ini menandai dimulainya rangkaian kegiatan pengabdian masyarakat yang akan berlangsung hingga 25 September 2026.

Kecamatan Panekan menjadi salah satu dari tiga kecamatan di Kabupaten Magetan yang menjadi lokasi pelaksanaan KKNT UNESA tahun ini, bersama Kecamatan Kawedanan dan Kecamatan Ngariboyo. Di wilayah Panekan sendiri, mahasiswa akan ditempatkan di lima desa, yaitu Desa Turi, Desa Banjarejo, Desa Sidowayah, Desa Bedagung, dan Desa Milangasri.

Setiap desa akan menerima sekitar 15 mahasiswa lintas program studi yang didampingi oleh satu Dosen Pembimbing Lapangan (DPL). Program penempatan ini dirancang secara multidisiplin agar mahasiswa dari berbagai latar belakang keilmuan dapat berkolaborasi menjawab kebutuhan riil masyarakat desa.

Acara penerimaan mahasiswa berlangsung di Kantor Kecamatan Panekan dan dihadiri oleh Kepala Kecamatan, jajaran perangkat kecamatan, 5 kepala Desa Lokasi KKNT, Dosen Pembimbing Lapangan, serta seluruh mahasiswa peserta KKNT. Kegiatan ini merupakan bagian dari tahap "Supervisi 1 DPL", yaitu proses penyerahan resmi mahasiswa dari pihak universitas kepada pemerintah desa dan kecamatan setempat.

Secara keseluruhan, KKNT UNESA Semester Gasal 2026/2027 melibatkan sekitar 1.312 mahasiswa dan 89 Dosen Pembimbing Lapangan yang disebar di 91 desa/kelurahan, mencakup empat kabupaten dan satu kota di Jawa Timur, serta dua lokasi luar negeri. Kabupaten Magetan sendiri menjadi lokasi bagi sekitar 225 mahasiswa yang tersebar di 15 desa pada tiga kecamatan.

Selama kurang lebih enam pekan ke depan, mahasiswa akan tinggal di desa penempatan (live-in) untuk menjalankan program kerja yang disusun berdasarkan hasil pemetaan sosial bersama masyarakat, mulai dari penguatan ekonomi desa, pendidikan, hingga pengembangan potensi wisata lokal. Kegiatan ini diharapkan tidak hanya memberi manfaat bagi masyarakat, tetapi juga menjadi wadah bagi mahasiswa untuk mengasah kepemimpinan sosial dan kepekaan terhadap persoalan pembangunan di tingkat desa.`,
  },
  {
    slug: "penyaluran-bantuan-digitalisasi-pelayanan-desa",
    title: "Penyaluran Bantuan & Digitalisasi Pelayanan Desa Berjalan Lancar",
    description:
      "Pemerintah Desa Milangasri sukses menggelar musyawarah warga dan implementasi anjungan layanan mandiri digital untuk percepatan birokrasi ramah warga.",
    category: "Pembangunan Desa",
    categoryColor: "text-primary",
    date: "12 Okt 2024",
    image: "/images/berita/bantuan-digitalisasi.jpg",
    alt: "Penyaluran Bantuan dan Pelayanan Balai Desa",
  },
  {
    slug: "pelatihan-pemasaran-digital-umkm",
    title: "Pelatihan Pemasaran Digital bagi Pelaku UMKM Hasil Bumi Lokal",
    description:
      "BUMDes berkolaborasi dengan kelompok tani wanita (KWT) menghadirkan packaging modern dan kemitraan marketplace untuk produk hasil bumi Lawu.",
    category: "Pemberdayaan UMKM",
    categoryColor: "text-secondary",
    date: "08 Okt 2024",
    image: "/images/berita/pelatihan-umkm.jpg",
    alt: "Pelatihan Pemasaran Digital bagi Pelaku UMKM Lokal",
  },
  {
    slug: "festival-tradisi-bersih-desa-sumber-duren",
    title: "Semarak Festival Tradisi Bersih Desa di Sumber Duren Lereng Lawu",
    description:
      "Ratusan warga berbusana adat bersatu dalam upacara kirap mata air suci lereng Lawu sebagai wujud syukur panen melimpah dan lestarinya sumber air alami.",
    category: "Tradisi & Budaya",
    categoryColor: "text-primary",
    date: "02 Okt 2024",
    image: "/images/berita/festival-bersih-desa.jpg",
    alt: "Semarak Festival Tradisi Bersih Desa Milangasri",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
