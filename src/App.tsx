import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SkillsGrid from './components/SkillsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import ContactForm from './components/ContactForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [isOpen, setIsOpen] = useState(false); // Add state for mobile menu

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <div className="scanline"></div>
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <section id="home"><Hero /></section>
        <section id="skills"><SkillsGrid /></section>
        <section id="projects"><ProjectsGrid /></section>
        <section id="contact"><ContactForm /></section>
      </main>
    </div>
  );
}

export default App;