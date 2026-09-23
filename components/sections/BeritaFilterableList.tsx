"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/icons/MaterialIcon";

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

export default function BeritaFilterableList({
  articles,
}: {
  articles: ArticleItem[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    ...new Set(articles.map((a) => a.category).filter(Boolean)),
  ];

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <>
      {/* Category filter chips */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-colors cursor-pointer ${
            activeCategory === null
              ? "bg-primary text-white"
              : "bg-surface-container text-on-surface-variant border border-surface-container-high hover:bg-primary-container hover:text-on-primary-container"
          }`}
        >
          Semua Berita
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-white font-semibold shadow-sm"
                : "bg-surface-container text-on-surface-variant border border-surface-container-high hover:bg-primary-container hover:text-on-primary-container"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((article, index) => (
          <Link
            key={article.slug}
            href={`/berita/${article.slug}`}
            className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-surface-container-high"
          >
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
              <div
                className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs ${article.categoryColor} font-bold shadow-sm`}
              >
                {article.category}
              </div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5">
                <MaterialIcon
                  name="calendar_month"
                  className="text-[16px]"
                />
                <span>{article.date}</span>
              </div>
            </div>

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

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <MaterialIcon
            name="article"
            className="text-[64px] text-on-surface-variant/30 mb-4"
          />
          <h3 className="text-xl font-bold text-on-surface mb-2">
            {activeCategory ? "Tidak Ada Berita" : "Belum Ada Berita"}
          </h3>
          <p className="text-on-surface-variant">
            {activeCategory
              ? `Belum ada berita dengan kategori "${activeCategory}".`
              : "Berita dan informasi desa akan segera hadir."}
          </p>
        </div>
      )}
    </>
  );
}
