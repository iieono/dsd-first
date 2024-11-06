import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.reveal');
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, // start position (hidden below)
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: el,
            start: 'top 80%', // start animation when top of element is at 80% of viewport
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);
  
  return (
    <div ref={sectionRef} className='section w-full bg-tea min-h-screen lg:h-screen relative'>
      <div className='w-full h-full flex flex-col lg:flex-row justify-evenly items-center gap-10 py-20 lg:py-0 px-5 lg:px-20'>
        <div className='w-full h-full flex items-start gap-3 justify-center flex-col reveal'>
          <div className='text-navy text-lg lg:text-2xl uppercase'>Design + Development + SEO</div>
          <div className='text-black text-3xl lg:text-6xl'>Created to Transform B2B Websites</div>
          <div className='text-white px-4 text-sm lg:text-xl bg-black py-1 rounded-full mt-5'>Schedule a call</div>
        </div>
        <div className='w-full h-full flex lg:px-5 text-black flex-col items-center justify-center gap-20'>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Professionalism</div>
            <div className='text-xl'>Our team approaches every project with high skill, precision, and professionalism, ensuring reliable and successful outcomes.</div>
          </div>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Personalized Approach</div>
            <div className='text-xl'>We understand that every business is unique, so we provide customized solutions tailored to each client’s specific needs, ensuring maximum impact.</div>
          </div>
        </div>
        <div className='w-full h-full flex lg:px-5 text-black flex-col items-center justify-center gap-20'>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Innovation</div>
            <div className='text-xl'>We are constantly exploring new technologies and trends to bring cutting-edge solutions to our clients, maintaining a high standard of quality in everything we do.</div>
          </div>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Trust and Reliability</div>
            <div className='text-xl'>We are committed to your success even after project completion, offering 24/7 technical support to keep your systems running smoothly and efficiently.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
