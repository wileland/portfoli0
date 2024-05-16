// client/src/components/Register.jsx
import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext.jsx';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a registration API call
    dispatch({ type: 'LOGIN', payload: { email, password } });
    dispatch({ type: 'SET_TAB', payload: 'dashboard' });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
