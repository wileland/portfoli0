import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
    <motion.div className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}>
      <h1 className="text-5xl mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl">Showcasing my projects and skills</p>
    </motion.div>
  </section>
);

export default Hero;
