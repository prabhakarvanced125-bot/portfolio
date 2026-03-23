import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ParticlesBg from './components/ParticlesBg'

export default function App() {
  return (
    <ThemeProvider>
      <ParticlesBg />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </ThemeProvider>
  )
}
