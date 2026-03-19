import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('images/heroMain.jpg')" }}
    >
      {/* 1. Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 2. Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4">

        {/* Logo and Text Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

          {/* THE LOGO CIRCLE
              - bg-white: The background color of the circle
              - bg-center bg-no-repeat: keeps the transparent PNG centered
              - bg-[length:65%]: Scales the transparent logo so it doesn't hit the edges
          */}
          <div className="relative flex-none">
            {/* I have increased the mobile max size (w-10 to w-20) and the desktop max size (w-36 to w-64).
      The h-auto ensures that the aspect ratio of the actual logo image is preserved perfectly. */}
            <div className="w-15 h-15 md:w-64 md:h-64 flex items-center justify-center">

              {/* Use an <img> tag for the logo with a clear alt text */}
              <img
                src="images/logo.png"
                alt="Una Esperanza Iglesia Cristiana Logo"
                className="max-w-full max-h-full h-auto w-auto"
              />
            </div>
          </div>


          {/* Text Block */}
          <div className="flex flex-col text-center md:text-left leading-none">
            {/* Main brand name: lowercase and extra tight tracking */}
            <h1 className="text-6xl md:text-[6.5rem] font-black lowercase tracking-[-0.06em]">
              unaesperanza
            </h1>

            {/* Sub-brand: wide cinematic tracking */}
            <p className="text-lg md:text-2xl font-bold uppercase tracking-[0.4em] mt-2 ml-1">
              IGLESIA CRISTIANA
            </p>
          </div>
        </div>

        {/* 3. Location/Info */}
        <p className="text-lg md:text-xl font-medium mt-12 opacity-80 uppercase tracking-[0.2em]">
          Spring, TX
        </p>

        {/* 4. Social Icons */}
        <div className="flex justify-center gap-8 mt-12 text-2xl md:text-3xl">
          <a href="" className="hover:text-blue-400 transition-all hover:scale-110"><FaFacebook /></a>
          <a href="" className="hover:text-pink-400 transition-all hover:scale-110"><FaInstagram /></a>
          <a href="" className="hover:text-red-500 transition-all hover:scale-110"><FaYoutube /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;