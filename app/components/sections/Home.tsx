'use client';

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

  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0px 0px 8px rgb(255, 107, 107, 0.5)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 20px rgb(255, 107, 107, 0.8)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      }
    },
    tap: { scale: 0.95, boxShadow: "0px 0px 0px rgb(255, 107, 107, 0)" }
  };

  const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
    <motion.span 
      className={`bg-clip-text text-transparent bg-gradient-to-r from-accent to-gradient2 ${className}`}
      animate={{
        backgroundPosition: ['0%', '100%', '0%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {text}
    </motion.span>
  );

  return (
    <div ref={containerRef} className="relative h-full overflow-hidden">
      <motion.div
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={titleControls}
        className="absolute z-10 text-center w-full"
      >
        <h1 className="text-7xl font-bold mb-2 text-white">KILLIAN TAYLOR</h1>
        <h2 className="text-5xl font-bold">
          <AnimatedText text="SOUND ENGINEER" />
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={contentControls}
        className="absolute top-1/4 left-0 right-0 z-20 flex flex-col items-center px-4 max-w-7xl mx-auto"
      >
        <div className="w-2/3 text-center mb-12">
          <h3 className="text-4xl font-bold mb-6">
            <AnimatedText text="Elevate Your Sound" />
          </h3>
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
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-gradient2"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-background opacity-90"
                whileHover={{ opacity: 0.7 }}
              />
              <AnimatedText text={section} className="relative z-10" />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;