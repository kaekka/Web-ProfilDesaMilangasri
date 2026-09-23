"use client";

import { useState } from "react";
import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";

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

const KATEGORI_COLORS: Record<string, string> = {
  "Kuliner & Makanan": "bg-secondary/10 text-secondary",
  "Pertanian & Perkebunan": "bg-primary/10 text-primary",
  "Kerajinan Tangan": "bg-tertiary/10 text-tertiary",
  "Fashion & Tekstil": "bg-purple-100 text-purple-700",
  Jasa: "bg-blue-100 text-blue-700",
  Perdagangan: "bg-orange-100 text-orange-700",
  Peternakan: "bg-amber-100 text-amber-700",
};

export default function UmkmFilterableList({
  umkmList,
}: {
  umkmList: UmkmRow[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    ...new Set(umkmList.map((u) => u.kategori).filter(Boolean)),
  ] as string[];

  const filtered = activeCategory
    ? umkmList.filter((u) => u.kategori === activeCategory)
    : umkmList;

  return (
    <>
      {/* Category filter chips */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-colors cursor-pointer ${
            activeCategory === null
              ? "bg-secondary text-white"
              : "bg-surface-container text-on-surface-variant border border-surface-container-high hover:bg-secondary-container hover:text-on-secondary-container"
          }`}
        >
          Semua UMKM
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-secondary text-white font-semibold shadow-sm"
                : "bg-surface-container text-on-surface-variant border border-surface-container-high hover:bg-secondary-container hover:text-on-secondary-container"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((umkm) => (
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

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-[64px] text-on-surface-variant/30 mb-4 block">
            store
          </span>
          <h3 className="text-xl font-bold text-on-surface mb-2">
            {activeCategory ? "Tidak Ada UMKM" : "Belum Ada Data UMKM"}
          </h3>
          <p className="text-on-surface-variant">
            {activeCategory
              ? `Belum ada UMKM dengan kategori "${activeCategory}".`
              : "Data UMKM akan segera ditambahkan."}
          </p>
        </div>
      )}
    </>
  );
}
