import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120c08] text-[#fff6df]">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
