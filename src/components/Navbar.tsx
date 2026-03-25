import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sundays', href: '#sunday-gathering' },
    { name: 'Bible Study', href: '#thursday-gathering' },
    { name: 'Give', href: '#giving' },
    { name: 'Watch Online', href: '#sermons' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Left Side: Small branding or simple text */}
        <div className={`font-black tracking-tighter text-2xl uppercase ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold uppercase text-xs tracking-widest hover:opacity-70 transition-opacity ${isScrolled ? 'text-slate-900' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#giving"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition-all"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className={`fixed top-6 right-6 md:hidden text-3xl z-[110] ${isOpen || !isScrolled ? 'text-white' : 'text-slate-900'}`}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div className={`fixed inset-0 w-screen h-screen bg-slate-950 transition-all duration-500 ease-in-out z-[105] md:hidden flex flex-col items-center justify-center gap-8 overflow-hidden ${isOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'
        }`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleMenu}
            className="text-white text-4xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;