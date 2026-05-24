import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <TechStack />
      <Services />
      <About />
      <Projects limit={3} />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
