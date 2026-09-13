import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";
import { createClient } from "@/utils/supabase/server";

interface UmkmItem {
  id?: string;
  name: string;
  location: string;
  badge: string;
  badgeClass: string;
  image: string;
}


const BADGE_CLASSES = [
  "bg-tertiary-fixed text-on-tertiary-fixed",
  "bg-secondary-fixed text-on-secondary-container",
  "bg-primary-fixed text-on-primary-fixed",
  "bg-surface-container-lowest text-primary",
];

async function getAllUmkm(): Promise<UmkmItem[]> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("umkm")
      .select("id, nama, alamat, kategori, image_url")
      .order("updated_at", { ascending: false })
      .limit(4);

    if (data && data.length > 0) {
      return data.map((u, i) => ({
        id: u.id,
        name: u.nama,
        location: u.alamat ?? "Desa Milangasri",
        badge: u.kategori ?? "UMKM Lokal",
        badgeClass: BADGE_CLASSES[i % BADGE_CLASSES.length],
        image: u.image_url ?? "/images/umkm/keripik-pisang.jpg",
      }));
    }
  } catch {
    console.error("Supabase unavailable");
  }
  return [];
}

export default async function UMKMSection() {
  const umkmList = await getAllUmkm();

  return (
    <section
      className="w-full bg-surface-container-low py-16 md:py-24 relative"
      id="umkm"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
            <MaterialIcon name="storefront" className="text-[18px]" />
            <span>Pemberdayaan Ekonomi Warga</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Daftar UMKM Desa
          </h2>
          <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
            Produk olahan pangan organik, hasil tani segar lereng Gunung Lawu,
            dan kriya tradisional autentik persembahan para pelaku usaha mikro
            Desa Milangasri.
          </p>
        </div>

        {/* Spotlight Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-primary text-white shadow-xl">
          <div className="relative z-10 max-w-xl">
            <span className="px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs uppercase tracking-wider">
              Hasil Bumi Mandiri Lawu
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-tight">
              Sentra UMKM Berdaya Milangasri
            </h3>
            <p className="text-white/85 mt-3 leading-relaxed text-sm md:text-base">
              Mulai dari olahan keripik pisang lereng Lawu, emping melinjo
              renyah, hingga sayuran organik segar dipetik langsung dari kebun
              pekarangan warga dan didukung penuh oleh BUMDes Milangasri.
            </p>
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <Link
                className="px-5 py-2.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-surface-container transition-colors shadow-sm inline-flex items-center gap-2"
                href="/umkm"
              >
                <MaterialIcon name="store" className="text-[18px]" />
                <span>Lihat Semua UMKM</span>
              </Link>
              <a
                className="px-5 py-2.5 rounded-full border border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                href="#kontak"
              >
                <MaterialIcon name="phone_in_talk" className="text-[18px]" />
                <span>Hubungi BUMDes</span>
              </a>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              alt="Stan UMKM Produk Hasil Bumi Lokal Desa Milangasri"
              className="w-full h-full object-cover"
              src="/images/umkm/stan-banner.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>

        {/* UMKM List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {umkmList.map((umkm) => (
            <div
              key={umkm.id ?? umkm.name}
              className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-xl transition-all flex flex-col group border border-surface-container-high"
            >
              <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                <Image
                  alt={umkm.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={umkm.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className={`absolute top-2 right-2 px-2.5 py-1 rounded-full ${umkm.badgeClass} text-[11px] font-bold shadow-sm`}
                >
                  {umkm.badge}
                </span>
              </div>
              <h4 className="font-bold text-base text-on-surface group-hover:text-secondary transition-colors">
                {umkm.name}
              </h4>
              <div className="flex items-center gap-1.5 mt-2 text-on-surface-variant">
                <MaterialIcon name="location_on" className="text-[16px] text-secondary" />
                <span className="text-sm">{umkm.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="text-center mt-10">
          <Link
            href="/umkm"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-colors shadow-sm hover:shadow-md"
          >
            <span>Lihat Semua UMKM</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
