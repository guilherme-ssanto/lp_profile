import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-color bg-bg-secondary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {year} Guilherme Santos — feito com React + Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/guilherme-ssanto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent-green transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/guilherme-santos-07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent-green transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:guilhermesantossilva@outlook.com.br"
            aria-label="Email"
            className="text-text-muted hover:text-accent-green transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
