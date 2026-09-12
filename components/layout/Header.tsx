"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaterialIcon from "@/components/icons/MaterialIcon";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string>("profil");
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const itemRefs = useRef<Record<string, HTMLElement | null>>({});

    // ScrollSpy to detect active section on scroll
    useEffect(() => {
        if (pathname === "/about") {
            setActiveSection("");
            return;
        }

        if (pathname === "/profil") {
            setActiveSection("profil");
            return;
        }

        const sections = [
            { id: "profil", key: "profil" },
            { id: "berita", key: "berita" },
            { id: "umkm", key: "potensi" },
            { id: "geografi", key: "potensi" },
            { id: "kontak", key: "kontak" },
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 140; // Offset for fixed header

            // Check if user scrolled near bottom of the page
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                setActiveSection("kontak");
                return;
            }

            let currentKey = "profil";
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const top = element.offsetTop;
                    if (scrollPosition >= top) {
                        currentKey = section.key;
                    }
                }
            }
            setActiveSection(currentKey);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    // Recalculate indicator position when activeSection changes or window resizes
    const updateIndicator = useCallback(() => {
        const activeEl = itemRefs.current[activeSection];
        if (activeEl) {
            setIndicatorStyle({
                left: activeEl.offsetLeft,
                width: activeEl.offsetWidth,
                opacity: 1,
            });
        } else {
            setIndicatorStyle((prev) => ({
                ...prev,
                opacity: 0,
            }));
        }
    }, [activeSection]);

    useEffect(() => {
        updateIndicator();
        // Small delay to ensure DOM layout is calculated accurately after mount
        const timer = setTimeout(updateIndicator, 50);
        window.addEventListener("resize", updateIndicator);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateIndicator);
        };
    }, [updateIndicator]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white backdrop-blur-xl border-b border-surface-container-high shadow-[0_2px_10px_rgba(51,69,13,0.06)] transition-all duration-300">
                <div className="h-20 max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
                    {/* Brand Logo & Identity */}
                    <Link className="flex items-center gap-3 group" href="/">
                        <div className="w-10 h-10 rounded-full bg-white border border-surface-container-high flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 overflow-hidden p-1">
                            <Image
                                alt="Logo Kabupaten Magetan"
                                className="w-full h-full object-contain"
                                src="/logo-magetan.svg"
                                width={40}
                                height={40}
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-primary tracking-tight group-hover:text-primary-container transition-colors">
                                Desa Milangasri
                            </span>
                            <span className="text-xs text-on-surface-variant font-medium">
                                Kec. Panekan, Kab. Magetan
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Menu */}
                    <nav className="relative hidden lg:flex items-center gap-1.5 p-1.5 bg-surface-container/70 rounded-full backdrop-blur-md border border-surface-container-highest">
                        {/* Animated Active Pill Indicator */}
                        <div
                            className="absolute top-1.5 bottom-1.5 rounded-full bg-primary shadow-sm transition-all duration-300 ease-out pointer-events-none"
                            style={{
                                left: `${indicatorStyle.left}px`,
                                width: `${indicatorStyle.width}px`,
                                opacity: indicatorStyle.opacity,
                            }}
                        />

                        <Link
                            ref={(el) => { itemRefs.current["profil"] = el; }}
                            className={`relative z-10 px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${activeSection === "profil"
                                    ? "text-white font-semibold"
                                    : "text-on-surface-variant hover:text-primary"
                                }`}
                            href="/"
                        >
                            <span>Profil Desa</span>
                        </Link>

                        <Link
                            ref={(el) => { itemRefs.current["berita"] = el; }}
                            className={`relative z-10 px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${activeSection === "berita"
                                    ? "text-white font-semibold"
                                    : "text-on-surface-variant hover:text-primary"
                                }`}
                            href="/#berita"
                        >
                            <span>Berita</span>
                        </Link>

                        {/* Dropdown Potensi Desa */}
                        <div
                            ref={(el) => { itemRefs.current["potensi"] = el; }}
                            className="relative group z-10"
                        >
                            <button
                                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 flex items-center gap-1 cursor-pointer ${activeSection === "potensi"
                                        ? "text-white font-semibold"
                                        : "text-on-surface-variant hover:text-primary"
                                    }`}
                                type="button"
                            >
                                <span>Potensi Desa</span>
                                <MaterialIcon
                                    name="arrow_drop_down"
                                    className={`text-[18px] transition-transform duration-200 group-hover:rotate-180 ${activeSection === "potensi" ? "text-white" : ""
                                        }`}
                                />
                            </button>
                            <div className="absolute left-0 top-full hidden group-hover:flex flex-col min-w-[190px] pt-2">
                                <div className="flex flex-col p-2 bg-white rounded-2xl shadow-xl border border-surface-container-high z-50">
                                    <Link
                                        className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                        href="/#umkm"
                                    >
                                        <MaterialIcon
                                            name="storefront"
                                            className="text-[18px] text-secondary"
                                        />
                                        <span>UMKM</span>
                                    </Link>
                                    <Link
                                        className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                        href="/#geografi"
                                    >
                                        <MaterialIcon
                                            name="explore"
                                            className="text-[18px] text-tertiary"
                                        />
                                        <span>Geografi</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            ref={(el) => { itemRefs.current["kontak"] = el; }}
                            className={`relative z-10 px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${activeSection === "kontak"
                                    ? "text-white font-semibold"
                                    : "text-on-surface-variant hover:text-primary"
                                }`}
                            href="/#kontak"
                        >
                            <span>Kontak</span>
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${pathname === "/about"
                                    ? "bg-primary text-white"
                                    : "bg-primary-container text-on-primary-container hover:bg-primary hover:text-white"
                                }`}
                            href="/about"
                        >
                            <MaterialIcon name="info" className="text-[18px]" />
                            <span>About Us</span>
                        </Link>
                        <Link
                            className="w-10 h-10 rounded-full bg-white border border-surface-container-high shadow-sm flex items-center justify-center hover:scale-105 transition-all p-1 overflow-hidden"
                            href="/about"
                            title="Universitas Negeri Surabaya (UNESA)"
                        >
                            <Image
                                alt="Logo UNESA"
                                className="w-full h-full object-contain"
                                src="/logo-kkn-unesa.png"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link
                            className="w-10 h-10 rounded-full bg-white border border-surface-container-high shadow-sm flex items-center justify-center hover:scale-105 transition-all p-1 overflow-hidden"
                            href="/about"
                            title="KKN Tematik Desa Milangasri"
                        >
                            <Image
                                alt="Logo KKNT Desa Milangasri"
                                className="w-full h-full object-contain"
                                src="/Logo-KKNT.png"
                                width={40}
                                height={40}
                            />
                        </Link>

                        {/* Mobile Menu */}
                        <MobileMenu />
                    </div>
                </div>
            </header>
        </>
    );
}

