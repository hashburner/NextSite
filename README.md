// File: app/page.tsx
import FuturisticAudioRevolution from '../components/FuturisticAudioRevolution';

export default function Home() {
  return <FuturisticAudioRevolution />;
}

// File: components/FuturisticAudioRevolution.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type AudioDataPoint = {
  name: string;
  value: number;
};

type Section = 'home' | 'about' | 'contact';

interface FeatureProps {
  title: string;
  description: string;
  delay: number;
}

const audioData: AudioDataPoint[] = [
  { name: 'Bass', value: 300 },
  { name: 'Mid', value: 200 },
  { name: 'Treble', value: 278 },
  { name: 'Harmony', value: 189 },
  { name: 'Rhythm', value: 239 },
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

const Feature: React.FC<FeatureProps> = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-gray-900 p-6 rounded-lg"
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const FuturisticAudioRevolution: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-center"
            >
              BRACE YOURSELF FOR A<br/>
              <span className="text-purple-500">NEW ERA OF SOUND</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-64 w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={audioData}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#000', border: 'none' }} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
              />
              <button 
                type="submit" 
                className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300"
              >
                JOIN THE REVOLUTION
              </button>
            </motion.form>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-purple-500">About AudioRev</h2>
            <p className="text-xl">
              We're not just changing the game, we're rewriting the rules. Our team of audio engineers and developers are pushing the boundaries of what's possible in sound technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature 
                title="Immersive 3D Audio" 
                description="Experience sound like never before with our cutting-edge technology."
                delay={0.2}
              />
              <Feature 
                title="AI-Powered Mixing" 
                description="Let our advanced AI create the perfect mix for any track."
                delay={0.4}
              />
              <Feature 
                title="Quantum Sound Processing" 
                description="Harness the power of quantum computing for unparalleled audio quality."
                delay={0.6}
              />
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-purple-500">Get in Touch</h2>
            <p className="text-xl">Ready to experience the future of sound? Drop us a line.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="email" placeholder="Email" className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <textarea placeholder="Message" rows={4} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300">Send Message</button>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, loop: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-t-2 border-purple-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <>
          <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-bold"
            >
              AUDIO<span className="text-purple-500">REV</span>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex space-x-6"
            >
              {(['home', 'about', 'contact'] as const).map((item) => (
                <li key={item} className="cursor-pointer">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={`uppercase ${activeSection === item ? 'text-purple-500' : 'text-white'}`}
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
              className="pt-24 px-6 max-w-6xl mx-auto"
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
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                {platform}
              </motion.a>
            ))}
          </footer>
        </>
      )}
    </div>
  );
};

export default FuturisticAudioRevolution;