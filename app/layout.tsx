import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Using system fonts as fallback to avoid Google Fonts connection timeout
// when running offline or behind a restricted network.
// Swap these back to next/font/google when internet is available.
const plusJakartaSans = localFont({
  src: [],
  variable: "--font-plus-jakarta-sans",
  fallback: [
    "Plus Jakarta Sans",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  display: "swap",
});

const inter = localFont({
  src: [],
  variable: "--font-inter-variable",
  fallback: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
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
