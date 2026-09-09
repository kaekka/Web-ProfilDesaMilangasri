import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Arsip Berita — Desa Milangasri",
  description:
    "Kumpulan berita dan informasi terkini seputar Desa Milangasri, Kecamatan Panekan, Kabupaten Magetan. Pembangunan desa, budaya, UMKM, dan kegiatan warga.",
};

export default function BeritaArchivePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-br from-primary via-primary to-primary-container py-16 md:py-24 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />

          <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link
                href="/"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <MaterialIcon name="home" className="text-[16px]" />
                <span>Beranda</span>
              </Link>
              <MaterialIcon name="chevron_right" className="text-[16px]" />
              <span className="text-white font-semibold">Arsip Berita</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-wider mb-3">
                  <MaterialIcon
                    name="newspaper"
                    className="text-[18px] text-tertiary-fixed"
                  />
                  <span>Kabar &amp; Informasi Desa</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Arsip Berita Desa
                </h1>
                <p className="text-white/80 max-w-xl mt-3 text-base md:text-lg leading-relaxed">
                  Kumpulan berita, informasi pembangunan, kegiatan warga, dan
                  perkembangan terkini dari Desa Milangasri di lereng Gunung
                  Lawu.
                </p>
              </div>

              {/* Article count badge */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
                <MaterialIcon
                  name="library_books"
                  className="text-[28px] text-tertiary-fixed"
                />
                <div>
                  <span className="text-2xl font-extrabold text-white">
                    {ARTICLES.length}
                  </span>
                  <p className="text-white/70 text-xs font-medium">
                    Total Artikel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="w-full bg-surface py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            {/* Category Filter Chips (visual, all selected) */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm">
                Semua Berita
              </span>
              {[
                ...new Set(ARTICLES.map((a) => a.category)),
              ].map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-medium border border-surface-container-high hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLES.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/berita/${article.slug}`}
                  className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-surface-container-high"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <Image
                      alt={article.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={article.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs ${article.categoryColor} font-bold shadow-sm`}
                    >
                      {article.category}
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5">
                      <MaterialIcon
                        name="calendar_month"
                        className="text-[16px]"
                      />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-on-surface-variant mt-3 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between text-primary text-sm font-bold">
                      <span>Baca Selengkapnya</span>
                      <MaterialIcon
                        name="arrow_forward"
                        className="text-[18px] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty state (shown if no articles, but we always have some) */}
            {ARTICLES.length === 0 && (
              <div className="text-center py-20">
                <MaterialIcon
                  name="article"
                  className="text-[64px] text-on-surface-variant/30 mb-4"
                />
                <h3 className="text-xl font-bold text-on-surface mb-2">
                  Belum Ada Berita
                </h3>
                <p className="text-on-surface-variant">
                  Berita dan informasi desa akan segera hadir.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
