import { ExternalLink } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { projects } from '../../data/projects'

function ProjectCard({ project }) {
  const isPlaceholder = project.title.startsWith('[')

  return (
    <div className="group bg-bg-secondary border border-border-color rounded-xl overflow-hidden hover:border-accent-green/50 hover:-translate-y-1 transition-all duration-300">
      {/* Image / gradient fallback */}
      <div className={`h-36 bg-gradient-to-br ${project.accentColor} flex items-center justify-center`}>
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex gap-2 opacity-40">
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} className="font-mono text-xs border border-accent-green/30 text-accent-green px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className={`font-heading font-bold mb-2 ${isPlaceholder ? 'text-yellow-400/70 italic text-sm' : 'text-text-primary'}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${isPlaceholder ? 'text-yellow-400/50 italic' : 'text-text-muted'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs bg-bg-primary border border-border-color text-text-muted rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${project.title} no GitHub`}
          className="inline-flex items-center gap-2 text-accent-green text-sm font-medium hover:opacity-80 transition-opacity font-mono"
        >
          Ver no GitHub
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  )
}

export default function Projetos() {
  const { ref, visible } = useReveal()

  return (
    <section id="projetos" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading">Projetos em Destaque</h2>
          <p className="section-subheading">Soluções reais de dados, integrações e automação</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/guilherme-ssanto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border-color text-text-muted px-6 py-3 rounded-lg hover:border-accent-green hover:text-accent-green transition-colors text-sm"
            >
              Ver todos os repositórios
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
