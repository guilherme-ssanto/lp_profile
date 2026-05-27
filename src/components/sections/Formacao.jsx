import { GraduationCap } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'

const EDUCATION = [
  {
    degree: 'Bacharelado em Estatística',
    institution: 'Universidade Federal Fluminense (UFF)',
    period: '2021 – 2025',
    status: 'completed',
    statusLabel: 'Concluído',
    highlight: true,
  },
  {
    degree: 'Bacharelado em Administração',
    institution: 'Faculdades Metropolitanas Unidas (FMU)',
    period: '2018 – 2020',
    status: 'paused',
    statusLabel: 'Trancado',
    highlight: false,
  },
]

export default function Formacao() {
  const { ref, visible } = useReveal()

  return (
    <section id="formacao" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading">Formação Acadêmica</h2>
          <p className="section-subheading">Base teórica sólida para decisões orientadas a dados</p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className={`bg-bg-primary rounded-xl border p-6 transition-colors ${
                  edu.highlight ? 'border-accent-green/50 hover:border-accent-green' : 'border-border-color hover:border-text-muted'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <GraduationCap
                    size={24}
                    className={edu.highlight ? 'text-accent-green' : 'text-text-muted'}
                  />
                  <span
                    className={`font-mono text-xs rounded-full px-3 py-1 border ${
                      edu.status === 'completed'
                        ? 'bg-accent-green/10 text-accent-green border-accent-green/30'
                        : 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30'
                    }`}
                  >
                    {edu.statusLabel}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-text-primary mb-1">{edu.degree}</h3>
                <p className="text-text-muted text-sm mb-2">{edu.institution}</p>
                <p className="font-mono text-xs text-text-muted">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
