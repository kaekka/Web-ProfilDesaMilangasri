import MaterialIcon from "@/components/icons/MaterialIcon";

export default function Footer() {
    return (
        <footer
            className="relative w-full bg-primary text-white mt-12 overflow-hidden"
            id="kontak"
        >
            {/* Wave top divider */}
            <div className="w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-10 text-surface-container fill-current"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                >
                    <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,0 L0,0 Z" />
                </svg>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-10 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Kolom 1: Profil Singkat */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <MaterialIcon
                                name="nature_people"
                                className="text-primary-fixed text-[32px]"
                            />
                            <span className="font-bold text-xl text-primary-fixed">
                                Pemerintah Desa Milangasri
                            </span>
                        </div>
                        <p className="text-sm text-on-primary-container leading-relaxed">
                            Pusat transparansi pemerintahan desa, kelestarian agraris lereng
                            Gunung Lawu, dan pelayanan terpadu masyarakat Milangasri, Kecamatan
                            Panekan, Kabupaten Magetan, Jawa Timur.
                        </p>
                    </div>

                    {/* Kolom 2: Layanan & Informasi */}
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-base text-primary-fixed">
                            Layanan &amp; Informasi
                        </span>
                        <div className="flex flex-col gap-2 text-sm text-on-primary-container">
                            <div className="flex items-start gap-2">
                                <MaterialIcon
                                    name="schedule"
                                    className="text-[18px] shrink-0 mt-0.5"
                                />
                                <span>Jam Kantor: Senin - Jumat, 08.00 - 15.00 WIB</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MaterialIcon
                                    name="apartment"
                                    className="text-[18px] shrink-0 mt-0.5"
                                />
                                <span>Balai Desa: Jl. Raya Panekan - Milangasri Km 2</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MaterialIcon
                                    name="fact_check"
                                    className="text-[18px] shrink-0 mt-0.5"
                                />
                                <span>Sistem Registrasi Warga &amp; APBDes Terbuka</span>
                            </div>
                        </div>
                    </div>

                    {/* Kolom 3: Kontak Pamong Praja */}
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-base text-primary-fixed">
                            Kontak Pamong Praja
                        </span>
                        <div className="flex flex-col gap-2 text-sm text-on-primary-container">
                            <div className="flex items-start gap-2">
                                <MaterialIcon
                                    name="location_on"
                                    className="text-[18px] shrink-0 mt-0.5"
                                />
                                <span>
                                    Kecamatan Panekan, Kabupaten Magetan, Jawa Timur 63352
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MaterialIcon
                                    name="mail"
                                    className="text-[18px] shrink-0 mt-0.5"
                                />
                                <span>Surel: kontak@milangasri.desa.id</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MaterialIcon
                                    name="call"
                                    className="text-[18px] shrink-0 mt-0.5"
                                />
                                <span>Telepon Siaga: (0351) 895-021</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-12 pt-6 border-t border-primary-container/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                    <span className="text-on-primary-container">
                        © 2024 Pemerintah Desa Milangasri, Panekan, Magetan. Seluruh hak
                        cipta dilindungi.
                    </span>
                    <span className="text-primary-fixed-dim font-medium">
                        Gotong Royong • Makmur Lestari Lereng Lawu
                    </span>
                </div>
            </div>
        </footer>
    );
}
