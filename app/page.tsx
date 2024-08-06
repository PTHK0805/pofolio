import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 bg-gradient-to-b from-sky-100 to-cyan-100">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
