import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md dark:bg-gray-900/80 z-50 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-orbitron font-bold text-muted-green">
          DevPortfolio
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-vapor-purple transition-colors">Home</Link>
          <Link to="/skills" className="text-white hover:text-vapor-purple transition-colors">Skills</Link>
          <Link to="/projects" className="text-white hover:text-vapor-purple transition-colors">Projects</Link>
          <Link to="/contact" className="text-white hover:text-vapor-purple transition-colors">Contact</Link>
          <button onClick={toggleDarkMode} className="ml-4 p-2 rounded pixel-border">
            {darkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-gray-300" />}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-gray-800/90 px-4 py-2 space-y-2"
        >
          <Link to="/" className="text-white block hover:text-vapor-purple" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/skills" className="text-white block hover:text-vapor-purple" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" className="text-white block hover:text-vapor-purple" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="text-white block hover:text-vapor-purple" onClick={() => setIsOpen(false)}>Contact</Link>
          <button onClick={toggleDarkMode} className="block w-full text-left p-2">
            Toggle Theme
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;