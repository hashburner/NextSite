import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="flip-card"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back" style={{ transform: 'rotateY(180deg)' }}>{backContent}</div>
      </motion.div>
      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
          width: 100%;
          padding-top: 100%;
          position: relative;
        }
        .flip-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
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
          overflow: hidden;
        }
        .flip-card-front {
          background-color: var(--backgroundalt-color);
        }
        .flip-card-back {
          background-color: rgba(26, 26, 26, 0.9);
          color: white;
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlipCard;