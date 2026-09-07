import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white backdrop-blur-xl border-b border-surface-container-high shadow-[0_2px_10px_rgba(51,69,13,0.06)] transition-all duration-300">
            <div className="h-20 max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
                {/* Brand Logo & Identity */}
                <a className="flex items-center gap-3 group" href="#">
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
                </a>

                {/* Desktop Navigation Menu */}
                <nav className="hidden lg:flex items-center gap-1.5 p-1.5 bg-surface-container/70 rounded-full backdrop-blur-md border border-surface-container-highest">
                    {/* Dropdown Profil Desa */}
                    <div className="relative group">
                        <button
                            className="px-5 py-2 transition-all duration-200 bg-primary text-white font-semibold text-sm rounded-full shadow-sm flex items-center gap-1 cursor-pointer"
                            type="button"
                        >
                            <span>Profil Desa</span>
                            <MaterialIcon
                                name="arrow_drop_down"
                                className="text-[18px] transition-transform duration-200 group-hover:rotate-180"
                            />
                        </button>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col min-w-[220px] pt-2">
                            <div className="flex flex-col p-2 bg-white rounded-2xl shadow-xl border border-surface-container-high z-50">
                                <a
                                    className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                    href="/profil/sejarah"
                                >
                                    <MaterialIcon name="history_edu" className="text-[18px] text-primary" />
                                    <span>Sejarah Desa</span>
                                </a>
                                <a
                                    className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                    href="/profil/struktur"
                                >
                                    <MaterialIcon name="account_tree" className="text-[18px] text-secondary" />
                                    <span>Struktur Organisasi</span>
                                </a>
                                <a
                                    className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                    href="/profil/visi-misi"
                                >
                                    <MaterialIcon name="track_changes" className="text-[18px] text-tertiary" />
                                    <span>Visi & Misi</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a
                        className="px-5 py-2 rounded-full font-medium text-sm text-on-surface-variant hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-colors duration-200"
                        href="#berita"
                    >
                        Berita
                    </a>

                    {/* Dropdown Potensi Desa */}
                    <div className="relative group">
                        <button
                            className="px-5 py-2 rounded-full font-medium text-sm text-on-surface-variant hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                            type="button"
                        >
                            <span>Potensi Desa</span>
                            <MaterialIcon
                                name="arrow_drop_down"
                                className="text-[18px] transition-transform duration-200 group-hover:rotate-180"
                            />
                        </button>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col min-w-[190px] pt-2">
                            <div className="flex flex-col p-2 bg-white rounded-2xl shadow-xl border border-surface-container-high z-50">
                                <a
                                    className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                    href="#umkm"
                                >
                                    <MaterialIcon
                                        name="storefront"
                                        className="text-[18px] text-secondary"
                                    />
                                    <span>UMKM</span>
                                </a>
                                <a
                                    className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                    href="#umkm"
                                >
                                    <MaterialIcon
                                        name="local_florist"
                                        className="text-[18px] text-primary"
                                    />
                                    <span>Produk Lokal</span>
                                </a>
                                <a
                                    className="px-4 py-2.5 text-left font-medium text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors rounded-xl flex items-center gap-2"
                                    href="#geografi"
                                >
                                    <MaterialIcon
                                        name="explore"
                                        className="text-[18px] text-tertiary"
                                    />
                                    <span>Geografi</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a
                        className="px-5 py-2 rounded-full font-medium text-sm text-on-surface-variant hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-colors duration-200"
                        href="#kontak"
                    >
                        Kontak
                    </a>
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <a
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-semibold hover:bg-primary hover:text-white transition-all shadow-sm"
                        href="#profil"
                    >
                        <MaterialIcon name="info" className="text-[18px]" />
                        <span>About Us</span>
                    </a>
                    <a
                        className="w-10 h-10 rounded-full bg-white border border-surface-container-high shadow-sm flex items-center justify-center hover:scale-105 transition-all p-1 overflow-hidden"
                        href="#profil"
                        title="Universitas Negeri Surabaya (UNESA)"
                    >
                        <Image
                            alt="Logo UNESA"
                            className="w-full h-full object-contain"
                            src="/logo-kkn-unesa.png"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a
                        className="w-10 h-10 rounded-full bg-white border border-surface-container-high shadow-sm flex items-center justify-center hover:scale-105 transition-all p-1 overflow-hidden"
                        href="#profil"
                        title="KKN Tematik Desa Milangasri"
                    >
                        <Image
                            alt="Logo KKNT Desa Milangasri"
                            className="w-full h-full object-contain"
                            src="/Logo-KKNT.png"
                            width={40}
                            height={40}
                        />
                    </a>

                    {/* Mobile Menu */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
