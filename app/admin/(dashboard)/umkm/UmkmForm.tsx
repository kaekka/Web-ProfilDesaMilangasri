"use client";

import { useActionState } from "react";
import Link from "next/link";

interface UmkmFormProps {
  action: (prevState: { error?: string } | null | void, formData: FormData) => Promise<{ error?: string } | void>;
  defaultValues?: {
    nama?: string;
    pemilik?: string;
    kategori?: string;
    deskripsi?: string;
    produk?: string;
    kontak?: string;
    alamat?: string;
    image_url?: string;
    maps_url?: string;
  };
  submitLabel?: string;
  backHref?: string;
}

const KATEGORI_OPTIONS = [
  "Kuliner & Makanan",
  "Kerajinan Tangan",
  "Pertanian & Perkebunan",
  "Fashion & Tekstil",
  "Jasa",
  "Perdagangan",
  "Peternakan",
  "Lainnya",
];

export default function UmkmForm({
  action,
  defaultValues = {},
  submitLabel = "Simpan UMKM",
  backHref = "/admin/umkm",
}: UmkmFormProps) {
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <form id="umkm-form" action={formAction} className="space-y-6">
      {state?.error && (
        <div className="flex items-start gap-3 bg-error-container text-on-error-container rounded-xl px-5 py-4 text-sm font-medium">
          <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0">
            error
          </span>
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-5">
          {/* Nama */}
          <div>
            <label
              htmlFor="umkm-nama"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Nama UMKM <span className="text-error">*</span>
            </label>
            <input
              id="umkm-nama"
              name="nama"
              type="text"
              required
              defaultValue={defaultValues.nama}
              placeholder="Contoh: Keripik Singkong Bu Sari"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label
              htmlFor="umkm-deskripsi"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Deskripsi Usaha
            </label>
            <textarea
              id="umkm-deskripsi"
              name="deskripsi"
              rows={4}
              defaultValue={defaultValues.deskripsi}
              placeholder="Ceritakan tentang usaha ini, sejarah, keunggulan produk, dll..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition resize-none"
            />
          </div>

          {/* Produk */}
          <div>
            <label
              htmlFor="umkm-produk"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Produk Utama
            </label>
            <input
              id="umkm-produk"
              name="produk"
              type="text"
              defaultValue={defaultValues.produk}
              placeholder="Contoh: Keripik singkong, tempe, jamu..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
          </div>

          {/* Alamat */}
          <div>
            <label
              htmlFor="umkm-alamat"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Alamat
            </label>
            <input
              id="umkm-alamat"
              name="alamat"
              type="text"
              defaultValue={defaultValues.alamat}
              placeholder="Contoh: Dusun Ngratu RT 02/RW 01, Milangasri"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Sidebar column */}
        <div className="space-y-5">
          {/* Pemilik */}
          <div>
            <label
              htmlFor="umkm-pemilik"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Nama Pemilik
            </label>
            <input
              id="umkm-pemilik"
              name="pemilik"
              type="text"
              defaultValue={defaultValues.pemilik}
              placeholder="Nama pemilik/pengelola"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
          </div>

          {/* Kategori */}
          <div>
            <label
              htmlFor="umkm-kategori"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Kategori
            </label>
            <select
              id="umkm-kategori"
              name="kategori"
              defaultValue={defaultValues.kategori ?? ""}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            >
              <option value="">Pilih kategori...</option>
              {KATEGORI_OPTIONS.map((kat) => (
                <option key={kat} value={kat}>
                  {kat}
                </option>
              ))}
            </select>
          </div>

          {/* Kontak */}
          <div>
            <label
              htmlFor="umkm-kontak"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Nomor HP / WA
            </label>
            <input
              id="umkm-kontak"
              name="kontak"
              type="text"
              defaultValue={defaultValues.kontak}
              placeholder="08xx-xxxx-xxxx"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="umkm-image-url"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              URL / Path Foto
            </label>
            <input
              id="umkm-image-url"
              name="image_url"
              type="text"
              defaultValue={defaultValues.image_url}
              placeholder="/images/umkm/nama-file.jpg"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
          </div>

          {/* Google Maps URL */}
          <div>
            <label
              htmlFor="umkm-maps-url"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Link Google Maps
            </label>
            <input
              id="umkm-maps-url"
              name="maps_url"
              type="url"
              defaultValue={defaultValues.maps_url}
              placeholder="https://maps.google.com/?q=..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            />
            <p className="text-xs text-on-surface-variant mt-1">
              Salin link dari Google Maps → Share → Copy link
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 space-y-3">
            <button
              id="umkm-form-submit"
              type="submit"
              disabled={pending}
              className="w-full py-3 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                  Menyimpan...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">
                    save
                  </span>
                  {submitLabel}
                </>
              )}
            </button>
            <Link
              href={backHref}
              className="w-full py-3 rounded-xl border border-outline-variant text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
              Batal
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
