import { useReveal } from '../../hooks/useReveal'
import { skillCategories } from '../../data/skills'

function SkillIcon({ skill }) {
  if (skill.deviconClass) {
    return (
      <div className="group/item relative flex flex-col items-center gap-2">
        <i
          className={`${skill.deviconClass} colored text-4xl transition-transform group-hover/item:scale-110`}
          aria-label={skill.name}
        />
        <span className="text-text-muted text-xs text-center leading-tight">{skill.name}</span>
        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg-primary border border-border-color rounded px-2 py-1 font-mono text-xs text-accent-green whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-10">
          {skill.level}
        </div>
      </div>
    )
  }

  return (
    <div className="group/item relative flex flex-col items-center gap-2">
      <div className="w-10 h-10 flex items-center justify-center bg-bg-secondary border border-border-color rounded-lg transition-all group-hover/item:border-accent-green/50 group-hover/item:scale-110">
        <span className="font-mono text-xs font-bold text-accent-green">{skill.textFallback}</span>
      </div>
      <span className="text-text-muted text-xs text-center leading-tight">{skill.name}</span>
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg-primary border border-border-color rounded px-2 py-1 font-mono text-xs text-accent-green whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-10">
        {skill.level}
      </div>
    </div>
  )
}

function CategoryBlock({ category, skills }) {
  return (
    <div className="bg-bg-secondary border border-border-color rounded-xl p-5 hover:border-border-color/80 transition-colors">
      <h3 className="font-mono text-xs text-accent-green mb-4 uppercase tracking-wider">{category}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading">Stack Técnica</h2>
          <p className="section-subheading">Ferramentas e tecnologias do dia a dia</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map(({ category, skills }) => (
              <CategoryBlock key={category} category={category} skills={skills} />
            ))}
          </div>

          {/* Languages */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-text-muted text-sm">Idiomas:</span>
            <span className="font-mono text-xs bg-bg-secondary border border-border-color rounded-full px-3 py-1 text-text-muted">
              🇧🇷 Português — Nativo
            </span>
            <span className="font-mono text-xs bg-bg-secondary border border-border-color rounded-full px-3 py-1 text-text-muted">
              🇺🇸 Inglês — Básico
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
