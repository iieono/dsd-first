import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div id='services' className="section w-full py-10 lg:py-0 min-h-screen relative flex items-center justify-center">
      <div className="w-full h-full items-center gap-5 justify-center flex flex-col lg:flex-row">
        <div className="flex gap-5 lg:gap-12 w-full items-center lg:items-end h-1/2 flex-col relative">
          {/* First Card */}
          <div
            ref={(el) => (sectionsRef.current[0] = el)}
            className="h-80 w-4/5 bg-black/40 rounded-3xl border border-white/20 flex shadow-2xl relative shadow-navy/60"
          >
            <div className="flex flex-col lg:w-2/3 gap-5 z-10 p-5">
              <div className="text-4xl font-semibold">
                Web<br /> dasturlar
              </div>
              <div className="text-xl text-gray-500">
                Biz korporativ veb-saytlardan veb-ilovalarga qadar yuqori sifatli veb-saytlarni ishlab chiqamiz
              </div>
            </div>
            <div className="absolute right-0 text-9xl lg:text-[16rem] flex items-end justify-end h-full leading-none opacity-40 -z-1 text-end text-navy font-semibold px-5 py-8 lg:py-0 blur-sm">
              {'</>'}
            </div>
          </div>

          {/* Second Card */}
          <div
            ref={(el) => (sectionsRef.current[1] = el)}
            className="h-80 w-4/5 bg-black/40 rounded-3xl border border-white/20 flex shadow-2xl relative shadow-navy/60"
          >
            <div className="flex flex-col lg:w-2/3 gap-5 z-10 p-5">
              <div className="text-4xl font-semibold">
                CRM <br /> tizimlari
              </div>
              <div className="text-xl text-gray-500">
                Biznes va jarayonlarni avtomatlashtirish, qog'oz ishlarini 100% ga kamaytiradigan elektron boshqaruv tizimlarini rivojlantirish
              </div>
            </div>
            <div className="absolute right-0 text-[16rem] flex items-end justify-end h-full leading-none opacity-40 -z-1 text-end text-navy font-semibold px-2 blur-sm">
              <div className="w-80 h-80 gap-5 items-end p-10 lg:p-0 lg:items-center justify-end lg:justify-center flex">
                <div className="flex gap-5 flex-col">
                  <div className="w-16 lg:w-28 h-16 lg:h-28 border-2"></div>
                  <div className="w-16 lg:w-28 h-16 lg:h-28 border-2"></div>
                </div>
                <div className="flex gap-5 flex-col">
                  <div className="w-16 lg:w-28 h-16 lg:h-28 border-2"></div>
                  <div className="w-16 lg:w-28 h-16 lg:h-28 border-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 lg:gap-12 w-full items-center lg:items-start h-1/2 flex-col">
          {/* Third Card */}
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="h-80 w-4/5 bg-black/40 rounded-3xl border border-white/20 flex shadow-2xl relative shadow-navy/60"
          >
            <div className="flex flex-col lg:w-2/3 gap-5 z-10 p-5">
              <div className="text-4xl font-semibold">UI & UX</div>
              <div className="text-xl text-gray-500">
                Loyihaning aql xaritasini ishlab chiqish va uning arxitekturasi asosida optimal echim bilan loyihalash
              </div>
            </div>
            <div className="absolute right-0 text-[16rem] flex items-end justify-end h-full leading-none opacity-40 gap-5 -z-1 text-end text-navy font-semibold p-10 blur-sm">
              <div className="w-20 lg:w-40 h-20 lg:h-40 border-4 border-dotted rounded-full"></div>
              <div className="w-20 lg:w-40 h-20 lg:h-40 rounded-2xl border-2 lg:border-4 border-dashed mb-5"></div>
            </div>
          </div>

          {/* Fourth Card */}
          <div
            ref={(el) => (sectionsRef.current[3] = el)}
            className="h-80 w-4/5 bg-black/40 rounded-3xl border border-white/20 flex shadow-2xl relative shadow-navy/60"
          >
            <div className="flex flex-col lg:w-2/3 gap-5 z-10 p-5">
              <div className="text-4xl font-semibold">Mobil ilovalar</div>
              <div className="text-xl text-gray-500">
                Har qanday murakkablikdagi mobil ilovalarni ishlab chiqish va texnik qo'llab-quvvatlash
              </div>
            </div>
            <div className="absolute right-0 text-[16rem] flex items-end justify-end h-full leading-none opacity-40 -z-1 text-end text-navy font-semibold p-10 blur-sm">
              <div className="border-2 h-40 lg:h-60 rounded-2xl w-28 lg:w-40 relative">
                <div className="absolute rounded-full h-8 lg:h-10 w-8 lg:w-10 border-2 bottom-4 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
