import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import profileImage from '../data/images/1.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vapor-pink via-vapor-purple to-neon-blue relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.div
          className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 pixel-border"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {}
          <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-pixel mb-4 animate-glitch"
          style={{ textShadow: '0 0 10px #000000' }}
        >
          Software Developer
        </motion.h1>
        <p className="text-xl md:text-2xl font-orbitron mb-8 max-w-2xl mx-auto px-4">
        My name is Issame Labyed ,I am a software development student at 1337 Coding School (42 Network, UM6P) with a background in Multimedia Development from ISTA NTIC Rabat. Passionate about creating innovative projects and solving complex problems, I aim to grow my skills while contributing to meaningful work.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #ff69b4' }}
          className="bg-vapor-purple text-white px-8 py-4 rounded pixel-border font-orbitron"
        >
          <a href="#projects">Explore Projects</a>
        </motion.button>
      </motion.div>
      {}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <ArrowDownIcon className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-8 w-8 text-white animate-bounce" />
    </section>
  );
};

export default Hero;
