import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website Resmi Desa Milangasri - Kec. Panekan, Kab. Magetan",
  description:
    "Portal resmi pemerintahan Desa Milangasri, Kecamatan Panekan, Kabupaten Magetan. Informasi pembangunan desa, UMKM, berita, dan layanan warga lereng Gunung Lawu.",
  icons: {
    icon: "/logo-magetan.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
