import './App.css';
import About from './components/About';
import Affilate from './components/Affilate';
import Choose from './components/Choose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Offer from './components/Offer';
// import Professional from './components/Professional';
import Services from './components/Services';
import Skills from './components/Skills';
import Team from './components/Team';

function App() { 
  return (
    <div className="w-full">
      <div id='navbar' className='h-fit w-full bg-white shadow-md fixed z-10 shadow-slate-950 px-10 
      '>
        <Navbar />
      </div>
      {/* <div className='w-full p-2
      lg:hidden'>
        <NavbarMobile />
      </div> */}
      <Hero/>
      <Team />
      <About />
      <Offer/>
      <Services />
      <Choose />
      <Skills />
      {/* <Professional /> */}
      <Affilate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
