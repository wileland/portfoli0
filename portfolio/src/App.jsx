import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Critiques from './components/Critiques';
import CheckoutForm from './components/CheckoutForm';
import StripeProvider from './components/StripeProvider';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <StripeProvider>
        <div className="App">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Critiques />
          <CheckoutForm />
        </div>
      </StripeProvider>
    </GlobalProvider>
  );
}

export default App;
