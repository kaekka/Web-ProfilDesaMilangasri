import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";

const UMKM_LIST = [
  {
    name: "Keripik Pisang Tanduk",
    location: "Dusun 3, Milangasri",
    badge: "Best Seller",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    image: "/images/umkm/keripik-pisang.jpg",
  },
  {
    name: "Sayur Organik Lereng Lawu",
    location: "Dusun Tirta, Milangasri",
    badge: "Panen Segar",
    badgeClass: "bg-secondary-fixed text-on-secondary-container",
    image: "/images/umkm/sayur-organik.jpg",
  },
  {
    name: "Madu Murni Lereng Lawu",
    location: "Dusun Hutan, Milangasri",
    badge: "100% Murni",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
    image: "/images/umkm/madu-murni.jpg",
  },
  {
    name: "Kerajinan Anyaman Bambu",
    location: "Dusun Krajan, Milangasri",
    badge: "Kriya Warga",
    badgeClass: "bg-surface-container-lowest text-primary",
    image: "/images/umkm/anyaman-bambu.jpg",
  },
];

export default function UMKMSection() {
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
            <div className="mt-6 flex items-center gap-3">
              <a
                className="px-5 py-2.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-surface-container transition-colors shadow-sm inline-flex items-center gap-2"
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
          {UMKM_LIST.map((umkm) => (
            <div
              key={umkm.name}
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
              <h4 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                {umkm.name}
              </h4>
              <div className="flex items-center gap-1.5 mt-2 text-on-surface-variant">
                <MaterialIcon name="location_on" className="text-[16px] text-secondary" />
                <span className="text-sm">{umkm.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
