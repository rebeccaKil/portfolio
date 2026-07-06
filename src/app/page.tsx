import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Team />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
