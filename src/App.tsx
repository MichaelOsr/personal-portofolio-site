import About from "./pages/About"
import Experience from "./pages/Experience"
import Hero from "./pages/Hero"
import Navbar from "./pages/NavBar"
import Portfolio from "./pages/Portofolio"
import Skills from "./pages/Skills"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
    </div>
  )
}

export default App