import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import DonationCard from "@/components/Donation";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import HeroSlide from "@/components/HeroSlide";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
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
      <Product />
      <DonationCard />
      <Product />
      <Banner />
      <Footer />
    </main>
  );
}
