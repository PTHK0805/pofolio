import AboutMe from '@/app/_pages/AboutMe';
import Skills from '@/app/_pages/Skills';
import Projects from '@/app/_pages/Projects';
import Contact from '@/app/_pages/Contact';
import Footer from '@/app/_pages/Footer';
import Navbar from '@/app/_components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="mx-auto px-4 py-8 bg-gradient-to-b from-sky-100 via-blue-200 to-cyan-100 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-300">
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