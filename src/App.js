import './App.css';
import About from './components/About';
import Choose from './components/Choose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Professional from './components/Professional';
import Services from './components/Services';

function App() {
  return (
    <div className="w-full">
      <Hero/>
      <About />
      <Offer/>
      <Services />
      <Choose />
      <Professional />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
