import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Visi & Misi - Desa Milangasri",
  description: "Visi dan misi Desa Milangasri.",
};

export default function VisiMisiPage() {
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
              <Link
                href="/profil"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Profil Desa</span>
              </Link>
              <MaterialIcon name="chevron_right" className="text-[16px]" />
              <span className="text-white font-semibold">Visi &amp; Misi</span>
            </nav>

            <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-wider mb-3">
              <MaterialIcon
                name="track_changes"
                className="text-[18px] text-tertiary-fixed"
              />
              <span>Cita-cita dan Langkah Strategis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Visi &amp; Misi Desa
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            
            {/* Visi */}
            <div className="mb-20">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-6">
                <MaterialIcon name="visibility" className="text-[24px] text-tertiary" />
                <span>Visi</span>
              </div>
              <div className="p-8 md:p-10 rounded-3xl bg-primary-container/30 border border-primary/20 shadow-sm relative overflow-hidden">
                <MaterialIcon name="format_quote" className="absolute -top-4 -left-4 text-9xl text-primary/10" />
                <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-on-surface leading-relaxed text-center italic">
                  "Terwujudnya masyarakat Desa Milangasri yang beriman, berbudaya dan berdaya, bermartabat, guna menuju kehidupan yang aman, tentram, mandiri sejahtera siap menyongsong globalisasi."
                </h2>
              </div>
            </div>

            {/* Misi */}
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-8">
                <MaterialIcon name="flag" className="text-[24px] text-tertiary" />
                <span>Misi</span>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    1
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Mewujudkan pemerintah Desa Milangasri yang transparan, jujur sesuai aturan dan undang-undang.
                  </p>
                </li>
                
                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    2
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Menjaga Keharmonisan umat beragama
                  </p>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    3
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Menjaga kebersamaan masyarakat Desa Milangasri dengan menjunjung tinggi kegotong-royongan
                  </p>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    4
                  </span>
                  <div className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg w-full">
                    <p>Mengutamakan pelayanan publik seorang pemimpin adalah pelayan Masyarakat;</p>
                    <ul className="list-disc ml-6 mt-3 space-y-1.5 text-on-surface-variant/90">
                      <li>Di bidang Kesehatan</li>
                      <li>Di bidang administrasi</li>
                      <li>Di bidang Pendidikan</li>
                      <li>Di bidang keamanan</li>
                      <li>Di bidang kesenian</li>
                      <li>Di bidang olahraga</li>
                      <li>Di bidang pembangunan</li>
                      <li>Di bidang pertanian</li>
                      <li>Di bidang Pemberdayaan</li>
                    </ul>
                  </div>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    5
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Mengembangkan/menggali potensi Desa Milangasri
                  </p>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    6
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Menata usahakan asset desa
                  </p>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    7
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Mengakses segala bentuk program dari pusat, provinsi, dan daerah
                  </p>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    8
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Meneruskan program-program pemerintah desa yang belum terselesaikan
                  </p>
                </li>

                <li className="flex gap-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    9
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-2 text-base md:text-lg">
                    Meningkatkan produk unggulan Desa Milangasri yang sudah ada atau yang belum ada
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
