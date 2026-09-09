import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";
import { ARTICLES } from "@/lib/articles";

export default function BeritaSection() {
  return (
    <section className="w-full bg-surface py-16 md:py-24 relative" id="berita">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <MaterialIcon name="newspaper" className="text-[18px] text-tertiary" />
              <span>Kabar &amp; Informasi Desa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
              Berita Tentang Milangasri
            </h2>
            <p className="text-on-surface-variant max-w-xl mt-2 text-base leading-relaxed">
              Informasi terkini seputar pembangunan desa, kemajuan pemberdayaan
              warga, agenda gotong royong, serta kegiatan kebudayaan lereng Lawu.
            </p>
          </div>
          <div>
            <a
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-white shadow-sm hover:bg-primary-container transition-all inline-flex items-center gap-2"
              href="#"
            >
              <span>Arsip Berita Lengkap</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/berita/${article.slug}`}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-surface-container-high"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={article.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs ${article.categoryColor} font-bold shadow-sm`}
                >
                  {article.category}
                </div>
                <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5">
                  <MaterialIcon name="calendar_month" className="text-[16px]" />
                  <span>{article.date}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-3 leading-relaxed text-justify">
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
      </div>
    </section>
  );
}
