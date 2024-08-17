'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type Section = 'home' | 'portfolio' | 'services' | 'bookings' | 'about';

interface PortfolioItem {
  title: string;
  artist: string;
  image: string;
  spotifyLink?: string;
  credits?: string;
}

const portfolioData: PortfolioItem[] = [
  { 
    title: "What Was the Question?", 
    artist: "Curtisy", 
    image: "images/placeholder_artwork_1.jpg", 
    spotifyLink: "https://open.spotify.com/album/2fKkKKLxeXHlKknCUckPJN?si=2PLDvfqQQ42HQ3pZY5Nj8g",
    credits: "Mixed and Mastered by Killian Taylor\nProduced by Curtisy\nRecorded at Soundwave Studios"
  },
  { 
    title: "Four Winds Echo On The Stave", 
    artist: "Leon McMahon", 
    image: "images/placeholder_artwork_2.jpg",
    credits: "Produced and Mixed by Killian Taylor\nMastered at Abbey Road Studios"
  },
  { 
    title: "Weed Addict", 
    artist: "Peer PLeasure", 
    image: "images/Weed%20Addict_album_cover.jpg",
    credits: "Engineered and Mixed by Killian Taylor\nProduced by Peer Pleasure\nMastered by Bob Ludwig"
  },
  { 
    title: "Shiny Things", 
    artist: "Evie", 
    image: "images/Shiny%20Things_album_cover.jpg",
    credits: "Produced, Mixed, and Mastered by Killian Taylor\nRecorded at Sunset Sound"
  },
  { 
    title: "Lost & Bound", 
    artist: "Yawa", 
    image: "images/Lost%20&%20Bound_album_cover.jpg",
    credits: "Mixed by Killian Taylor\nProduced by Rick Rubin\nMastered at Sterling Sound"
  },
];

const pageVariants: Variants = {
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

  const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(portfolioData.length).fill(false));

const handleFlip = (index: number) => {
  setFlippedCards(prev => {
    const newFlippedCards = [...prev];
    newFlippedCards[index] = !newFlippedCards[index];
    return newFlippedCards;
  });
};

  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('/images/hero.png')"}}></div>
            <div className="relative z-20 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-7xl font-bold mb-4 text-white"
              >
                KILLIAN TAYLOR
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl font-bold mb-8"
              >
                <span className="text-accent">SOUND ENGINEER</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <button 
                  onClick={() => setActiveSection('bookings')}
                  className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300"
                >
                  BOOK NOW
                </button>
              </motion.div>
            </div>
          </div>
        );
        case 'portfolio':
            return (
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-accent">Latest Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {portfolioData.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                      className="bg-backgroundalt p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flip-card" onClick={() => handleFlip(index)}>
                        <div className={`flip-card-inner ${flippedCards[index] ? 'flipped' : ''}`}>
                          <div className="flip-card-front">
                            <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md" />
                            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                            <p className="text-text">Artist: {item.artist}</p>
                          </div>
                          <div className="flip-card-back">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm mb-4">{item.credits}</p>
                            {item.spotifyLink && (
                              <a
                                href={item.spotifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300"
                              >
                                Listen on Spotify
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
      case 'services':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-accent">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["Mixing", "Mastering", "Recording", "Production"].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="bg-backgroundalt p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold mb-4">{service}</h3>
                  <p>Professional {service.toLowerCase()} services to achieve the perfect sound for your tracks.</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-accent">Book a Session</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="email" placeholder="Email" className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <select className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">Select a service</option>
                <option value="mixing">Mixing</option>
                <option value="mastering">Mastering</option>
                <option value="recording">Recording</option>
                <option value="production">Production</option>
              </select>
              <input type="date" className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Additional Details" rows={4} className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300">Send Request</button>
            </form>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-accent">About Killian Taylor</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.img
                src="images/john-doe-portrait.jpg"
                alt="Killian Taylor"
                className="w-full md:w-1/3 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full md:w-2/3"
              >
                <p className="text-xl mb-4">
                  Killian Taylor is a seasoned sound engineer with over 5 years of experience in the music industry. His passion for audio engineering began in his teenage years and has since blossomed into a successful career.
                </p>
                <p className="text-xl mb-4">
                  Killian has worked with a wide range of artists across various genres, from up-and-coming indie bands to established pop stars. His keen ear for detail and dedication to bringing out the best in every track has earned him a reputation as one of the most sought-after sound engineers in the industry.
                </p>
                <p className="text-xl">
                  When he's not in the studio, Killian enjoys mentoring aspiring sound engineers and staying up-to-date with the latest audio technology and techniques.
                </p>
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-background text-text min-h-screen font-sans">
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
          <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
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

          <AnimatePresence mode="wait">
            <motion.main
              key={activeSection}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className={`${activeSection === 'home' ? '' : 'pt-24 px-6 max-w-6xl mx-auto'}`}
            >
{renderSection()}
          </motion.main>
        </AnimatePresence>

        <footer className="mt-12 p-6 flex justify-center space-x-6">
          {['Twitter', 'Instagram', 'YouTube'].map((platform, index) => (
            <motion.a
              key={platform}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
              className="text-text hover:text-accent transition-colors duration-300"
            >
              {platform}
            </motion.a>
          ))}
        </footer>
      </>
    )}

return (
    // ... (all your existing JSX)
    <style jsx global>{`
      .flip-card {
        perspective: 1000px;
        background-color: transparent;
        width: 100%;
        height: 400px;
        cursor: pointer;
      }

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }

      .flip-card-inner.flipped {
        transform: rotateY(180deg);
      }

      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        padding: 1rem;
      }

      .flip-card-front {
        background-color: var(--backgroundalt-color);
      }

      .flip-card-back {
        background-color: #1a1a1a;
        color: white;
        transform: rotateY(180deg);
      }
    `}</style>
  );

  </div>
);
};

export default ClientComponent;