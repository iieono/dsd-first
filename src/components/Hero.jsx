import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    // GSAP reveal animation for text and button
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, stagger: 0.2, delay: 1 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 1.5 });
    gsap.from(".hero-button", { opacity: 0, y: 50, scale: 0.5, duration: 1, delay: 2 });

    // GSAP hover effect for the button
    const button = document.querySelector(".hero-button");
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  }, []);

  return (
    <div id="hero" className="section w-full relative min-h-screen flex items-center justify-center">
      <div className="h-full w-full flex flex-col items-center gap-10">
        <div className="hero-title text-3xl text-pretty lg:text-7xl font-semibold px-5 lg:px-0 lg:w-2/3 text-center">
          Refresh your Room and Make Awesome Interior Design With Us!
        </div>
        <div className="hero-subtitle px-5 lg:px-0 lg:w-2/3 jetbrains text-xs lg:text-base text-center">
          2024 yil 20 fevralda asos solingan Dominant Soft Development IT Company - bu sizning barcha IT sohasidagi muammolariga yechim topadigan jamoangiz. Bizning kompaniyamiz tez rivojlanayotgan va innovatsiyalarga tayyor bo‘lgan misli ko‘rilmagan kuchli mutaxassislar jamoasidan iborat.
        </div>
        <a href="#contact" className="hero-button bg-black/30 border border-navy px-8 lg:px-12 lg:mt-16 py-3 lg:py-6 text-2xl rounded-full shadow-2xl shadow-navy cursor-pointer">
          Contact us
        </a>
      </div>
    </div>
  );
}

export default Hero;
