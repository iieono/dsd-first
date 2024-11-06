import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundGradientAnimation } from './components/WaveParticles';

gsap.registerPlugin(ScrollToPlugin);

function App() {

  return (
    <div className="bg-black work-sans text-white">
      <BackgroundGradientAnimation />
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
