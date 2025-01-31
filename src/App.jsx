import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import About from "./components/About";
import LinksParticles from "./components/LinksParticles"; // Pastikan LinksParticles digunakan

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased relative">
      {/* Links Particles Background */}
      <div className="fixed inset-0 -z-10">
        <LinksParticles />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
