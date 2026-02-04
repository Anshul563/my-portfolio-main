import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col gap-10">
      <Hero />
      <About />
      <Skills />
      <Projects limit={3} />
      <Contact />
    </main>
  );
}
