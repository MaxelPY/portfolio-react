import Section from "./Section"
import ProjectItem from "./ProjectItem"

function Projects({ projects }) {
  return (
    <Section id="projects" title="Proyectos">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
