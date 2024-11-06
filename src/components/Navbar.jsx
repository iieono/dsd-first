import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        // When scroll is more than 50px, animate to top-0 and change border-radius
        gsap.to(navbar, {
          duration: 0.3,
          top: 0,
          borderRadius: '0 0 1rem 1rem', // Adjust border radius (bottom-sm)
          backgroundColor: 'rgb(0 0 0 / 0.9)',
        });
      } else {
        // Reset when scrolled to the top (ensure top is reset to '10rem')
        gsap.to(navbar, {
          duration: 0.3,
          backgroundColor: 'rgb(255 255 255 / 0.1)',
          top: '2.5rem', // Original position (lg:top-10)
          borderRadius: '10rem', // Reset the border radius
        });
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-10 lg:top-10 left-1/2 w-3/5 lg:w-1/2 min-h-16 transition-all duration-500 z-20 flex-col -translate-x-1/2 bg-white/10 backdrop-blur-lg shadow-sm lg:shadow-2xl shadow-white/40 lg:rounded-full flex items-center justify-center">

      <div className={`${navOpen ? 'max-h-96 px-8 py-8 gap-5' : 'max-h-0 opacity-0 p-0 gap-0'} transition-all duration-500 w-full overflow-hidden text-2xl flex flex-col  items-center justify-center text-center  `}>
          <div>About us</div>
          <div>Services</div>
          <div>Contact</div>
      </div>

      <div className="h-full w-full px-5 lg:px-10 flex items-center transition-all duration-500 justify-between text-sm lg:text-xl text-white">
        <div className="font-bold text-4xl h-full py-2 flex gap-5 items-center">
          <img src='/dsd-logo.png' className='h-9' alt='logo' />
          DSD
        </div>
        <div className='flex flex-col gap-1 lg:hidden' onClick={()=>setNavOpen(prev => !navOpen)}>
          <div className='w-6 h-1 bg-white rounded-full'></div>
          <div className='w-6 h-1 bg-white rounded-full'></div>
          <div className='w-6 h-1 bg-white rounded-full'></div>
        </div>
        <ul className=" hidden lg:flex space-x-16">
          <li>About us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>



    </nav>
  );
}

export default Navbar;
