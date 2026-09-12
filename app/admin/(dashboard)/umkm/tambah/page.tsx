import Link from "next/link";
import type { Metadata } from "next";
import UmkmForm from "../UmkmForm";
import { createUmkmAction } from "../actions";

export const metadata: Metadata = {
  title: "Tambah UMKM — Admin Desa Milangasri",
};

export default function TambahUmkmPage() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/umkm"
          className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">
            arrow_back
          </span>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
            Tambah UMKM
          </h1>
          <p className="text-on-surface-variant text-sm mt-0.5">
            Daftarkan UMKM baru Desa Milangasri
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high p-6 lg:p-8">
        <UmkmForm action={createUmkmAction} submitLabel="Daftarkan UMKM" />
      </div>
    </div>
  );
}
