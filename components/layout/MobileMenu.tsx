"use client";

import { useState, useEffect, useCallback } from "react";
import MaterialIcon from "@/components/icons/MaterialIcon";

const NAV_LINKS = [
    { label: "Profil Desa", href: "#profil", icon: "home" },
    { label: "Berita", href: "#berita", icon: "newspaper" },
    { label: "Kontak", href: "#kontak", icon: "call" },
];

const POTENSI_LINKS = [
    { label: "UMKM", href: "#umkm", icon: "storefront", color: "text-secondary" },
    { label: "Produk Lokal", href: "#umkm", icon: "local_florist", color: "text-primary" },
    { label: "Geografi", href: "#geografi", icon: "explore", color: "text-tertiary" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const [potensiOpen, setPotensiOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const close = useCallback(() => {
        setOpen(false);
        setPotensiOpen(false);
    }, []);

    return (
        <>
            {/* Hamburger Button — visible below lg */}
            <button
                className="lg:hidden w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                onClick={() => setOpen(true)}
                aria-label="Buka menu navigasi"
                type="button"
            >
                <MaterialIcon name="menu" className="text-[22px]" />
            </button>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                    onClick={close}
                    aria-hidden="true"
                />
            )}

            {/* Slide-out Drawer */}
            <div
                className={`fixed top-0 right-0 z-[70] h-full w-[300px] max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-surface-container-high">
                    <span className="font-bold text-lg text-primary">Menu</span>
                    <button
                        className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-on-surface-variant"
                        onClick={close}
                        aria-label="Tutup menu"
                        type="button"
                    >
                        <MaterialIcon name="close" className="text-[20px]" />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col p-4 gap-1">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href + link.label}
                            href={link.href}
                            onClick={close}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface font-medium text-sm hover:bg-surface-container hover:text-primary transition-colors"
                        >
                            <MaterialIcon name={link.icon} className="text-[20px] text-on-surface-variant" />
                            <span>{link.label}</span>
                        </a>
                    ))}

                    {/* Potensi Desa Accordion */}
                    <button
                        type="button"
                        onClick={() => setPotensiOpen(!potensiOpen)}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-on-surface font-medium text-sm hover:bg-surface-container hover:text-primary transition-colors w-full"
                    >
                        <div className="flex items-center gap-3">
                            <MaterialIcon name="eco" className="text-[20px] text-on-surface-variant" />
                            <span>Potensi Desa</span>
                        </div>
                        <MaterialIcon
                            name="expand_more"
                            className={`text-[20px] text-on-surface-variant transition-transform duration-200 ${potensiOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Potensi Sub-links */}
                    <div
                        className={`overflow-hidden transition-all duration-200 ${potensiOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="pl-4 flex flex-col gap-0.5">
                            {POTENSI_LINKS.map((link) => (
                                <a
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={close}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface font-medium text-sm hover:bg-surface-container hover:text-primary transition-colors"
                                >
                                    <MaterialIcon name={link.icon} className={`text-[18px] ${link.color}`} />
                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* CTA Button */}
                <div className="px-5 mt-4">
                    <a
                        href="#kontak"
                        onClick={close}
                        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        <MaterialIcon name="support_agent" className="text-[18px]" />
                        <span>Layanan Warga</span>
                    </a>
                </div>
            </div>
        </>
    );
}
