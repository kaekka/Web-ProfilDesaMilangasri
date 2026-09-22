import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sejarah Desa - Desa Milangasri",
  description: "Sejarah dan asal-usul Desa Milangasri.",
};

export default function SejarahPage() {
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
              <span className="text-white font-semibold">Sejarah</span>
            </nav>

            <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-wider mb-3">
              <MaterialIcon
                name="history_edu"
                className="text-[18px] text-tertiary-fixed"
              />
              <span>Asal-usul &amp; Jejak Historis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sejarah Desa
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            
            <div className="prose prose-lg md:prose-xl prose-stone max-w-none">
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                Desa Milangasri adalah salah satu desa di Kecamatan Panekan Kabupaten Magetan Propinsi Jawa Timur, yang terletak di bagian paling timur Kecamatan Panekan. Pada masa kerajaan waktu itu kawasan Desa Milangasri masih berwujud daerah hutan dan banyak pepohonan yang besar - besar, terdiri dari dua wilayah yang letaknya berdekatan.
              </p>

              <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-lg uppercase tracking-wider mb-4 border-b-2 border-primary/20 pb-2">
                  <MaterialIcon name="park" className="text-[28px] text-tertiary" />
                  <span>1. Wilayah Pilangasri</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-4">
                  Sekitar tahun 1823, Bermula dari pengembaraan seorang abdi Kerajaan Mataram yang bernama <strong>KI AGENG PLALANG</strong> yang kemudian singgah disebuah tempat sehingga tempat tersebut biasa disebut <em>Plalangan</em> yang diambil dari nama KI AGENG PLALANG. Daerah Plalangan terletak di sebelah utara sungai kecil yang biasa disebut <em>KALI SEMAR</em>. Seiring berjalannya waktu, daerah tersebut dipimpin oleh seseorang yang bernama Mbah Mangoenredjo.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-4">
                  Sedangkan sebelah selatannya ada daerah yang bernama <strong>Klumpe</strong> yang konon ceritanya dahulu di daerah tersebut tumbuh subur tanaman kedelai hingga warga bisa membuat makanan tempe yang berbahan kedelai. Sehingga munculah nama <em>klumpe</em> yang mungkin dari gabungan bahasa <em>mlumpuk</em> atau <em>klumpukan (kumpul) tempe</em>. Daerah Klumpe dulu dipimpin oleh seorang yang bernama Mbah Singowidjojo yang kemudian diteruskan oleh anaknya yang bernama Mbah Setrowiryo.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  Seiring waktu berjalan, Pemerintah Belanda mengadakan penggabungan wilayah, akhirnya Mbah Mangoenredjo dan Mbah Setrowiryo bertemu dan sepakat dua daerah tersebut dijadikan satu. Sebagai gambaran di daerah Klumpe dan Plalangan tersebut banyak tumbuh Pohon Pilang sehingga menambah keasrian daerah tersebut, dan sepakat memberi nama <strong>PILANGASRI</strong> dan dipimpin oleh Mbah Mangoenredjo.
                </p>
              </div>

              <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-lg uppercase tracking-wider mb-4 border-b-2 border-primary/20 pb-2">
                  <MaterialIcon name="nature" className="text-[28px] text-tertiary" />
                  <span>2. Wilayah Waru</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg mb-4">
                  Adalah sebuah daerah yang cukup luas dan banyak berdiri pohon <strong>WARU</strong>. Lahan yang subur menjadikan wilayah tersebut waktu itu menjadi penghasil padi cukup banyak. Karena daerah tersebut cukup luas daerah tersebut terdiri dari dua wilayah, yaitu sebelah barat yaitu bernama <strong>Waru Kulon</strong> yang pada waktu itu disesepuhi oleh <strong>KI SEMBUNG NYOWO</strong>. Dan sebelah timur bernama <strong>Waru Etan</strong> yang pada waktu itu disesepuhi oleh <strong>KI AGENG KINCANG</strong>.
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  Sekitar tahun 1830, Wilayah Waru sudah menjadi wilayah Kademangan (sejajar dengan Asisten Wedana / Kecamatan). Yang menjadi Demang terkenal dengan sebutan Demang Mbah Gajah. Seiring berjalannya waktu, daerah tersebut dipimpin oleh Mbah Kasan Mustahal, dan dilanjutkan oleh anaknya yang bernama Mbah Kasan Mustari.
                </p>
              </div>

              <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-lg uppercase tracking-wider mb-4 border-b-2 border-primary/20 pb-2">
                  <MaterialIcon name="diversity_3" className="text-[28px] text-tertiary" />
                  <span>3. Pembentukan Desa Milangasri</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg p-6 rounded-2xl bg-primary-container/30 border border-primary/20 shadow-sm relative overflow-hidden">
                  Selanjutnya dari hal tersebut diatas, pada tahun 1921 Pemerintah Penjajah Belanda mengadakan <em>kasutan</em> atau penggabungan wilayah antara Pilangasri dan Waru, dan kasutan tersebut terpilihlah Mbah Kasan Mustari sebagai kepala desa. Nah, atas kesepakatan bersama dipilihlah nama <strong>MILANGASRI</strong>, yang berasal dari PILANGASRI agar tetap ada terus yang mana huruf <strong>P</strong> nya diganti dengan huruf <strong>M</strong> yang diambil dari nama Kasan Mustari, sebagai tanda bahwa kasutan tersebut dimenangkan oleh Mbah Kasan Mustari.
                </p>
              </div>

            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
