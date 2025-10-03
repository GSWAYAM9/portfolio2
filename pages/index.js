import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
