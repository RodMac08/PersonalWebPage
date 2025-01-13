import "@fontsource/montserrat"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import SoftSkillsAndHobbies from "./components/SoftSkillsAndHobbies"
import TechnicalSkills from "./components/TechnicalSkills"
import Footer from "./components/Footer"

function App() {
  return( 
  <div className="bg-secundary overflow-x-hidden">
    <Header />
    <Hero/>
    <Experiences />
    <Projects />
    <SoftSkillsAndHobbies />
    <TechnicalSkills />
    <Footer />
  </div>
  )
}

export default App
