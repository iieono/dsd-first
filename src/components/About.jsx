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
        { opacity: 0, y: 50 }, // boshlang'ich holat (pastdan yashirin)
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: el,
            start: 'top 80%', // elementning tepasi ekranning 80% joylashganda animatsiya boshlanadi
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);
  
  return (
    <div id='about' ref={sectionRef} className='section w-full bg-tea min-h-screen lg:h-screen relative'>
      <div className='w-full h-full flex flex-col lg:flex-row justify-evenly items-center gap-10 py-20 lg:py-0 px-5 lg:px-20'>
        <div className='w-full h-full flex items-start gap-3 justify-center flex-col reveal'>
          <div className='text-navy text-lg lg:text-2xl uppercase'>Dominant Soft Development</div>
          <div className='text-black text-3xl lg:text-6xl'>IT sohasidagi muammolariga yechim topadigan jamoangiz.</div>
          <a href='#contact' className='text-white px-4 text-sm lg:text-xl bg-black py-1 rounded-full mt-5'>Qo'ng'iroq qiling</a>
        </div>
        <div className='w-full h-full flex lg:px-5 text-black flex-col items-center justify-center gap-20'>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Professionalizm</div>
            <div className='text-xl'>Bizning jamoamiz har bir loyihaga yuqori malaka, aniq va professional yondashuv bilan kirishadi, ishonchli va muvaffaqiyatli natijalarni ta'minlaydi.</div>
          </div>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Shaxsiy Yondashuv</div>
            <div className='text-xl'>Har bir biznesning o'ziga xos ekanligini tushunamiz, shuning uchun har bir mijozning o'ziga xos ehtiyojlariga moslashtirilgan yechimlarni taqdim etamiz, maksimal ta'sirni ta'minlashga harakat qilamiz.</div>
          </div>
        </div>
        <div className='w-full h-full flex lg:px-5 text-black flex-col items-center justify-center gap-20'>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Innovatsiya</div>
            <div className='text-xl'>Biz doimo yangi texnologiyalar va tendentsiyalarni o'rganib, mijozlarimizga zamonaviy yechimlarni taqdim etamiz, bajaradigan har bir ishimizda yuqori sifatni saqlaymiz.</div>
          </div>
          <div className='flex border-l-2 px-2 border-black flex-col gap-3 reveal'>
            <div className='text-3xl font-medium'>Ishonch va Ishonchlilik</div>
            <div className='text-xl'>Loyiha tugagandan keyin ham sizning muvaffaqiyatingizga sodiqmiz, tizimlaringizni samarali va tez ishlashini ta'minlash uchun 24/7 texnik yordamni taklif qilamiz.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
