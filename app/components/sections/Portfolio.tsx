import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, PortfolioItem } from '../data/portfolioData';

const Portfolio: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [genreFilter, setGenreFilter] = useState<string>('All');
  const [expandedItem, setExpandedItem] = useState<PortfolioItem | null>(null);

  const filteredData = useMemo(() => {
    return portfolioData.filter(item => 
      (typeFilter === 'All' || item.type === typeFilter) &&
      (genreFilter === 'All' || item.genre === genreFilter)
    );
  }, [typeFilter, genreFilter]);

  const handleFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setFlippedCardId(prevId => prevId === id ? null : id);
  };

  const togglePlay = (id: string) => {
    const audio = audioRefs.current[id];
    if (audio) {
      if (isPlaying[id]) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  const ExpandedView: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-4 "
      onClick={() => setExpandedItem(null)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl overflow-hidden relative w-[90vw] max-w-5xl max-h-[90vh] overflow-y-auto drop-shadow-2xl"
        onClick={(e) => e.stopPropagation()}
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
        <div className="relative z-10 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex-shrink-0 mb-4 lg:mb-0 lg:mr-8">
            <div className="w-full h-0 pb-[100%] relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2 text-white">{item.title}</h2>
            <p className="text-xl mb-4 text-accent">{item.artist}</p>
            <p className="text-lg mb-2 text-white">Type: {item.type}</p>
            <p className="text-lg mb-4 text-white">Genre: {item.genre}</p>
            <h3 className="text-xl font-bold mb-2 text-white">Tracklist:</h3>
            <ul className="list-disc list-inside mb-4 text-white">
              {item.tracklist?.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mb-2 text-white">Credits:</h3>
            <p className="whitespace-pre-line mb-4 text-white">{item.credits}</p>
            {item.spotifyLink && (
              <a
                href={item.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-3 text-lg rounded-md hover:bg-accent-dark transition-colors duration-300 inline-block mb-4"
              >
                Listen on Spotify
              </a>
            )}
            <audio controls src={item.audioSrc} className="w-full mt-4" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

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
            <option value="Jazz">Jazz</option>
            <option value="Folk">Folk</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)] overflow-y-auto pb-8 custom-scrollbar">
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (filteredData.indexOf(item) % 4), duration: 0.5 }}
            className="w-full"
          >
            <div 
              className={`flip-card ${flippedCardId === item.id ? 'flipped' : ''}`} 
              onClick={(e) => handleFlip(item.id, e)}
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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedItem(item);
                    }}
                    className="bg-accent text-white px-3 py-1 text-sm rounded-md hover:bg-accent-dark transition-colors duration-300 mb-2"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {expandedItem && <ExpandedView item={expandedItem} />}
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
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--accent-color) var(--background-color);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--background-color);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: var(--accent-color);
          border-radius: 4px;
          border: 2px solid var(--background-color);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;