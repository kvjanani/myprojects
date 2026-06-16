import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Card from "../components/Card";
 
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 md:px-16 lg:px-24">

      <Hero />

      <Skills />

      <Education />

      <Projects />

      <Contact />

    </main>
  );
}