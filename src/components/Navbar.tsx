import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; // A clean hamburger icon

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent">
      {/* Logo Placeholder */}
      <div className="text-white font-black text-2xl tracking-tighter">
        ONE<span className="text-blue-500">HOPE</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-bold uppercase text-sm tracking-widest">
        <li className="hover:text-blue-400 cursor-pointer">Sermons</li>
        <li className="hover:text-blue-400 cursor-pointer">Ministries</li>
        <li className="hover:text-blue-400 cursor-pointer">Giving</li>
        <li className="bg-white text-black px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white transition-all">
          Visit Us
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white text-3xl">
        <HiMenuAlt3 />
      </div>
    </nav>
  );
};

export default Navbar;