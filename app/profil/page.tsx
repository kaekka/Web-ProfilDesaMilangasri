import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InformasiDesaSection from "@/components/sections/InformasiDesaSection";

export const metadata = {
  title: "Profil Desa - Desa Milangasri",
  description: "Informasi sejarah, struktur organisasi, serta visi dan misi Desa Milangasri.",
};

export default function ProfilPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 min-h-screen flex flex-col bg-surface">
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
              <span className="text-white font-semibold">Profil Desa</span>
            </nav>

            <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-wider mb-3">
              <MaterialIcon
                name="info"
                className="text-[18px] text-tertiary-fixed"
              />
              <span>Profil &amp; Informasi Desa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Profil Desa Milangasri
            </h1>
            <p className="text-white/80 max-w-xl mt-3 text-base md:text-lg leading-relaxed">
              Kenali lebih dekat sejarah, struktur organisasi pemerintahan,
              serta visi dan misi Desa Milangasri di lereng Gunung Lawu.
            </p>
          </div>
        </section>

        <InformasiDesaSection />
      </main>
      <Footer />
    </>
  );
}


