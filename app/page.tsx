import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import UtilityActions from "./components/UtilityActions"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 bg-gradient-to-b from-sky-100 via-blue-200 to-cyan-100 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-300">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <UtilityActions />
    </main>
  )
}
