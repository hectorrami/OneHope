import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">

        {/* Column 1: Logo & Mission */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-black tracking-tighter">
            Iglesia Una Esperanza
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            A community dedicated to sharing the message of hope and faith.
            Join us this Sunday as we grow together.
          </p>
          <div className="flex gap-4 text-xl mt-2">
                    <div className="flex justify-center gap-10 mt-12 text-2xl md:text-4xl">
          <a href="https://www.facebook.com/IglesiaUnaEsperanza/" className="hover:text-blue-400 transition-all hover:scale-110"><FaFacebook /></a>
          <a href="https://www.instagram.com/onehopechurchspring/" className="hover:text-pink-400 transition-all hover:scale-110"><FaInstagram /></a>
          <a href="https://www.youtube.com/@iglesiaunaesperanza4112" className="hover:text-red-500 transition-all hover:scale-110"><FaYoutube /></a>
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;