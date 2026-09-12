"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/berita", label: "Berita", icon: "newspaper" },
  { href: "/admin/umkm", label: "UMKM", icon: "store" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        id="admin-sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white shadow-lg"
        aria-label="Toggle sidebar"
      >
        <span className="material-symbols-outlined text-[20px]">
          {sidebarOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-inverse-surface flex flex-col z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* Logo area */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-magetan.svg"
              alt="Logo Magetan"
              className="w-9 h-9 object-contain"
            />
            <div>
              <p className="text-inverse-on-surface font-bold text-sm leading-tight">
                Admin Panel
              </p>
              <p className="text-inverse-on-surface/60 text-xs">
                Desa Milangasri
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive(item.href)
                  ? "bg-inverse-primary text-on-primary-fixed"
                  : "text-inverse-on-surface/70 hover:bg-white/10 hover:text-inverse-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-inverse-on-surface/60 hover:text-inverse-on-surface text-sm transition-colors mb-1"
          >
            <span className="material-symbols-outlined text-[20px]">
              open_in_new
            </span>
            Lihat Website
          </Link>
          <button
            id="admin-logout-btn"
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-error hover:bg-error/10 text-sm font-semibold transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[20px]">
              logout
            </span>
            {loggingOut ? "Keluar..." : "Keluar"}
          </button>
        </div>
      </aside>
    </>
  );
}
