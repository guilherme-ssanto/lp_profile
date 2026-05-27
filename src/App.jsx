import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Sobre from './components/sections/Sobre'
import Experiencia from './components/sections/Experiencia'
import Formacao from './components/sections/Formacao'
import Skills from './components/sections/Skills'
import Projetos from './components/sections/Projetos'
import Cursos from './components/sections/Cursos'
import Contato from './components/sections/Contato'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Formacao />
        <Skills />
        <Projetos />
        <Cursos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
