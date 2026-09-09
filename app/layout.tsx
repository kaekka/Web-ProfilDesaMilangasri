import type { Metadata } from "next";
import "./globals.css";

// Google Fonts (Inter & Plus Jakarta Sans) are defined as CSS variables
// in globals.css with system font fallbacks to avoid connection timeout
// when running offline or behind a restricted network.
// To use real Google Fonts, re-add next/font/google imports and inject
// the variables via className on <html> as before.

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
      className="scroll-smooth"
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
