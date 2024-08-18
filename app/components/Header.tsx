import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ClientComponent';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-stone-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl font-bold text-white"
      >
        KILLIAN TAYLOR<span className="text-accent">AUDIO</span>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex space-x-6"
      >
        {(['home', 'portfolio', 'services', 'bookings', 'about'] as const).map((item) => (
          <li key={item} className="cursor-pointer">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`uppercase ${activeSection === item ? 'text-accent' : 'text-gray-300'}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </motion.span>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Header;