import Card from "./card"
import Chip from "./Chip"
import LinkButton from "./LinkButton"

function ProjectItem({ project }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">
        {project.title}
      </h3>

      <p className="mt-2 text-sm text-slate-300">
        {project.description}
      </p>

      {/* Chips de tecnologías */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      {/* Botones */}
      <div className="mt-6 flex gap-3">
        {project.demoUrl && (
          <LinkButton href={project.demoUrl} variant="primary">
            Demo
          </LinkButton>
        )}

        {project.codeUrl && (
          <LinkButton href={project.codeUrl} variant="secondary">
            Código
          </LinkButton>
        )}
      </div>
    </Card>
  )
}

export default ProjectItem
