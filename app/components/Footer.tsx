import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-2 px-6 flex justify-center space-x-6">
      {['Twitter', 'Instagram', 'YouTube'].map((platform, index) => (
        <motion.a
          key={platform}
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          className="text-white hover:text-accent transition-colors duration-300"
        >
          {platform}
        </motion.a>
      ))}
    </footer>
  );
};

export default Footer;