import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Daftar UMKM — Desa Milangasri",
  description:
    "Daftar lengkap Usaha Mikro, Kecil, dan Menengah (UMKM) Desa Milangasri, Kecamatan Panekan, Kabupaten Magetan. Temukan produk lokal unggulan lereng Gunung Lawu.",
};



type UmkmRow = {
  id: string;
  nama: string;
  pemilik: string | null;
  kategori: string | null;
  deskripsi: string | null;
  produk: string | null;
  kontak: string | null;
  alamat: string | null;
  image_url: string | null;
  maps_url: string | null;
};

async function getAllUmkm(): Promise<UmkmRow[]> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("umkm")
      .select("id, nama, pemilik, kategori, deskripsi, produk, kontak, alamat, image_url, maps_url")
      .order("updated_at", { ascending: false });

    if (data && data.length > 0) return data;
  } catch {
    console.error("Supabase unavailable");
  }
  return [];
}

const KATEGORI_COLORS: Record<string, string> = {
  "Kuliner & Makanan": "bg-secondary/10 text-secondary",
  "Pertanian & Perkebunan": "bg-primary/10 text-primary",
  "Kerajinan Tangan": "bg-tertiary/10 text-tertiary",
  "Fashion & Tekstil": "bg-purple-100 text-purple-700",
  Jasa: "bg-blue-100 text-blue-700",
  Perdagangan: "bg-orange-100 text-orange-700",
  Peternakan: "bg-amber-100 text-amber-700",
};

export default async function UmkmPublicPage() {
  const umkmList = await getAllUmkm();

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
              <span className="text-white font-semibold">Daftar UMKM</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-wider mb-3">
                  <MaterialIcon
                    name="storefront"
                    className="text-[18px] text-secondary-fixed"
                  />
                  <span>Pemberdayaan Ekonomi Warga</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  UMKM Desa Milangasri
                </h1>
                <p className="text-white/80 max-w-xl mt-3 text-base md:text-lg leading-relaxed">
                  Temukan produk lokal unggulan dari pelaku usaha mikro Desa
                  Milangasri — hasil bumi, olahan pangan, kerajinan, dan jasa
                  dari lereng Gunung Lawu.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20 shrink-0">
                <MaterialIcon
                  name="store"
                  className="text-[28px] text-secondary-fixed"
                />
                <div>
                  <span className="text-2xl font-extrabold text-white">
                    {umkmList.length}
                  </span>
                  <p className="text-white/70 text-xs font-medium">
                    Total UMKM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UMKM Grid */}
        <section className="w-full bg-surface py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {umkmList.map((umkm) => (
                <div
                  key={umkm.id}
                  className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-surface-container-high"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <Image
                      alt={umkm.nama}
                      src={umkm.image_url ?? "/images/umkm/keripik-pisang.jpg"}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {umkm.kategori && (
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold shadow-sm ${
                            KATEGORI_COLORS[umkm.kategori] ?? "text-primary"
                          }`}
                        >
                          {umkm.kategori}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-on-surface group-hover:text-secondary transition-colors leading-snug">
                      {umkm.nama}
                    </h2>

                    {umkm.pemilik && (
                      <p className="text-sm text-on-surface-variant mt-1 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">
                          person
                        </span>
                        {umkm.pemilik}
                      </p>
                    )}

                    {umkm.deskripsi && (
                      <div className="text-sm text-on-surface-variant mt-3 leading-relaxed space-y-2">
                        {umkm.deskripsi.split(/\n\s*\n/).map((block, i) => (
                          <p key={i} className="text-justify">
                            {block.split("\n").map((line, j, arr) => (
                              <span key={j}>
                                {line}
                                {j < arr.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        ))}
                      </div>
                    )}

                    {umkm.produk && (
                      <div className="mt-3 flex items-center gap-1.5 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          inventory_2
                        </span>
                        <span className="font-medium">{umkm.produk}</span>
                      </div>
                    )}

                    <div className="mt-auto pt-4 border-t border-surface-container-high mt-4 space-y-1.5">
                      {umkm.alamat && (
                        <div className="flex items-start gap-1.5 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                            location_on
                          </span>
                          <span>{umkm.alamat}</span>
                        </div>
                      )}
                      {umkm.kontak && (
                        <a
                          href={`https://wa.me/${umkm.kontak.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-secondary font-semibold hover:underline"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            phone
                          </span>
                          {umkm.kontak}
                        </a>
                      )}
                      {umkm.maps_url && (
                        <a
                          href={umkm.maps_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-secondary font-semibold hover:underline"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            map
                          </span>
                          Buka di Google Maps
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {umkmList.length === 0 && (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30 mb-4 block">
                  store
                </span>
                <h3 className="text-xl font-bold text-on-surface mb-2">
                  Belum Ada Data UMKM
                </h3>
                <p className="text-on-surface-variant">
                  Data UMKM akan segera ditambahkan.
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
