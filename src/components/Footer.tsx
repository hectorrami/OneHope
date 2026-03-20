import React from 'react';
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

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
            <a href="#" className="hover:text-blue-500 transition-colors"><FaXTwitter /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
        <p>© {new Date().getFullYear()} One Hope Church. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;