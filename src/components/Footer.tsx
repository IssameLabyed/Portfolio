import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/80 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2025 Developer Portfolio. All rights reserved.</p>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 360 }}
          onClick={scrollToTop}
          className="bg-vapor-pink text-white p-3 rounded-full pixel-border"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;