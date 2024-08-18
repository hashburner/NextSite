import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Section } from './../ClientComponent';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [showDetails, setShowDetails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleControls = useAnimation();
  const contentControls = useAnimation();

  const sections: Section[] = ['portfolio', 'services', 'bookings', 'about'];

  const animateIn = async () => {
    await titleControls.start({
      top: "15%",
      scale: 0.7,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
    await contentControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
    setShowDetails(true);
  };

  const animateOut = async () => {
    await contentControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
    await titleControls.start({
      top: "50%",
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
    setShowDetails(false);
  };

  useEffect(() => {
    let isAnimating = false;
    const handleWheel = async (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;
      
      isAnimating = true;
      if (e.deltaY > 0 && !showDetails) {
        await animateIn();
      } else if (e.deltaY < 0 && showDetails) {
        await animateOut();
      }
      isAnimating = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [showDetails]);

  return (
    <div ref={containerRef} className="relative h-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{
             backgroundImage: "url('/images/hero.png')", 
             backgroundPosition: "center 65%",
             transform: "scale(1.1)"
           }} />
      <motion.div
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={titleControls}
        className="absolute z-10 text-center w-full"
      >
        <h1 className="text-7xl font-bold mb-2 text-white">KILLIAN TAYLOR</h1>
        <h2 className="text-5xl font-bold">
          <span className="text-accent">SOUND ENGINEER</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={contentControls}
        className="absolute top-1/4 left-0 right-0 z-20 flex flex-col items-center px-4 max-w-7xl mx-auto"
      >
        <div className="w-2/3 text-center mb-12">
          <h3 className="text-4xl font-bold text-accent mb-6">Elevate Your Sound</h3>
          <p className="text-2xl text-white">
            With over a decade of experience in the music industry, Killian Taylor brings unparalleled expertise to every project. From intimate acoustic sessions to full-scale productions, your sound is in masterful hands.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-8">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className="relative px-8 py-4 rounded-full text-2xl font-bold uppercase overflow-hidden"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                background: 'linear-gradient(45deg, #1a1a1a, #3a3a3a)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient background animation */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                  opacity: 0
                }}
                whileHover={{
                  opacity: 0.6,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-10"
                style={{ mixBlendMode: 'overlay' }}
                initial={{ width: '100%', x: '-100%' }}
                whileHover={{
                  x: '100%',
                  transition: { repeat: Infinity, duration: 1, ease: 'linear' }
                }}
              />
              
              {/* Button text with gradient */}
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 animate-gradient-x">
                {section}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;