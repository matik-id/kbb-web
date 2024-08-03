import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import HeroSlide from "@/components/HeroSlide";
import Navbar from "@/components/Navbar";
import RunningText from "@/components/RunningText";

export default function Home() {
  return (
    <main className="mx-auto bg">
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]">
        <Navbar />
      </nav>
      <RunningText />
      <HeroSlide />
      <Destinations />
      <Donation />
      <Banner />
      <Footer />
    </main>
  );
}
