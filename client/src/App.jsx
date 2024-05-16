// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

// Replace with your actual public key
const stripePromise = loadStripe('your-stripe-public-key');

const AppContent = () => {
  const { state, dispatch } = useGlobalContext();

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
      <Switch>
        <Route path="/" exact>
          {renderTabContent()}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/critiques">
          <Critiques />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
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
