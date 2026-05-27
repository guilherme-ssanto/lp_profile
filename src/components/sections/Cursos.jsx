import { Award } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { cursos } from '../../data/cursos'

export default function Cursos() {
  const { ref, visible } = useReveal()

  return (
    <section id="cursos" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading">Cursos & Certificações</h2>
          <p className="section-subheading">Aprendizado contínuo em dados e tecnologia</p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {cursos.map(({ name, platform }) => (
              <div
                key={name}
                className="flex items-start gap-3 bg-bg-secondary border border-border-color rounded-xl p-4 hover:border-accent-green/30 transition-colors"
              >
                <Award size={18} className="text-accent-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-primary text-sm font-medium">{name}</p>
                  <span className="font-mono text-xs text-text-muted">{platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
