// client/src/components/Dashboard.jsx
import React from 'react';
import { useGlobalContext } from '../context/GlobalContext.jsx';

const Dashboard = () => {
  const { dispatch } = useGlobalContext();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
