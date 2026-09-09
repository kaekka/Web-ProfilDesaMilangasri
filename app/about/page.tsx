import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutUsSection from "@/components/sections/AboutUsSection";

export const metadata = {
  title: "About Us - Tim Pengembang Portal Desa Milangasri",
  description:
    "Mengenal Tim KKN-T Universitas Negeri Surabaya (UNESA) sebagai pengembang resmi Portal Web Desa Milangasri, Kecamatan Panekan, Magetan.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 min-h-screen bg-background">
        <AboutUsSection />
      </main>
      <Footer />
    </>
  );
}
