import AboutMe from '@/app/components/AboutMe';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

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