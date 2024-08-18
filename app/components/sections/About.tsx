import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-accent">About Killian Taylor</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.img
          src="/images/killian-taylor.jpg"
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
};

export default About;