import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ClientComponent';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 py-3 px-6 flex justify-between items-center z-10 bg-stone-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl font-bold text-white"
      >
        KILLIAN TAYLOR<span className="text-accent">AUDIO</span>
      </motion.div>
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <motion.ul
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`lg:flex space-y-4 lg:space-y-0 lg:space-x-6 ${menuOpen ? 'block' : 'hidden'} absolute lg:relative top-full left-0 right-0 bg-stone-900 lg:bg-transparent p-4 lg:p-0`}
      >
        {(['home', 'portfolio', 'services', 'bookings', 'about'] as const).map((item) => (
          <li key={item} className="cursor-pointer">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`uppercase text-sm ${activeSection === item ? 'text-accent' : 'text-gray-300'}`}
              onClick={() => {
                setActiveSection(item);
                setMenuOpen(false);
              }}
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