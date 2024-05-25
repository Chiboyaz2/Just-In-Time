import './App.css';
import About from './components/About';
import Choose from './components/Choose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Professional from './components/Professional';
import Services from './components/Services';
import Skills from './components/Skills';
import Team from './components/Team';

function App() {
  return (
    <div className="w-full">
      <Hero/>
      <Team />
      <About />
      <Offer/>
      <Services />
      <Choose />
      <Skills />
      <Professional />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
