import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BeritaFilterableList from "@/components/sections/BeritaFilterableList";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Arsip Berita — Desa Milangasri",
  description:
    "Kumpulan berita dan informasi terkini seputar Desa Milangasri, Kecamatan Panekan, Kabupaten Magetan. Pembangunan desa, budaya, UMKM, dan kegiatan warga.",
};

interface ArticleItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  date: string;
  image: string;
  alt: string;
}

async function getAllBerita(): Promise<ArticleItem[]> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("berita")
      .select("slug, title, description, category, date, image_url, alt")
      .order("updated_at", { ascending: false });

    if (data && data.length > 0) {
      return data.map((b) => ({
        slug: b.slug,
        title: b.title,
        description: b.description ?? "",
        category: b.category ?? "",
        categoryColor: "text-primary",
        date: b.date ?? "",
        image: b.image_url ?? "/images/berita/bantuan-digitalisasi.jpg",
        alt: b.alt ?? b.title,
      }));
    }
  } catch {
    console.error("Supabase unavailable");
  }
  return [];
}

export default async function BeritaArchivePage() {
  const articles = await getAllBerita();

  return (
    <>
      <Header />
      <main className="w-full pt-20">
        {/* Hero Banner */}
        <section className="relative w-full bg-primary py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/gunglawumilangasri.jpeg"
              alt="Pemandangan Gunung Lawu dari Desa Milangasri"
              fill
              className="object-cover opacity-85"
              priority
              quality={90}
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-primary/35 to-primary/85" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-tertiary-fixed/10 blur-[120px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
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

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
                <MaterialIcon
                  name="library_books"
                  className="text-[28px] text-tertiary-fixed"
                />
                <div>
                  <span className="text-2xl font-extrabold text-white">
                    {articles.length}
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
            <BeritaFilterableList articles={articles} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
