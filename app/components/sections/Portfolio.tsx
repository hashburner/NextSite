import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, PortfolioItem } from '../data/portfolioData';

const Portfolio: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(portfolioData.length).fill(false));
  const [isPlaying, setIsPlaying] = useState<boolean[]>(new Array(portfolioData.length).fill(false));
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(new Array(portfolioData.length).fill(null));
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [genreFilter, setGenreFilter] = useState<string>('All');

  const filteredData = useMemo(() => {
    return portfolioData.filter(item => 
      (typeFilter === 'All' || item.type === typeFilter) &&
      (genreFilter === 'All' || item.genre === genreFilter)
    );
  }, [typeFilter, genreFilter]);

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
      if (isPlaying[index]) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying(prev => {
        const newIsPlaying = [...prev];
        newIsPlaying[index] = !newIsPlaying[index];
        return newIsPlaying;
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-accent">Latest Projects</h2>
        <div className="flex space-x-4">
          <select 
            className="bg-backgroundalt text-text p-2 rounded"
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
          >
            <option value="All">All Types</option>
            <option value="Album">Album</option>
            <option value="Single">Single</option>
            <option value="EP">EP</option>
          </select>
          <select 
            className="bg-backgroundalt text-text p-2 rounded"
            onChange={(e) => setGenreFilter(e.target.value)}
            value={genreFilter}
          >
            <option value="All">All Genres</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Electronic">Electronic</option>
          </select>
        </div>
      </div>
      <AnimatePresence>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
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
                    <p className="text-xs mb-1">Type: {item.type}</p>
                    <p className="text-xs mb-2">Genre: {item.genre}</p>
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
                      ref={(el) => {
                        audioRefs.current[index] = el;
                      }}
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
        </motion.div>
      </AnimatePresence>
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