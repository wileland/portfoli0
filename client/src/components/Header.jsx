// client/src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ setTab }) => (
  <motion.header
    className="bg-blue-500 p-4"
    initial={{ y: -250 }}
    animate={{ y: 0 }}
  >
    <nav className="flex justify-between items-center">
      <h1 className="text-white text-2xl">William Haynes Portfolio</h1>
      <ul className="flex space-x-4">
        <li><button onClick={() => setTab('home')} className="text-white">Home</button></li>
        <li><button onClick={() => setTab('about')} className="text-white">About</button></li>
        <li><button onClick={() => setTab('projects')} className="text-white">Projects</button></li>
        <li><button onClick={() => setTab('critiques')} className="text-white">Critiques</button></li>
        <li><button onClick={() => setTab('contact')} className="text-white">Contact</button></li>
        <li><button onClick={() => setTab('login')} className="text-white">Login</button></li>
        <li><button onClick={() => setTab('register')} className="text-white">Register</button></li>
      </ul>
    </nav>
  </motion.header>
);

export default Header;
