import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import DeleteBeritaButton from "./DeleteBeritaButton";

export const metadata: Metadata = {
  title: "Kelola Berita — Admin Desa Milangasri",
};

export default async function AdminBeritaPage() {
  const supabase = await createClient();
  const { data: beritaList, error } = await supabase
    .from("berita")
    .select("id, title, category, date, slug")
    .order("created_at", { ascending: false });

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
            Kelola Berita
          </h1>
          <p className="text-on-surface-variant text-sm mt-1">
            {beritaList?.length ?? 0} berita tersimpan
          </p>
        </div>
        <Link
          href="/admin/berita/tambah"
          id="berita-add-btn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-container transition-colors shadow-sm hover:shadow-md shrink-0"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Tambah Berita
        </Link>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 bg-error-container text-on-error-container rounded-xl px-5 py-4 text-sm font-medium">
          <span className="material-symbols-outlined text-[18px]">error</span>
          {error.message}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high overflow-hidden">
        {beritaList && beritaList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-container-high bg-surface-container-lowest">
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide">
                    Judul
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide hidden sm:table-cell">
                    Kategori
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide hidden md:table-cell">
                    Tanggal
                  </th>
                  <th className="text-right px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {beritaList.map((berita) => (
                  <tr
                    key={berita.id}
                    className="hover:bg-surface-container-lowest transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-on-surface line-clamp-2 max-w-xs">
                        {berita.title}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5 font-mono">
                        /{berita.slug}
                      </p>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {berita.category || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant hidden md:table-cell">
                      {berita.date || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/berita/${berita.slug}`}
                          target="_blank"
                          id={`berita-view-${berita.id}`}
                          className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                          title="Lihat di website"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            open_in_new
                          </span>
                        </Link>
                        <Link
                          href={`/admin/berita/${berita.id}/edit`}
                          id={`berita-edit-${berita.id}`}
                          className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit
                          </span>
                        </Link>
                        <DeleteBeritaButton id={berita.id} title={berita.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-[56px] text-on-surface-variant/30 mb-3 block">
              newspaper
            </span>
            <p className="text-on-surface font-semibold">Belum ada berita</p>
            <p className="text-on-surface-variant text-sm mt-1 mb-6">
              Mulai tambahkan berita untuk ditampilkan di website
            </p>
            <Link
              href="/admin/berita/tambah"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Tambah Berita Pertama
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
