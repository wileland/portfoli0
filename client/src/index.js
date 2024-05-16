import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
