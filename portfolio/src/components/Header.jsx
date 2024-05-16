import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header className="bg-blue-500 p-4" initial={{ y: -250 }} animate={{ y: 0 }}>
    <nav className="flex justify-between items-center">
      <h1 className="text-white text-2xl">William Haynes Portfolio</h1>
      <ul className="flex space-x-4">
        <li><a href="#about" className="text-white">About</a></li>
        <li><a href="#projects" className="text-white">Projects</a></li>
        <li><a href="#critiques" className="text-white">Critiques</a></li>
        <li><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  </motion.header>
);

export default Header;
