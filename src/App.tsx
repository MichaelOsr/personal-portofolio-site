import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Hero from "./pages/Hero"
import Navbar from "./pages/NavBar"
import Portfolio from "./pages/Portofolio"
import Skills from "./pages/Skills"
import Testimonials from "./pages/Testimonials"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App