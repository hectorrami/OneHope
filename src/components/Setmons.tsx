import React, { useEffect } from 'react';

const Sermons: React.FC = () => {
  useEffect(() => {
    // 1. Create a unique ID for the script to prevent duplicates
    const scriptId = 'elfsight-platform-script';
    
    // 2. Only add the script if it doesn't already exist in the document
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-slate-950 text-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm">
              Latest Sermons
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-2">
              Watch Online
            </h2>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed">
              Missed a service? Catch up on our latest teachings and worship 
              gatherings. Browse our full YouTube archive directly below.
            </p>
          </div>
        </div>

        {/* Elfsight Gallery Container */}
        {/* This container uses the same styling as our previous video player for consistency */}
        <div className="w-full bg-slate-900/50 rounded-[2.5rem] p-4 md:p-8 border-[12px] border-slate-900 shadow-2xl shadow-black">
          
          {/* Elfsight Widget Div */}
          <div 
            className="elfsight-app-d13f2262-270b-4583-939c-73a725c1fcc0" 
            data-elfsight-app-lazy
          ></div>
          
        </div>

        {/* Bottom Schedule Reminder */}
        <div className="mt-12 text-center md:text-left">
          <p className="text-slate-500 font-medium italic">
            Gathering live every Sunday at 10:00AM & 1:30PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sermons;