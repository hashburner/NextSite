import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ClientComponent';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: Section[] = ['home', 'portfolio', 'services', 'bookings', 'about'];

  return (
    <nav className="fixed top-0 left-0 right-0 py-3 px-6 flex justify-between items-center z-10 white bg-opacity-20 backdrop-filter backdrop-blur-lgl">
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
        {navItems.map((item) => (
          <li key={item} className="cursor-pointer relative overflow-hidden">
            <motion.button
              className={`uppercase text-sm ${activeSection === item ? 'text-accent' : 'text-gray-300'} relative z-10`}
              onClick={() => {
                setActiveSection(item);
                setMenuOpen(false);
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === item ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-gradient2 opacity-0 mix-blend-overlay blur-sm"
              whileHover={{
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            />
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Header;