// client/src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../context/GlobalContext.jsx';

const Header = ({ setTab }) => {
  const { state, dispatch } = useGlobalContext();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    setTab('home');
  };

  return (
    <motion.header
      className="bg-blue-500 p-4"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
    >
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-2xl">William Haynes Portfolio</h1>
        <ul className="flex space-x-4">
          <li><button className="text-white" onClick={() => setTab('home')}>Home</button></li>
          <li><button className="text-white" onClick={() => setTab('about')}>About</button></li>
          <li><button className="text-white" onClick={() => setTab('projects')}>Projects</button></li>
          <li><button className="text-white" onClick={() => setTab('critiques')}>Critiques</button></li>
          <li><button className="text-white" onClick={() => setTab('contact')}>Contact</button></li>
          {!state.isAuthenticated && (
            <>
              <li><button className="text-white" onClick={() => setTab('login')}>Login</button></li>
              <li><button className="text-white" onClick={() => setTab('register')}>Register</button></li>
            </>
          )}
          {state.isAuthenticated && (
            <li><button className="text-white" onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
