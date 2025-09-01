import Navigation from './components/Navigation';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Section from './components/Section';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Section id="about" className="bg-neutral-50">
          <About />
        </Section>
        <Section id="projects" className="bg-white">
          <Projects />
        </Section>
        <Section id="skills" className="bg-neutral-50">
          <Skills />
        </Section>
        <Section id="contact" className="bg-white">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
