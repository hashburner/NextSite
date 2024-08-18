import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: "Mixing", 
    description: "Blend and balance your tracks to perfection, enhancing clarity and depth.",
    icon: "🎚️"
  },
  { 
    title: "Mastering", 
    description: "Polish your final mix to industry standards, ensuring it sounds great on any system.",
    icon: "💿"
  },
  { 
    title: "Recording", 
    description: "Capture your sound with precision using state-of-the-art equipment and techniques.",
    icon: "🎙️"
  },
  { 
    title: "Production", 
    description: "Develop your musical ideas from concept to finished product with expert guidance.",
    icon: "🎹"
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:py-20">
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-center text-accent mb-8 sm:mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">{service.title}</h3>
            <p className="text-text">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;