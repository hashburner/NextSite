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
      top: "5%",
      scale: 0.8,
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
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/hero.png')"}} />
      <motion.div
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={titleControls}
        className="absolute z-10 text-center w-full"
      >
        <h1 className="text-7xl font-bold mb-4 text-white">KILLIAN TAYLOR</h1>
        <h2 className="text-5xl font-bold">
          <span className="text-accent">SOUND ENGINEER</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={contentControls}
        className="absolute top-1/3 left-0 right-0 z-20 flex justify-between items-start px-4 max-w-6xl mx-auto"
      >
        <div className="w-1/2 pr-8">
          <h3 className="text-3xl font-bold text-accent mb-4">Elevate Your Sound</h3>
          <p className="text-xl text-white">
            With over a decade of experience in the music industry, Killian Taylor brings unparalleled expertise to every project. From intimate acoustic sessions to full-scale productions, your sound is in masterful hands.
          </p>
        </div>
        <div className="w-1/2 flex flex-col space-y-4">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className="bg-accent text-white px-6 py-3 rounded-lg text-xl font-bold uppercase hover:bg-accentdark transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;