import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";

const STATS = [
  { icon: "groups", value: "4.820+", label: "Warga Harmonis" },
  { icon: "holiday_village", value: "8 Dusun", label: "Rukun Wilayah" },
  { icon: "water_drop", value: "12 Mata Air", label: "Sumber Alami" },
  { icon: "eco", value: "100% Organik", label: "Lahan Pangan Subur" },
];

export default function HeroSection() {
  return (
    <section
      className="relative pt-16 pb-24 w-full overflow-hidden flex flex-col items-center justify-center min-h-[921px] bg-primary text-white"
      id="profil"
    >
      {/* Background Image — jernih & terlihat jelas */}
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

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Official Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-primary-fixed border border-primary-fixed/30 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          <MaterialIcon name="verified" className="text-[16px] text-primary-fixed" />
          <span>Portal Resmi Pemerintahan Desa</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl drop-shadow-md">
          DESA MILANGASRI
        </h1>
        <p className="text-xl md:text-2xl text-primary-fixed font-semibold mt-3 max-w-2xl">
          Pesona Harmoni di Kaki Gunung Lawu
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-white/85 max-w-3xl mt-5 leading-relaxed font-normal">
          Menghidupkan kemakmuran agraris di ketinggian 840 mdpl. Diberkahi
          kesegaran 12 mata air vulkanis abadi, hamparan terasering hijau subur,
          dan kehangatan gotong royong warga lereng timur Gunung Lawu, Kecamatan
          Panekan, Magetan.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            className="px-8 py-3.5 rounded-full bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold text-base shadow-lg shadow-tertiary/40 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            href="#berita"
          >
            <MaterialIcon name="explore" className="text-[20px]" />
            <span>Jelajahi Desa</span>
          </a>
          <a
            className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-on-primary font-semibold text-base shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            href="/profil"
          >
            <MaterialIcon name="info" className="text-[20px]" />
            <span>Informasi Desa</span>
          </a>
          <a
            className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-base border border-white/20 transition-all duration-200 flex items-center gap-2"
            href="#geografi"
          >
            <MaterialIcon
              name="play_circle"
              className="text-[22px] text-secondary-fixed"
            />
            <span>Tonton Video Profil</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-14">
          {STATS.map((stat) => (
            <div
              key={stat.icon}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-2 text-primary-fixed">
                <MaterialIcon name={stat.icon} className="text-[22px]" />
                <span className="text-2xl md:text-3xl font-extrabold text-white">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs md:text-sm text-surface-container-low font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-16 text-surface fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
        >
          <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,58.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
