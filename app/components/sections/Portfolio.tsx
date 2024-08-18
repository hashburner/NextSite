import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Portfolio: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(portfolioData.length).fill(false));

  const handleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newFlippedCards = [...prev];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-accent mb-8">Latest Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="w-full"
          >
            <div 
              className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`} 
              onClick={() => handleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
                </div>
                <div className="flip-card-back">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-1">Artist: {item.artist}</p>
                  <p className="text-xs mb-2">{item.credits}</p>
                  {item.spotifyLink && (
                    <a
                      href={item.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-3 py-1 text-sm rounded-md hover:bg-accent-dark transition-colors duration-300"
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
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          width: 100%;
          padding-top: 100%; /* This creates a square aspect ratio */
          position: relative;
        }
        .flip-card-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
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
          overflow: hidden;
        }
        .flip-card-front {
          background-color: var(--backgroundalt-color);
        }
        .flip-card-back {
          background-color: rgba(26, 26, 26, 0.9);
          color: white;
          transform: rotateY(180deg);
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;