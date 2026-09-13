import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import DeleteUmkmButton from "./DeleteUmkmButton";

export const metadata: Metadata = {
  title: "Kelola UMKM — Admin Desa Milangasri",
};

export default async function AdminUmkmPage() {
  const supabase = await createClient();
  const { data: umkmList, error } = await supabase
    .from("umkm")
    .select("id, nama, pemilik, kategori, kontak")
    .order("updated_at", { ascending: false });

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
            Kelola UMKM
          </h1>
          <p className="text-on-surface-variant text-sm mt-1">
            {umkmList?.length ?? 0} data UMKM tersimpan
          </p>
        </div>
        <Link
          href="/admin/umkm/tambah"
          id="umkm-add-btn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-sm font-bold hover:bg-secondary-container transition-colors shadow-sm hover:shadow-md shrink-0"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Tambah UMKM
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
        {umkmList && umkmList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-container-high bg-surface-container-lowest">
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide">
                    Nama UMKM
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide hidden sm:table-cell">
                    Pemilik
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide hidden md:table-cell">
                    Kategori
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide hidden lg:table-cell">
                    Kontak
                  </th>
                  <th className="text-right px-6 py-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wide">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {umkmList.map((umkm) => (
                  <tr
                    key={umkm.id}
                    className="hover:bg-surface-container-lowest transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-on-surface">
                        {umkm.nama}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant hidden sm:table-cell">
                      {umkm.pemilik || "—"}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      {umkm.kategori ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                          {umkm.kategori}
                        </span>
                      ) : (
                        <span className="text-on-surface-variant">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant hidden lg:table-cell">
                      {umkm.kontak || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/umkm/${umkm.id}/edit`}
                          id={`umkm-edit-${umkm.id}`}
                          className="p-2 rounded-lg text-secondary hover:bg-secondary/10 transition-colors"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit
                          </span>
                        </Link>
                        <DeleteUmkmButton id={umkm.id} nama={umkm.nama} />
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
              store
            </span>
            <p className="text-on-surface font-semibold">Belum ada data UMKM</p>
            <p className="text-on-surface-variant text-sm mt-1 mb-6">
              Daftarkan UMKM lokal Desa Milangasri untuk ditampilkan di website
            </p>
            <Link
              href="/admin/umkm/tambah"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Tambah UMKM Pertama
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
