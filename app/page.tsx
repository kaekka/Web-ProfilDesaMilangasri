import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BeritaSection from "@/components/sections/BeritaSection";
import UMKMSection from "@/components/sections/UMKMSection";
import GeografiSection from "@/components/sections/GeografiSection";
import KontakSection from "@/components/sections/KontakSection";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <HeroSection />
        <BeritaSection />
        <WaveDivider variant="surface-to-surface-container-low" />
        <UMKMSection />
        <WaveDivider variant="surface-container-low-to-surface-container" />
        <GeografiSection />
        <KontakSection />
      </main>
      <Footer />
    </>
  );
}

