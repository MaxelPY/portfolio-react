import Layout from "./components/layout"
import Hero from "./components/hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { portfolio } from "./data/portfolio"
import "./index.css"
import Technologies from "./components/Technologies"


import me from "./assets/me.jpg"


function App() {
  return (
    <Layout>
      <Hero user={portfolio.user} photoSrc={me}/>
      <About user={portfolio.user} />
      <Technologies technologies={portfolio.technologies} />
      <Projects projects={portfolio.projects} />
      <Contact contact={portfolio.contact} />
    </Layout>
  )
}

export default App
