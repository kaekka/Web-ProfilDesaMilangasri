import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white backdrop-blur-xl border-b border-surface-container-high shadow-[0_2px_10px_rgba(51,69,13,0.06)] transition-all duration-300">
            <div className="h-20 max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
                {/* Brand Logo & Identity */}
                <a className="flex items-center gap-3 group" href="#">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-fixed shadow-md shadow-primary/20 transition-transform group-hover:scale-105 overflow-hidden">
                        <Image
                            alt="Logo Desa Milangasri"
                            className="w-full h-full object-contain rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjw9PrgpX2pvflULquBr2-QQg6M86d0-tXjnxevbEWcBeK_B0ev0Euax9q_0gKkfTCIeevN6X1lj5fybDVKvxdhihvuQWI4HBRP0MLo8CbnBzFxnDTlnHI-7G9tfoldAeJNNKcdOcxOFcxBVk1rYMIPMneBEIckh1Ma6mGbPJzs08CAt6T7hBP6XhslRkDv4Sl9d2nAT7d8xm-RnYMFBx8fu9aSXHWCgmNkMQQ1w6vREBR7oaVhNcnUu3u5GoigfgyUYQ"
                            width={40}
                            height={40}
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
                    <a
                        className="px-5 py-2 transition-all duration-200 bg-primary text-white font-semibold text-sm rounded-full shadow-sm"
                        href="#profil"
                    >
                        Profil Desa
                    </a>
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
                        <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col min-w-[190px] p-2 bg-white rounded-2xl shadow-xl border border-surface-container-high z-50 transition-all">
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
                        href="#kontak"
                    >
                        <MaterialIcon name="support_agent" className="text-[18px]" />
                        <span>Layanan Warga</span>
                    </a>
                    <a
                        className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        href="#geografi"
                        title="Peta Lokasi"
                    >
                        <MaterialIcon name="pin_drop" className="text-[20px]" />
                    </a>

                    {/* Mobile Menu */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
