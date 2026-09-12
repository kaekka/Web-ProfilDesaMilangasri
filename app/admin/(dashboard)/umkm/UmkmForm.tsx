"use client";

import { useActionState, useState, startTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import imageCompression from "browser-image-compression";

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
  const [state, formAction, isPending] = useActionState(action, null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [preview, setPreview] = useState(defaultValues?.image_url || "");

  const pending = isPending || isCompressing;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setIsCompressing(true);
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 3,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
        formData.set("image", compressedFile, compressedFile.name);
      } catch (error) {
        console.error("Error compressing image:", error);
      } finally {
        setIsCompressing(false);
      }
    }
    
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Image Upload */}
          <div>
            <label
              htmlFor="umkm-image"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Foto UMKM
            </label>
            
            {preview && (
              <div className="relative w-full h-48 mb-3 rounded-xl overflow-hidden border border-outline-variant bg-slate-50">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            )}

            <input
              id="umkm-image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-secondary hover:file:bg-secondary/20 transition"
            />
            <p className="text-xs text-on-surface-variant mt-1">
              Pilih foto UMKM (Otomatis dikompres &lt;3MB). Jika dikosongkan, foto lama tetap digunakan.
            </p>
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
