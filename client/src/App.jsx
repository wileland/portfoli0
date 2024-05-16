import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Critiques from './components/Critiques.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import StripeProvider from './components/StripeProvider.jsx';
import { GlobalProvider } from './context/GlobalContext.jsx';

function App() {
  const [tab, setTab] = useState('home');

  const renderTabContent = () => {
    switch (tab) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <Critiques />
            <CheckoutForm />
          </>
        );
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'critiques':
        return <Critiques />;
      case 'checkout':
        return <CheckoutForm />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <Critiques />
            <CheckoutForm />
          </>
        );
    }
  };

  return (
    <GlobalProvider>
      <StripeProvider>
        <div className="App">
          <Header setTab={setTab} />
          {renderTabContent()}
        </div>
      </StripeProvider>
    </GlobalProvider>
  );
}

export default App;
