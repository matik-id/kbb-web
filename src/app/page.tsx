import HeroSlide from "@/components/HeroSlide";
import Navbar from "@/components/Navbar";
import RunningText from "@/components/RunningText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto">
      <Navbar />
      <RunningText />
      <HeroSlide />
    </main>
  );
}
