import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa6';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('images/heroMain.jpg')" }}
    >
      {/* 1. Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 2. Content Container - 'flex-col' and 'items-center' handles the centering */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 w-full">

        {/* The Logo Image */}
        <div className="w-full max-w-[300px] md:max-w-[750px] transition-transform duration-700 hover:scale-105">
          <img
            src="images/unaesperanza_logo.png"
            alt="Una Esperanza Iglesia Cristiana"
            className="w-full h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* 3. Location/Info - Reduced margin-top slightly to keep the "unit" tight */}
        <p className="text-lg md:text-2xl font-medium mt-8 opacity-90 uppercase tracking-[0.4em]">
          Spring, TX
        </p>

        {/* 4. Social Icons */}
        <div className="flex justify-center gap-10 mt-12 text-2xl md:text-4xl">
          <a href="https://www.facebook.com/IglesiaUnaEsperanza/" className="hover:text-blue-400 transition-all hover:scale-110"><FaFacebook /></a>
          <a href="https://www.instagram.com/onehopechurchspring/" className="hover:text-pink-400 transition-all hover:scale-110"><FaInstagram /></a>
          <a href="https://www.youtube.com/@iglesiaunaesperanza4112" className="hover:text-red-500 transition-all hover:scale-110"><FaYoutube /></a>
        </div>
      </div>

      {/* Optional: Scroll Indicator (helps the user realize there is more below since it's full screen) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;