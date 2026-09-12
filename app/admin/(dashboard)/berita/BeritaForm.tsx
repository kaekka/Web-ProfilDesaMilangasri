"use client";

import { useActionState } from "react";
import Link from "next/link";

interface BeritaFormProps {
  action: (prevState: { error?: string } | null | void, formData: FormData) => Promise<{ error?: string } | void>;
  defaultValues?: {
    title?: string;
    description?: string;
    category?: string;
    date?: string;
    image_url?: string;
    alt?: string;
    content?: string;
  };
  submitLabel?: string;
  backHref?: string;
}

const CATEGORIES = [
  "Pembangunan Desa",
  "Kegiatan Masyarakat",
  "Pemberdayaan UMKM",
  "Tradisi & Budaya",
  "KKNT UNESA",
  "Kesehatan",
  "Pendidikan",
  "Lainnya",
];

export default function BeritaForm({
  action,
  defaultValues = {},
  submitLabel = "Simpan Berita",
  backHref = "/admin/berita",
}: BeritaFormProps) {
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <form id="berita-form" action={formAction} className="space-y-6">
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
          {/* Title */}
          <div>
            <label
              htmlFor="berita-title"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Judul Berita <span className="text-error">*</span>
            </label>
            <input
              id="berita-title"
              name="title"
              type="text"
              required
              defaultValue={defaultValues.title}
              placeholder="Contoh: Festival Bersih Desa di Sumber Duren..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="berita-description"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Ringkasan / Deskripsi
            </label>
            <textarea
              id="berita-description"
              name="description"
              rows={3}
              defaultValue={defaultValues.description}
              placeholder="Ringkasan singkat berita yang ditampilkan di halaman daftar berita..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="berita-content"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Isi Berita Lengkap
            </label>
            <textarea
              id="berita-content"
              name="content"
              rows={12}
              defaultValue={defaultValues.content}
              placeholder="Tulis isi berita selengkapnya di sini..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-y"
            />
          </div>
        </div>

        {/* Sidebar column */}
        <div className="space-y-5">
          {/* Category */}
          <div>
            <label
              htmlFor="berita-category"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Kategori
            </label>
            <select
              id="berita-category"
              name="category"
              defaultValue={defaultValues.category ?? ""}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            >
              <option value="">Pilih kategori...</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="berita-date"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Tanggal Tampil
            </label>
            <input
              id="berita-date"
              name="date"
              type="text"
              defaultValue={defaultValues.date}
              placeholder="cth: 17 Agu 2026"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="berita-image-url"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              URL / Path Gambar
            </label>
            <input
              id="berita-image-url"
              name="image_url"
              type="text"
              defaultValue={defaultValues.image_url}
              placeholder="/images/berita/nama-file.jpg"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
            <p className="text-xs text-on-surface-variant mt-1">
              Path relatif dari folder public/ atau URL eksternal
            </p>
          </div>

          {/* Alt text */}
          <div>
            <label
              htmlFor="berita-alt"
              className="block text-sm font-semibold text-on-surface mb-1.5"
            >
              Teks Alt Gambar
            </label>
            <input
              id="berita-alt"
              name="alt"
              type="text"
              defaultValue={defaultValues.alt}
              placeholder="Deskripsi gambar untuk aksesibilitas"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 space-y-3">
            <button
              id="berita-form-submit"
              type="submit"
              disabled={pending}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-container transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
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
