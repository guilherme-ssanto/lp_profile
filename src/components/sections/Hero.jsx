import { useEffect, useState } from 'react'
import { Github, Linkedin, MapPin, ChevronDown } from 'lucide-react'

const TITLES = [
  'Analista de Dados Sênior',
  'Especialista em Integrações',
  'Automação & APIs',
]

function useTypewriter(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIndex((i) => i + 1)
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setTextIndex((i) => (i + 1) % texts.length)
          setCharIndex(0)
        } else {
          setCharIndex((i) => i - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts, speed, pause])

  return display
}

export default function Hero() {
  const title = useTypewriter(TITLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle, #30363D 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Gradient overlay para suavizar o grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-text-muted text-sm mb-4 bg-bg-secondary border border-border-color rounded-full px-4 py-1.5">
              <MapPin size={14} className="text-accent-green" />
              São Paulo, Brasil 🇧🇷
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-3">
              Guilherme Santos
            </h1>

            <p className="font-mono text-accent-green text-lg sm:text-xl min-h-[2rem] mb-6">
              {title}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Conecto sistemas, automatizo rotinas e transformo dados em decisões.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-accent-green text-bg-primary font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-mono text-sm"
              >
                Ver Projetos
              </a>
              <a
                href="https://linkedin.com/in/guilherme-santos-07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border-color text-text-primary px-6 py-3 rounded-lg hover:border-accent-blue hover:text-accent-blue transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/guilherme-ssanto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-muted hover:text-accent-green transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/guilherme-santos-07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-accent-green transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right — avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-accent-green/40 p-1 bg-bg-secondary">
                <img
                  src="https://avatars.githubusercontent.com/guilherme-ssanto"
                  alt="Guilherme Santos"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback initials */}
                <div
                  className="hidden w-full h-full rounded-full bg-gradient-to-br from-accent-green/20 to-accent-blue/20 items-center justify-center"
                >
                  <span className="font-heading text-5xl font-bold text-accent-green">GS</span>
                </div>
              </div>
              {/* Accent ring decoration */}
              <div className="absolute -inset-3 rounded-full border border-accent-green/20 animate-pulse pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted animate-bounce">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  )
}
