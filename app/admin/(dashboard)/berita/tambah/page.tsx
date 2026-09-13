import Link from "next/link";
import type { Metadata } from "next";
import BeritaForm from "../BeritaForm";
import { createBeritaAction } from "../actions";

export const metadata: Metadata = {
  title: "Tambah Berita — Admin Desa Milangasri",
};

export default function TambahBeritaPage() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/berita"
          className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">
            arrow_back
          </span>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
            Tambah Berita
          </h1>
          <p className="text-on-surface-variant text-sm mt-0.5">
            Tulis berita baru untuk ditampilkan di website desa
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high p-6 lg:p-8">
        <BeritaForm action={createBeritaAction} submitLabel="Publikasikan Berita" />
      </div>
    </div>
  );
}
