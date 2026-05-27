import { Star, Trophy } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { tm1Roles, tm1Responsibilities, tm1Tags, otherExperiences } from '../../data/experience'

function Tag({ label }) {
  return (
    <span className="font-mono text-xs bg-bg-primary border border-border-color text-text-muted rounded px-2 py-0.5">
      {label}
    </span>
  )
}

function TM1Block() {
  return (
    <div className="relative border border-accent-green rounded-xl p-6 bg-bg-secondary/60">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <h3 className="font-heading text-xl font-bold text-text-primary">TM1 Brand Experience</h3>
          <p className="text-text-muted text-sm mt-0.5">5 anos e 4 meses · São Paulo, SP</p>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start bg-accent-green/10 text-accent-green border border-accent-green/30 rounded-full px-3 py-1 font-mono text-xs whitespace-nowrap">
          <Trophy size={12} />
          3 promoções em 5 anos
        </span>
      </div>

      {/* Roles */}
      <div className="space-y-4 mb-5">
        {tm1Roles.map((r) => (
          <div key={r.role} className="flex items-start gap-3">
            <div className={`mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0 ${r.level === 'sr' ? 'bg-accent-green' : 'bg-border-color'}`} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`font-medium text-sm ${r.level === 'sr' ? 'text-text-primary' : 'text-text-muted'}`}>
                  {r.role}
                </span>
                {r.level === 'sr' && <Star size={14} className="fill-yellow-400 text-yellow-400" />}
                {r.badge && (
                  <span className="font-mono text-xs bg-accent-green/10 text-accent-green border border-accent-green/30 rounded px-2 py-0.5">
                    {r.badge}
                  </span>
                )}
              </div>
              <p className="text-text-muted text-xs mt-0.5">{r.period} · {r.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsibilities */}
      <details className="group mb-5">
        <summary className="cursor-pointer text-sm text-accent-green hover:opacity-80 transition-opacity list-none flex items-center gap-1 select-none">
          <span className="group-open:hidden">▶ Ver responsabilidades</span>
          <span className="hidden group-open:inline">▼ Ocultar responsabilidades</span>
        </summary>
        <ul className="mt-3 space-y-1.5 pl-3 border-l border-border-color">
          {tm1Responsibilities.map((item) => (
            <li key={item} className="text-text-muted text-sm before:content-['–'] before:mr-2">
              {item}
            </li>
          ))}
        </ul>
      </details>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tm1Tags.map((t) => <Tag key={t} label={t} />)}
      </div>
    </div>
  )
}

function OtherEntry({ exp }) {
  return (
    <div className="relative pl-8 border-l-2 border-border-color pb-8 last:pb-0">
      {/* Dot */}
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-bg-primary border-2 border-border-color" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="font-medium text-text-primary text-sm">
            {exp.company}
            {exp.note && (
              <span className="ml-2 font-mono text-xs bg-accent-blue/10 text-accent-blue border border-accent-blue/30 rounded px-2 py-0.5">
                {exp.note}
              </span>
            )}
          </h3>
          <p className="text-text-muted text-sm">{exp.role}</p>
        </div>
        <p className="text-text-muted text-xs whitespace-nowrap">{exp.period} · {exp.duration}</p>
      </div>

      <p className={`text-sm leading-relaxed mb-3 ${exp.description.startsWith('[') ? 'text-yellow-400/70 italic' : 'text-text-muted'}`}>
        {exp.description}
      </p>

      {exp.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      )}
    </div>
  )
}

export default function Experiencia() {
  const { ref, visible } = useReveal()

  return (
    <section id="experiencia" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading">Experiência Profissional</h2>
          <p className="section-subheading">Trajetória de crescimento contínuo em dados e automação</p>

          <div className="space-y-8">
            <TM1Block />
            <div className="pt-4">
              {otherExperiences.map((exp) => (
                <OtherEntry key={exp.company} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
