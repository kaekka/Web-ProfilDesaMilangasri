import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InformasiDesaSection from "@/components/sections/InformasiDesaSection";

export const metadata = {
  title: "Profil Desa - Desa Milangasri",
  description: "Informasi sejarah, struktur organisasi, serta visi dan misi Desa Milangasri.",
};

export default function ProfilPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 min-h-screen flex flex-col">
        <InformasiDesaSection />
      </main>
      <Footer />
    </>
  );
}
