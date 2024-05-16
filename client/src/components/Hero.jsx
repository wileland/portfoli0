// client/src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="hero bg-blue-500 text-white p-8 flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        Welcome to William Haynes' Portfolio
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        Showcasing projects, skills, and more
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-8 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      >
        View Projects
      </motion.a>
    </motion.div>
  );
};

export default Hero;
