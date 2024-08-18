import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ClientComponent';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/hero.png')"}}></div>
      <div className="relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-7xl font-bold mb-4 text-white"
        >
          KILLIAN TAYLOR
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl font-bold mb-8"
        >
          <span className="text-accent">SOUND ENGINEER</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button 
            onClick={() => setActiveSection('bookings')}
            className="bg-accent text-white px-6 py-2 rounded hover:bg-accentdark transition-colors duration-200"
          >
            BOOK NOW
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;