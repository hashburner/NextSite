import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ClientComponent';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [showDetails, setShowDetails] = useState(false);

  const sections: Section[] = ['portfolio', 'services', 'bookings', 'about'];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/hero.png')"}}></div>
      <div className="relative z-20 text-center">
        <AnimatePresence>
          {!showDetails && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <motion.h1
                className="text-7xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                KILLIAN TAYLOR
              </motion.h1>
              <motion.h2
                className="text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <span className="text-accent">SOUND ENGINEER</span>
              </motion.h2>
              <motion.button
                onClick={() => setShowDetails(true)}
                className="bg-accent text-white px-6 py-2 rounded hover:bg-accentdark transition-colors duration-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                EXPLORE
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className="bg-accent text-white px-6 py-3 rounded-lg text-xl font-bold uppercase hover:bg-accentdark transition-colors duration-200 animate-fade-up animate-once animate-duration-[800ms] animate-delay-[400ms] animate-ease-in-out animate-normal animate-fill-both"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  {section}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;