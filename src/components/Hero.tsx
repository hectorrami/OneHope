import React from 'react';
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* 1. Dark Overlay (Scrim) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 2. Centered Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
          ONE HOPE
        </h1>
        <p className="text-xl md:text-2xl font-bold mt-2 opacity-90">
          John 3:16
        </p>

        {/* 3. Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-3xl">
          <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110"><FaXTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition-transform hover:scale-110"><FaInstagram /></a>
          <a href="#" className="hover:text-red-500 transition-transform hover:scale-110"><FaYoutube /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;