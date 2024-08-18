import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Portfolio: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(portfolioData.length).fill(false));
  const [isPlaying, setIsPlaying] = useState<boolean[]>(new Array(portfolioData.length).fill(false));
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(new Array(portfolioData.length).fill(null));

  const handleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newFlippedCards = [...prev];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
  };

  const togglePlay = (index: number) => {
    const audio = audioRefs.current[index];
    if (audio) {
      console.log('Audio element:', audio); // Log the audio element
      console.log('Audio source:', audio.src); // Log the audio source
      if (isPlaying[index]) {
        audio.pause();
        audio.currentTime = 0;
        console.log('Audio paused');
      } else {
        audio.play().then(() => {
          console.log('Audio playing');
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(prev => {
        const newIsPlaying = [...prev];
        newIsPlaying[index] = !newIsPlaying[index];
        return newIsPlaying;
      });
    } else {
      console.error('No audio element found for index:', index);
    }
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
                      className="bg-accent text-white px-3 py-1 text-sm rounded-md hover:bg-accent-dark transition-colors duration-300 mb-2"
                    >
                      Listen on Spotify
                    </a>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(index);
                    }}
                    className="mt-2 bg-accent hover:bg-accent-dark text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
                  >
                    <motion.div
                      animate={{ rotate: isPlaying[index] ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isPlaying[index] ? '◼' : '▶'}
                    </motion.div>
                  </button>
                  <audio
                    ref={el => audioRefs.current[index] = el}
                    src={item.audioSrc}
                    onEnded={() => setIsPlaying(prev => {
                      const newIsPlaying = [...prev];
                      newIsPlaying[index] = false;
                      return newIsPlaying;
                    })}
                  />
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
          padding-top: 100%;
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