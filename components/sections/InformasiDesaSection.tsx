"use client";

import { useState } from "react";
import MaterialIcon from "@/components/icons/MaterialIcon";
import StrukturOrganisasiModal from "@/components/ui/StrukturOrganisasiModal";

export default function InformasiDesaSection() {
  const [strukturOpen, setStrukturOpen] = useState(false);

  return (
    <section className="w-full bg-surface py-16 md:py-24 relative" id="informasi-desa">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
            <MaterialIcon name="info" className="text-[18px] text-tertiary" />
            <span>Profil Desa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
            Informasi Desa Milangasri
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 text-base leading-relaxed">
            Kenali lebih dekat sejarah, struktur organisasi pemerintahan, serta visi dan misi yang menjadi panduan pembangunan Desa Milangasri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Sejarah Desa */}
          <a
            href="/profil/sejarah"
            className="group flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-low border border-surface-container-high hover:bg-primary-container transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MaterialIcon name="history_edu" className="text-[32px]" />
            </div>
            <h3 className="text-xl font-bold text-on-surface group-hover:text-on-primary-container mb-3">
              Sejarah Desa
            </h3>
            <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container/80">
              Menelusuri asal-usul dan jejak historis terbentuknya Desa Milangasri dari masa ke masa.
            </p>
          </a>

          {/* Struktur Organisasi */}
          <button
            type="button"
            onClick={() => setStrukturOpen(true)}
            className="group flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-low border border-surface-container-high hover:bg-secondary-container transition-colors duration-300 shadow-sm hover:shadow-md w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MaterialIcon name="account_tree" className="text-[32px]" />
            </div>
            <h3 className="text-xl font-bold text-on-surface group-hover:text-on-secondary-container mb-3">
              Struktur Organisasi
            </h3>
            <p className="text-sm text-on-surface-variant group-hover:text-on-secondary-container/80">
              Susunan perangkat pemerintahan desa yang bertugas melayani dan memajukan masyarakat.
            </p>
          </button>

          {/* Visi & Misi */}
          <a
            href="/profil/visi-misi"
            className="group flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-low border border-surface-container-high hover:bg-tertiary-container transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MaterialIcon name="track_changes" className="text-[32px]" />
            </div>
            <h3 className="text-xl font-bold text-on-surface group-hover:text-on-tertiary-container mb-3">
              Visi &amp; Misi
            </h3>
            <p className="text-sm text-on-surface-variant group-hover:text-on-tertiary-container/80">
              Cita-cita dan langkah strategis dalam mewujudkan desa yang sejahtera dan berdaya saing.
            </p>
          </a>
        </div>
      </div>

      <StrukturOrganisasiModal
        open={strukturOpen}
        onClose={() => setStrukturOpen(false)}
      />
    </section>
  );
}
