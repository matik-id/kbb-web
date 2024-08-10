import Banner from "@/components/Banner";
import CardDonate from "@/components/CardDonate";
import Destinations from "@/components/Destinations";
import DonationCard from "@/components/Donation";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
      <Hero />
      <Destinations />
      <Product />
      <CardDonate />
      
      <Footer />
    </main>
  );
}
