import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'

// Decisão do Guilherme: mudar para true para exibir o telefone
const SHOW_PHONE = false

const LINKS = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'guilhermesantossilva@outlook.com.br',
    href: 'mailto:guilhermesantossilva@outlook.com.br',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'guilherme-santos-07',
    href: 'https://linkedin.com/in/guilherme-santos-07',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'guilherme-ssanto',
    href: 'https://github.com/guilherme-ssanto',
    external: true,
  },
  ...(SHOW_PHONE
    ? [{ icon: Phone, label: 'Telefone', value: '(11) 97038-5396', href: 'tel:+5511970385396' }]
    : []),
]

export default function Contato() {
  const { ref, visible } = useReveal()

  return (
    <section id="contato" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading">Vamos conversar?</h2>
          <p className="text-text-muted text-lg mb-10">
            Aberto a novas oportunidades, projetos e colaborações.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            {LINKS.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-3 bg-bg-primary border border-border-color hover:border-accent-green hover:text-accent-green text-text-muted px-6 py-4 rounded-xl transition-all text-sm group"
              >
                <Icon size={18} className="flex-shrink-0 group-hover:text-accent-green transition-colors" />
                <div className="text-left">
                  <div className="font-mono text-xs text-text-muted mb-0.5">{label}</div>
                  <div className="font-medium text-text-primary group-hover:text-accent-green transition-colors text-sm">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
