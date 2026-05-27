import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'sobre',       label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'skills',      label: 'Skills' },
  { id: 'projetos',    label: 'Projetos' },
  { id: 'cursos',      label: 'Cursos' },
  { id: 'contato',     label: 'Contato' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const activeSection = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-sm border-b border-border-color">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="font-heading text-accent-green text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            GS
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-colors pb-1 ${
                    activeSection === id
                      ? 'text-accent-green border-b-2 border-accent-green'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-border-color px-4 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => { scrollTo(id); setMobileOpen(false) }}
                  className={`w-full text-left text-sm font-medium transition-colors ${
                    activeSection === id ? 'text-accent-green' : 'text-text-muted'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
