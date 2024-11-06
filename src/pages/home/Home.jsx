import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Code, Smartphone, Layout, Database, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ModernBentoDesign = () => {
  useEffect(() => {
    gsap.from('.bento-card', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute -inset-[10px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
        
        <div className="relative container mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Refresh your Room
              </h1>
              <p className="text-xl text-gray-300">
                Make Awesome Interior Design With Us!
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-purple-500/50">
                Biz bilan boshlaing
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all group">
                <Code className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-400">Responsive va user-friendly saytlar yaratish</p>
              </div>
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
                <Layout className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-400">Optimal echim bilan loyihalash</p>
              </div>
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
                <Database className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">CRM Systems</h3>
                <p className="text-gray-400">Biznes jarayonlarni avtomatlashtirish</p>
              </div>
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
                <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                <p className="text-gray-400">iOS va Android ilovalar yaratish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Bizning Jamoamiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bento-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4">12+</h3>
              <p className="text-gray-400">Tajribali IT mutaxassislar</p>
            </div>
            <div className="bento-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4">24/7</h3>
              <p className="text-gray-400">Texnik qo'llab-quvvatlash</p>
            </div>
            <div className="bento-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4">100%</h3>
              <p className="text-gray-400">Mijoz mamnuniyati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-400">info@dominantsoft.com</p>
              </div>
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+998 99 468 49 19</p>
              </div>
              <div className="bento-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all">
                <MapPin className="w-6 h-6 text-pink-400 mb-2" />
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Tashkent, Uzbekistan</p>
              </div>
            </div>
            
            <form className="bento-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50"
                />
                <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-purple-500/50">
                  Yuborish
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center text-gray-400">
            © 2024 Dominant Soft Development IT Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernBentoDesign;