import React from 'react';
import { FaXTwitter, FaInstagram, FaYoutube} from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        
        {/* Column 1: Logo & Mission */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-black tracking-tighter italic">
            ONE<span className="text-blue-600">HOPE</span>
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

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-blue-500">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-300">
            <li><a href="#" className="hover:text-white transition-colors">Sermons</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ministries</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Giving</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-blue-500">Resources</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-300">
            <li><a href="#" className="hover:text-white transition-colors">Prayer Request</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Life Groups</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter/Stay Connected */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-blue-500">Stay Updated</h4>
          <p className="text-sm text-slate-400 mb-4">Get weekly updates delivered to your inbox.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm text-xs uppercase transition-all">
              Subscribe
            </button>
          </form>
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