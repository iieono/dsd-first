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
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let isScrolling = false;

    // Scroll event handler
    const handleScroll = (event) => {
      if (isScrolling) return; // Prevent multiple scroll actions at once
      isScrolling = true;

      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      const currentSection = document.querySelector('.active');
      const nextSection = scrollDirection === 'down' ? currentSection.nextElementSibling : currentSection.previousElementSibling;

      if (nextSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: nextSection,
          ease: 'power2.inOut',
          onComplete: () => {
            isScrolling = false;
          },
        });
        nextSection.classList.add('active');
        currentSection.classList.remove('active');
      } else {
        isScrolling = false;
      }
    };

    // Add scroll event listener
    window.addEventListener('wheel', handleScroll, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black work-sans text-white">
      <BackgroundGradientAnimation />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
