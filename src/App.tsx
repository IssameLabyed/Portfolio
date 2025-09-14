import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="scanline"></div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <SkillsGrid />
              <ProjectsGrid />
              <ContactForm />
              <Footer />
            </motion.div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;