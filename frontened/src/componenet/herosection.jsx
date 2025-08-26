import React from 'react';
import { motion } from 'framer-motion';
import './styles/herosection.css'
import { useNavigate } from 'react-router-dom';
const tagline ="An arena to turn your idea into a full blown Start-up";
const HeroSection = () => {
    const navigate = useNavigate();
    const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  return (
    <section className="hero-section">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Genesis 2025
      </motion.h1>
       <motion.p
        className="hero-tagline"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {tagline.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>

      <motion.button
      onClick={() => navigate('/registration')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hero-button"
    >
      Register Now
    </motion.button>
      
    </section>
  );
};

export default HeroSection;
