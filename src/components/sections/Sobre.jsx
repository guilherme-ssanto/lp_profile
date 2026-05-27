import { MapPin, GraduationCap, Rocket, Zap } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'

const BADGES = [
  { icon: MapPin,         label: 'São Paulo, Brasil' },
  { icon: GraduationCap, label: 'Estatística — UFF (2025)' },
  { icon: Rocket,         label: '5 anos na TM1' },
  { icon: Zap,            label: 'Automação & Integrações' },
]

export default function Sobre() {
  const { ref, visible } = useReveal()

  return (
    <section id="sobre" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border-2 border-border-color overflow-hidden bg-bg-primary">
                <img
                  src="https://avatars.githubusercontent.com/guilherme-ssanto"
                  alt="Guilherme Santos"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-accent-green/20 to-accent-blue/20 items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-accent-green">GS</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent-green/10 border border-accent-green/30 rounded-lg px-3 py-1.5">
                <span className="font-mono text-accent-green text-xs">Sr. Data Analyst</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="section-heading">Sobre Mim</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Sou Analista de Dados Sênior na TM1, onde comecei como Jr. em 2021 e cresci até a
              posição Sênior ao longo de 5 anos. Sou Bacharel em Estatística pela UFF e
              especializo em conectar sistemas, automatizar processos e entregar dados de forma
              eficiente — do pipeline à visualização.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Trabalho com Google Apps Script, Python, APIs REST, Pipefy, SQL e Google Sheets no
              dia a dia, combinando base estatística sólida com visão prática de automação e
              integração de sistemas.
            </p>

            <div className="flex flex-wrap gap-3">
              {BADGES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-bg-primary border border-border-color rounded-full px-4 py-2 text-sm text-text-muted hover:border-accent-green/50 hover:text-text-primary transition-colors"
                >
                  <Icon size={14} className="text-accent-green" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
