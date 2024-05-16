// client/src/components/Register.jsx
import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext.jsx';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { dispatch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'LOGIN', payload: user });
    dispatch({ type: 'SET_TAB', payload: 'dashboard' });
    setMessage('Registration successful! Redirecting to dashboard...');
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
