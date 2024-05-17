import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Critiques from './components/Critiques.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Contact from './components/Contact.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { GlobalProvider, useGlobalContext } from './context/GlobalContext.jsx';
import './tailwind.css';
import './index.css';

// Replace with your actual public key
const stripePromise = loadStripe('your-stripe-public-key');

const AppContent = () => {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
      dispatch({ type: 'SET_TAB', payload: 'dashboard' });
    } else {
      dispatch({ type: 'SET_TAB', payload: 'home' });
    }

    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode !== null) {
      dispatch({ type: 'SET_DARK_MODE', payload: darkMode });
    }
  }, [dispatch]);

  const renderTabContent = () => {
    if (state.isAuthenticated) {
      switch (state.tab) {
        case 'dashboard':
          return <Dashboard />;
        default:
          return <Dashboard />;
      }
    } else {
      switch (state.tab) {
        case 'home':
          return (
            <>
              <Hero />
              <About />
              <Projects />
              <Critiques />
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </>
          );
        case 'about':
          return <About />;
        case 'projects':
          return <Projects />;
        case 'critiques':
          return <Critiques />;
        case 'contact':
          return <Contact />;
        case 'login':
          return <Login />;
        case 'register':
          return <Register />;
        default:
          return (
            <>
              <Hero />
              <About />
              <Projects />
              <Critiques />
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </>
          );
      }
    }
  };

  return (
    <Router>
      <Header setTab={(tab) => dispatch({ type: 'SET_TAB', payload: tab })} />
      <div className={state.darkMode ? 'dark-mode' : 'light-mode'}>
        {renderTabContent()}
      </div>
    </Router>
  );
};

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
