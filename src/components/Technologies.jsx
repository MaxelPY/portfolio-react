import Section from "./Section"
import Card from "./card"
import Chip from "./Chip"

function Technologies({ technologies }) {
  return (
    <Section id="technologies" title="Tecnologías">
      <Card>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </Card>
    </Section>
  )
}

export default Technologies
