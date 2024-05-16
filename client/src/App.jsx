import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Critiques from './components/Critiques.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import StripeProvider from './components/StripeProvider.jsx';
import { GlobalProvider } from './context/GlobalContext.jsx';


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
