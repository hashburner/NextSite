import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaSoundcloud } from 'react-icons/fa';

const About: React.FC = () => {
  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/killiantaylor' },
    { icon: FaInstagram, url: 'https://instagram.com/killiantayloraudio' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/killiantaylor' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/killiantaylor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-backgroundalt to-background py-20 px-4 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="relative w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated background gradients */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-teal-500 to-green-500 opacity-30"
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.img
              src="/images/killian-taylor.jpg"
              alt="Killian Taylor"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          <div className="flex-1">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Killian Taylor
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold mb-6 text-accent"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Sound Engineer & Producer
            </motion.h3>
            <motion.p 
              className="text-lg mb-6 text-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              With over a decade of experience in crafting sonic masterpieces, I bring unparalleled expertise to every project. From intimate acoustic sessions to full-scale productions, your sound is in masterful hands.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={30} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
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
      </motion.div>
    </div>
  );
};

export default About;