'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Section } from '../../components/ClientComponent';
import { FaTwitter, FaInstagram, FaLinkedin, FaSoundcloud } from 'react-icons/fa';
import { BsMusicNote, BsMusicNoteList, BsCalendarCheck, BsArrowRight, BsChevronDown } from 'react-icons/bs';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const sections: { name: Section; icon: React.ElementType }[] = [
    { name: 'portfolio', icon: BsMusicNote },
    { name: 'services', icon: BsMusicNoteList },
    { name: 'bookings', icon: BsCalendarCheck }
  ];

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/killiantaylor' },
    { icon: FaInstagram, url: 'https://instagram.com/killiantayloraudio' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/killiantaylor' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/killiantaylor' },
  ];

  const featuredWorks = [
    { title: "What Was the Question?", artist: "Curtisy", image: "/images/placeholder_artwork_1.jpg" },
    { title: "Four Winds Echo On The Stave", artist: "Leon McMahon", image: "/images/placeholder_artwork_2.jpg" },
    { title: "Weed Addict", artist: "Peer Pleasure", image: "/images/Weed%20Addict_album_cover.jpg" },
  ];

  useEffect(() => {
    const handleWheel = async (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      
      setIsScrolling(true);
      if (e.deltaY > 0 && currentSection < 2) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      setTimeout(() => setIsScrolling(false), 250);
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
  }, [currentSection, isScrolling]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isScrolling) {
      if (touchStart - touchEnd > 50 && currentSection < 2) {
        setCurrentSection(prev => prev + 1);
      }
      if (touchStart - touchEnd < -50 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    }
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 250);
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  }, [currentSection, controls]);

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

  const ArrowDown: React.FC = () => (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <BsChevronDown className="text-accent text-3xl" />
    </motion.div>
  );

  // Animation speed variables
  const cardAnimationSpeed = 0.50; // in seconds
  const textAnimationSpeed = 0.35; // in seconds

  return (
    <div 
      ref={containerRef} 
      className="relative h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main title section */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: currentSection === 0 ? 1 : 0,
          y: currentSection === 0 ? 0 : -50,
        }}
        transition={{ duration: cardAnimationSpeed, delay: 0.3, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <motion.h1 
          className="text-7xl font-bold mb-2 text-white"
          animate={{ 
            opacity: currentSection === 0 ? 1 : 0,
            y: currentSection === 0 ? 0 : -30,
          }}
          transition={{ duration: textAnimationSpeed, ease: "easeInOut" }}
        >
          KILLIAN TAYLOR
        </motion.h1>
        <motion.h2 
          className="text-5xl font-bold mb-8"
          animate={{ 
            opacity: currentSection === 0 ? 1 : 0,
            y: currentSection === 0 ? 0 : -20,
          }}
          transition={{ duration: textAnimationSpeed, delay: 0.2, ease: "easeInOut" }}
        >
          <AnimatedText text="SOUND ENGINEER" />
          
        </motion.h2>
        <br />
        <br />
        <ArrowDown />
      </motion.div>

      {/* About Card */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ 
          opacity: currentSection === 1 ? 1 : 0, 
          y: currentSection === 1 ? 0 : '100%' 
        }}
        transition={{ duration: cardAnimationSpeed, delay: 0.5, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-[85vw] h-[75vh] bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSection === 1 ? 1 : 0 }}
          transition={{ duration: textAnimationSpeed, delay: cardAnimationSpeed * 0.2 }}
        >
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle, #4a00e0 0%, #8e2de2 100%)',
                'radial-gradient(circle, #8e2de2 0%, #4a00e0 100%)',
                'radial-gradient(circle, #4a00e0 0%, #8e2de2 100%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center h-full">
            <motion.div 
              className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-12 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
               <img
                src="/images/me.jpg"
                alt="Killian Taylor"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex-1 text-white">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-4 text-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Killian Taylor
              </motion.h2>
              <motion.h3 
                className="text-xl md:text-3xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.span
                  animate={{
                    color: ['#4a00e0', '#8e2de2', '#4a00e0'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Sound Engineer & Producer
                </motion.span>
              </motion.h3>
              <motion.p 
                className="text-base md:text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                With over a decade of experience in crafting sonic masterpieces, I bring unparalleled expertise to every project. From intimate acoustic sessions to full-scale productions, your sound is in masterful hands.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {sections.map((section) => (
                  <motion.button
                    key={section.name}
                    onClick={() => setActiveSection(section.name)}
                    className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gradient2 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <section.icon size={20} />
                    <span>{section.name.charAt(0).toUpperCase() + section.name.slice(1)}</span>
                  </motion.button>
                ))}
              </motion.div>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-gradient2 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon size={32} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
          <ArrowDown />
        </motion.div>
      </motion.div>

      {/* Featured Works Card */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ 
          opacity: currentSection === 2 ? 1 : 0, 
          y: currentSection === 2 ? 0 : '100%' 
        }}
        transition={{ duration: cardAnimationSpeed, delay: 0.3, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-[85vw] h-[75vh] bg-gradient-to-br from-gray-800 to-black rounded-3xl p-8 shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSection === 2 ? 1 : 0 }}
          transition={{ duration: textAnimationSpeed, delay: cardAnimationSpeed * 0.2 }}
        >
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle, #ff4d4d 0%, #f9cb28 100%)',
                'radial-gradient(circle, #f9cb28 0%, #ff4d4d 100%)',
                'radial-gradient(circle, #ff4d4d 0%, #f9cb28 100%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="relative z-10 flex flex-col h-full justify-center items-center">
            <h3 className="text-4xl font-bold mb-8 text-white">
              <AnimatedText text="Featured Works" />
            </h3>
            <div className="flex justify-center space-x-8 mb-12">
              {featuredWorks.map((work, index) => (
                <motion.div 
                  key={index}
                  className="w-64 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img src={work.image} alt={work.title} className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                  <h4 className="text-xl font-bold text-white">{work.title}</h4>
                  <p className="text-accent">{work.artist}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => setActiveSection('portfolio')}
              className="flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gradient2 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Full Portfolio</span>
              <BsArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Home;
