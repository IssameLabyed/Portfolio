import { motion } from 'framer-motion';
// import { motion, useAnimation } from 'framer-motion';
// import { ArrowDownIcon } from '@heroicons/react/24/outline';
import profileImage from '../data/images/1.jpg';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [showLanguageButtons, setShowLanguageButtons] = useState(false);
  // const controls = useAnimation();

  const handleDownloadCV = () => {
    console.log('Toggling showLanguageButtons to:', !showLanguageButtons);
    setShowLanguageButtons(!showLanguageButtons);
  //   if (!showLanguageButtons) {
  //     controls.start({ opacity: 1, y: 0 });
  //   } else {
  //     controls.start({ opacity: 0, y: 20 });
  //     setTimeout(() => setShowLanguageButtons(false), 300);
  //   }
  };
  const handleFrenchCV = () => {
    window.open('https://drive.google.com/file/d/1J3Co1HZfGEvT5laA0lPpS4xYXpHJTtAV/view?usp=sharing', '_blank'); // Replace with French CV URL
  };

  const handleEnglishCV = () => {
    window.open('https://drive.google.com/file/d/161g1tQfc1eqyTOTGPoBTRxEG8gixxaLe/view?usp=sharing', '_blank'); // Replace with English CV URL
  };
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
        <div className="flex flex-col items-center gap-4" style={{ zIndex: 30 }}> 
        <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px #000000' }}
        className="bg-vapor-purple text-white px-8 py-4 rounded pixel-border font-orbitron"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
        Explore Projects
      </motion.button>
      <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #000000' }}
          // href="https://google.com/your-cv.pdf" 
          onClick={handleDownloadCV}
          // rel="noopener noreferrer"
          className="bg-vapor-purple text-white px-8 py-4 rounded pixel-border font-orbitron"
        >
          Download CV
        </motion.button>
        {showLanguageButtons && (
            <div className="flex flex-col items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #000000' }}
                className="bg-vapor-pink text-white px-8 py-4 rounded pixel-border font-orbitron hover:bg-vapor-purple transition-colors"
                onClick={handleFrenchCV}
              >
                Télécharger CV (Français)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #000000' }}
                className="bg-vapor-pink text-white px-8 py-4 rounded pixel-border font-orbitron hover:bg-vapor-purple transition-colors"
                onClick={handleEnglishCV}
              >
                Download CV (English)
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
      {/* <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <ArrowDownIcon className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-8 w-8 text-white animate-bounce" /> */}
    </section>
  );
};

export default Hero;
