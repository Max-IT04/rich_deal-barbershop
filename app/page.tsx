import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Services id="services" />
      <Portfolio id="portfolio" />
      <About id="about" />
      <Contacts id="contacts" />
      <Footer />
      <ScrollToTop />
    </main>
  );
}