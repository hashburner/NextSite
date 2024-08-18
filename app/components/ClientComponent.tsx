'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Bookings from './sections/Bookings';
import About from './sections/About';
import AnimatedBackground from './AnimatedBackground';

export type Section = 'home' | 'portfolio' | 'services' | 'bookings' | 'about';

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.2 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const ClientComponent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'portfolio': return <Portfolio />;
      case 'services': return <Services />;
      case 'bookings': return <Bookings />;
      case 'about': return <About />;
    }
  };

  return (
    <div className="bg-background text-text h-screen flex flex-col font-sans overflow-hidden">
      <AnimatedBackground />
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, loop: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-t-2 border-accent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <>
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />

          <AnimatePresence mode="wait">
            <motion.main
              key={activeSection}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="flex-grow overflow-hidden"
            >
              {renderSection()}
            </motion.main>
          </AnimatePresence>

          <Footer />
        </>
      )}
    </div>
  );
};

export default ClientComponent;