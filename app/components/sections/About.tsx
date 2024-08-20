import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaSoundcloud } from 'react-icons/fa';

const About: React.FC = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/killiantaylor' },
    { icon: FaInstagram, url: 'https://instagram.com/killiantayloraudio' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/killiantaylor' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/killiantaylor' },
  ];

  useEffect(() => {
    const handleWheel = async (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && !showSecondPage) {
        setShowSecondPage(true);
        await controls.start({ y: '0%', transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] } });
      } else if (e.deltaY < 0 && showSecondPage) {
        await controls.start({ y: '100%', transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] } });
        setShowSecondPage(false);
      }
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
  }, [showSecondPage, controls]);

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div 
      className="relative w-[90vw] h-[80vh] bg-backgroundalt bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl overflow-hidden"
    >
      {/* Animated background gradients */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 opacity-10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      {children}
    </div>
  );

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* Main Card - Always Visible and Animating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Card>
          <div className="relative z-10 flex flex-col md:flex-row items-center h-full">
            <motion.div 
              className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-12 shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                transition: { 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }
              }}
            >
              <motion.img
                src="./MJ.png"
                alt="Killian Taylor"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>

            <div className="flex-1">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-gradient2"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Killian Taylor
              </motion.h2>
              <motion.h3 
                className="text-xl md:text-3xl font-semibold mb-6 text-accent"
                animate={{ 
                  color: ['#ff6b6b', '#4158D0', '#ff6b6b'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Sound Engineer & Producer
              </motion.h3>
              <motion.p 
                className="text-base md:text-lg mb-6 text-text"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                With over a decade of experience in crafting sonic masterpieces, I bring unparalleled expertise to every project. From intimate acoustic sessions to full-scale productions, your sound is in masterful hands.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentdark transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon size={32} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full shadow-glow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 2 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </Card>
      </motion.div>

      {/* Second Page - Slides in from bottom */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: '100%' }}
        animate={controls}
      >
        <Card>
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-accent">My Journey</h2>
            <p className="text-base md:text-lg mb-4 text-text">
              From humble beginnings in a garage studio to working with chart-topping artists, my journey in the world of sound has been nothing short of extraordinary.
            </p>
            <p className="text-base md:text-lg mb-4 text-text">
              I've had the privilege of collaborating with talents across genres, from indie rock to electronic dance music, always pushing the boundaries of what's possible in audio production.
            </p>
            <p className="text-base md:text-lg text-text">
              My philosophy? Every sound tells a story. Let's make yours resonate.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;