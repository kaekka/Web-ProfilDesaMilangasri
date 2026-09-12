import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Admin Desa Milangasri",
};

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    { count: beritaCount },
    { count: umkmCount },
    { data: recentBerita },
    { data: recentUmkm },
  ] = await Promise.all([
    supabase.from("berita").select("*", { count: "exact", head: true }),
    supabase.from("umkm").select("*", { count: "exact", head: true }),
    supabase
      .from("berita")
      .select("id, title, category, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .from("umkm")
      .select("id, nama, kategori, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const stats = [
    {
      label: "Total Berita",
      value: beritaCount ?? 0,
      icon: "newspaper",
      href: "/admin/berita",
      color: "bg-primary",
      lightColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      label: "Total UMKM",
      value: umkmCount ?? 0,
      icon: "store",
      href: "/admin/umkm",
      color: "bg-secondary",
      lightColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
          Dashboard
        </h1>
        <p className="text-on-surface-variant text-sm mt-1">
          Selamat datang di Panel Admin Desa Milangasri
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            id={`dashboard-stat-${stat.label.toLowerCase().replace(" ", "-")}`}
            className="group flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-surface-container-high hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-2xl ${stat.lightColor}`}
            >
              <span
                className={`material-symbols-outlined text-[28px] ${stat.textColor}`}
              >
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-on-surface">
                {stat.value}
              </p>
              <p className="text-on-surface-variant text-sm font-medium">
                {stat.label}
              </p>
            </div>
            <span
              className={`material-symbols-outlined ml-auto text-[20px] ${stat.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}
            >
              arrow_forward
            </span>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-10">
        <h2 className="text-base font-bold text-on-surface mb-4">
          Tambah Data Cepat
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/berita/tambah"
            id="dashboard-add-berita-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Tambah Berita
          </Link>
          <Link
            href="/admin/umkm/tambah"
            id="dashboard-add-umkm-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-sm font-semibold hover:bg-secondary-container transition-colors shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Tambah UMKM
          </Link>
        </div>
      </div>

      {/* Recent tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Berita */}
        <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-high">
            <h2 className="font-bold text-on-surface text-sm">Berita Terbaru</h2>
            <Link
              href="/admin/berita"
              className="text-primary text-xs font-semibold hover:underline"
            >
              Lihat semua
            </Link>
          </div>
          <div className="divide-y divide-surface-container-high">
            {recentBerita && recentBerita.length > 0 ? (
              recentBerita.map((item) => (
                <div key={item.id} className="px-6 py-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                    article
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-on-surface truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center text-on-surface-variant text-sm">
                Belum ada berita
              </div>
            )}
          </div>
        </div>

        {/* Recent UMKM */}
        <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-high">
            <h2 className="font-bold text-on-surface text-sm">UMKM Terbaru</h2>
            <Link
              href="/admin/umkm"
              className="text-secondary text-xs font-semibold hover:underline"
            >
              Lihat semua
            </Link>
          </div>
          <div className="divide-y divide-surface-container-high">
            {recentUmkm && recentUmkm.length > 0 ? (
              recentUmkm.map((item) => (
                <div key={item.id} className="px-6 py-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 shrink-0">
                    storefront
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-on-surface truncate">
                      {item.nama}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {item.kategori}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center text-on-surface-variant text-sm">
                Belum ada data UMKM
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
