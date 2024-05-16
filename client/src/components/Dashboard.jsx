// client/src/components/Dashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../context/GlobalContext.jsx';

const Dashboard = () => {
  const { dispatch } = useGlobalContext();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
      <p className="mb-4 text-center">Welcome to your dashboard!</p>
      <button
        onClick={handleLogout}
        className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </motion.div>
  );
};

export default Dashboard;
