import Hero from '@/app/_pages/Hero';
import Skills from '@/app/_pages/Skills';
import Projects from '@/app/_pages/Projects';
import Contact from '@/app/_pages/Contact';
import Footer from '@/app/_pages/Footer';
import Navbar from '@/app/_components/Navbar';
import AboutMe from "@/app/_pages/AboutMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="transition-all duration-500 mx-auto bg-gradient-to-b from-slate-100 to-slate-20 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <section id="hero">
          <Hero/>
        </section>
        <section id="about">
          <AboutMe/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
      <Footer/>
    </>
  );
}