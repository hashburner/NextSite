import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/' },
    { icon: FaInstagram, url: 'https://instagram.com/' },
    { icon: FaYoutube, url: 'https://youtube.com/' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/' },
  ];

  const iconVariants = {
    rest: { y: 0 },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="bg-transparent py-4 px-6 flex justify-center items-center">
      <div className="flex space-x-8">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accentdark transition-colors duration-300"
            initial="rest"
            whileHover="hover"
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div variants={iconVariants}>
              <link.icon size={32} />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;