import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contacts />
    </main>
  );
}