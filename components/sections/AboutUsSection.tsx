"use client";

import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";

const PILLARS = [
  {
    icon: "devices",
    title: "Digitalisasi Pelayanan",
    description:
      "Merancang portal web modern yang mempermudah transparansi informasi, berita desa, dan aksesibilitas publik secara digital.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: "storefront",
    title: "Promosi UMKM & Potensi Desa",
    description:
      "Memperluas jangkauan pemasaran produk lokal warga, terasering sayur organik, dan kekayaan alam agraris kaki Gunung Lawu.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: "diversity_3",
    title: "Sinergi Pengabdian Masyarakat",
    description:
      "Kolaborasi erat mahasiswa KKN-T UNESA bersama Pemerintah Desa Milangasri demi pembangunan berbasis kemitraan.",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
];

const TEAM_DIVISIONS = [
  {
    role: "Web Development & Engineering",
    icon: "code",
    desc: "Merancang arsitektur sistem, pengembangan antarmuka, optimasi performa web, dan keamanan data portal.",
    members: ["Tim Software Engineer & Frontend Developer KKN-T UNESA"],
    color: "bg-primary-container/10 border-primary-container/30 text-primary-container",
  },
  {
    role: "UI/UX & Visual Design",
    icon: "palette",
    desc: "Menyusun sistem desain visual, tata letak antarmuka, aset grafis, dan respon navigasi yang intuitif.",
    members: ["Tim UI/UX Designer & Graphic Specialist"],
    color: "bg-secondary-fixed/40 border-secondary-fixed text-secondary-container",
  },
  {
    role: "Content & Data Research",
    icon: "article",
    desc: "Mengumpulkan data UMKM, pemetaan wilayah dusun, wawancara sejarah, dan dokumentasi berita desa.",
    members: ["Tim Data Analyst & Media Editor"],
    color: "bg-tertiary-fixed/40 border-tertiary-fixed text-tertiary-container",
  },
  {
    role: "Field Operations & Relations",
    icon: "record_voice_over",
    desc: "Koordinasi bersama Kepala Desa, perangkat desa, ketua dusun, serta sosialisasi portal kepada warga.",
    members: ["Tim Koordinator Lapangan & Humas"],
    color: "bg-surface-container-high border-surface-container-highest text-on-surface",
  },
];

const TECH_STACK = [
  { name: "Next.js 16", desc: "Framework React untuk SSR & SEO Teroptimasi", icon: "terminal" },
  { name: "React 19", desc: "Arsitektur Komponen UI Berkinerja Tinggi", icon: "code_blocks" },
  { name: "Tailwind CSS v4", desc: "Sistem Styling Responsif & Modern", icon: "brush" },
  { name: "TypeScript", desc: "Kode Terstruktur & Aman dari Error", icon: "verified" },
];

export default function AboutUsSection() {
  return (
    <div className="w-full">
      {/* ── 1. Hero Header Banner ── */}
      <section className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gunglawumilangasri.jpeg"
            alt="Pemandangan Desa Milangasri"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-primary z-0" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 text-center flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-primary-fixed border border-primary-fixed/20 text-xs font-bold uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white">About Us — Tim Pengembang</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            Tentang Tim Pengembang Portal Desa
          </h1>
          <p className="text-base md:text-xl text-primary-fixed max-w-3xl mt-4 leading-relaxed font-medium">
            Inisiatif Pengabdian Masyarakat KKN-T Universitas Negeri Surabaya (UNESA) Bersama Pemerintah Desa Milangasri, Kecamatan Panekan, Magetan.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#tentang-kknt"
              className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs md:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all"
            >
              Tentang KKN-T
            </a>
            <a
              href="#tim-pengembang"
              className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs md:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all"
            >
              Divisi Tim
            </a>
            <a
              href="#mitra"
              className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs md:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all"
            >
              Mitra Kolaborasi
            </a>
            <a
              href="#teknologi"
              className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs md:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all"
            >
              Teknologi Portal
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Photo Showcase & Project Overview ── */}
      <section id="tentang-kknt" className="py-16 md:py-20 max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Foto Dokumentasi */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-surface-container-high group">
              <Image
                src="/PembukaanKKNTPanekan.jpg"
                alt="Penerimaan Mahasiswa KKNT UNESA di Kecamatan Panekan"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <p className="text-xs font-bold text-primary-fixed uppercase tracking-wider">
                  Penerimaan Resmi KKNT UNESA
                </p>
                <p className="text-sm font-semibold mt-0.5">
                  Penerimaan Mahasiswa KKN-T UNESA di Kecamatan Panekan, Magetan.
                </p>
              </div>
            </div>
          </div>

          {/* Overview Text */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <MaterialIcon name="groups" className="text-[18px]" />
              <span>Pengabdian Masyarakat UNESA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface leading-tight">
              Membangun Desa Digital dari Lereng Gunung Lawu
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
              Portal Informasi Resmi Desa Milangasri merupakan salah satu program kerja unggulan tim mahasiswa Kuliah Kerja Nyata Tematik (KKN-T) Universitas Negeri Surabaya (UNESA) Semester Gasal 2026/2027.
            </p>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
              Melalui kolaborasi multidisiplin, tim mahasiswa tinggal bersama warga (*live-in*) di Desa Milangasri untuk merancang infrastruktur digital yang mendukung transparansi pemerintahan, publikasi potensi UMKM lokal, serta promosi keasrian alam desa.
            </p>

            {/* Quick Info Badges */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container-high flex items-center gap-3">
                <MaterialIcon name="school" className="text-primary text-[24px]" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface">Instansi</span>
                  <span className="text-xs text-on-surface-variant">UNESA Surabaya</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container-high flex items-center gap-3">
                <MaterialIcon name="pin_drop" className="text-secondary text-[24px]" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface">Lokasi Live-in</span>
                  <span className="text-xs text-on-surface-variant">Desa Milangasri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Pilar Tujuan Pengembangan ── */}
      <section className="py-16 md:py-20 bg-surface-container-low border-y border-surface-container-high">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Fokus Utama
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mt-1">
              Tujuan Pengembangan Portal
            </h2>
            <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
              Tiga pilar utama yang menjadi pondasi pembuatan web portal Desa Milangasri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-white border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center`}>
                  <MaterialIcon name={pillar.icon} className="text-[28px]" />
                </div>
                <h3 className="text-xl font-bold text-on-surface">{pillar.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Divisi & Struktur Tim Pengembang ── */}
      <section id="tim-pengembang" className="py-16 md:py-20 max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Struktur Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mt-1">
            Divisi Tim Pengembang
          </h2>
          <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
            Struktur tim mahasiswa KKN-T UNESA Desa Milangasri yang berkontribusi dalam perancangan portal web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_DIVISIONS.map((div) => (
            <div
              key={div.role}
              className="p-8 rounded-3xl bg-white border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MaterialIcon name={div.icon} className="text-[26px]" />
                </div>
                <h3 className="text-xl font-bold text-on-surface">{div.role}</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {div.desc}
              </p>
              <div className={`p-4 rounded-2xl border ${div.color} font-medium text-xs flex items-center gap-2 mt-2`}>
                <MaterialIcon name="verified" className="text-[18px]" />
                <span>{div.members[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Mitra Kolaborasi ── */}
      <section id="mitra" className="py-16 md:py-20 bg-surface-container-low border-t border-surface-container-high">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-tertiary">
            Kemitraan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mt-1 mb-12">
            Lembaga &amp; Mitra Pengabdi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Pemdes Milangasri */}
            <div className="p-6 rounded-3xl bg-white border border-surface-container-high shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border border-surface-container-high flex items-center justify-center p-2 shadow-sm mb-4">
                <Image
                  src="/logo-magetan.svg"
                  alt="Logo Kabupaten Magetan"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-base text-on-surface">Pemerintah Desa Milangasri</h4>
              <p className="text-xs text-on-surface-variant mt-1">Kec. Panekan, Kab. Magetan</p>
              <span className="mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold">
                Mitra Utama &amp; Pengampu
              </span>
            </div>

            {/* UNESA */}
            <div className="p-6 rounded-3xl bg-white border border-surface-container-high shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border border-surface-container-high flex items-center justify-center p-2 shadow-sm mb-4">
                <Image
                  src="/logo-kkn-unesa.png"
                  alt="Logo UNESA"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-base text-on-surface">Universitas Negeri Surabaya</h4>
              <p className="text-xs text-on-surface-variant mt-1">Kampus UNESA Surabaya</p>
              <span className="mt-3 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] font-bold">
                Perguruan Tinggi Pengampu
              </span>
            </div>

            {/* KKN-T */}
            <div className="p-6 rounded-3xl bg-white border border-surface-container-high shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border border-surface-container-high flex items-center justify-center p-2 shadow-sm mb-4">
                <Image
                  src="/Logo-KKNT.png"
                  alt="Logo KKNT Desa Milangasri"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h4 className="font-bold text-base text-on-surface">Tim KKN-T Milangasri</h4>
              <p className="text-xs text-on-surface-variant mt-1">Gasal 2026/2027</p>
              <span className="mt-3 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[11px] font-bold">
                Tim Pelaksana Lapangan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Teknologi Portal ── */}
      <section id="teknologi" className="py-16 md:py-20 max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Teknologi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mt-1">
            Tech Stack Portal Web
          </h2>
          <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
            Dibangun dengan teknologi web modern untuk performa tinggi, aksesibilitas lancar, dan responsif di semua perangkat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-3xl bg-white border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 text-primary flex items-center justify-center mb-4">
                <MaterialIcon name={tech.icon} className="text-[28px]" />
              </div>
              <h4 className="font-bold text-base text-on-surface">{tech.name}</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Call to Action ── */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Ingin Memberikan Masukan Pengembangan Web?
            </h3>
            <p className="text-primary-fixed text-sm mt-1">
              Saran dan masukan Anda sangat berharga demi kemajuan portal digital Desa Milangasri.
            </p>
          </div>
          <Link
            href="/#kontak"
            className="px-8 py-3.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm hover:bg-tertiary-fixed-dim transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <MaterialIcon name="send" className="text-[18px]" />
            <span>Kirim Masukan</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
