import Banner from "@/components/Banner";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSlide from "@/components/HeroSlide";
import Navbar from "@/components/Navbar";
import RunningText from "@/components/RunningText";
import Wisata from "@/components/Wisata";

export default function Home() {
  return (
    <main className="mx-auto">
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]">
        <Navbar />
      </nav>
      <RunningText />
      <HeroSlide />
      <Wisata />
      <Gallery />
      <Donation />
      <Banner />
      <Footer />
    </main>
  );
}
