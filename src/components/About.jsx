import Section from "./Section"

function About({ user }) {
  return (
    <Section id="about" title="Sobre mí">
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Rol:</strong> {user.role}</p>
      <p>{user.description}</p>
    </Section>
  )
}

export default About
