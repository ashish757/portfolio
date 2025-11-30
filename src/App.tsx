import { AnimatePresence } from 'framer-motion';
import { useScrollSection } from './hooks/useScrollSection';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import SectionNav from './components/common/SectionNav';
import './App.css';

const SECTIONS = ['Home', 'Projects', 'Skills', 'Activities', 'Contact'];

function App() {
  const { currentSection, direction, goToSection } = useScrollSection({
    totalSections: SECTIONS.length,
    threshold: 50,
  });

  const renderSection = () => {
    const props = { isActive: true, direction };

    switch (currentSection) {
      case 0:
        return <Hero key="hero" {...props} />;
      case 1:
        return <Projects key="projects" {...props} />;
      case 2:
        return <Skills key="skills" {...props} />;
      case 3:
        return <Activities key="activities" {...props} />;
      case 4:
        return <Contact key="contact" {...props} />;
      default:
        return <Hero key="hero" {...props} />;
    }
  };

  return (
    <main className="app">
      <SectionNav
        sections={SECTIONS}
        currentSection={currentSection}
        onSectionClick={goToSection}
      />
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </main>
  );
}

export default App;
