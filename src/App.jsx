import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Timeline from './components/sections/Timeline';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

function App() {
  // Dark mode por defecto siempre
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
