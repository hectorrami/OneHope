import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; // A clean hamburger icon

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent">
      {/* Logo Placeholder */}
      <div className="text-white font-black text-2xl tracking-tighter">
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white text-3xl">
        <HiMenuAlt3 />
      </div>
    </nav>
  );
};

export default Navbar;