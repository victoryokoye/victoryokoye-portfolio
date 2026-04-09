
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <Projects/>
        <Services/>
        <About/>
        <Contact/>
      </main>
    </>
  );
}
