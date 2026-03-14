import React from 'react';

const ThursdayGathering: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Using bg-slate-950 for a rich black. 
        Note: We use padding (py-24) instead of margin (mt-24) here 
        so the black background color fills the entire gap between sections.
      */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[550px] md:min-h-[750px] items-stretch gap-10 md:gap-16">
        
        {/* Left Column: Framed Image (Moved to left on desktop) */}
        <div 
          className="h-[450px] md:h-auto w-full bg-cover bg-center bg-no-repeat order-1 
                     rounded-[2.5rem] border-[12px] border-slate-900 shadow-2xl shadow-black"
          style={{ backgroundImage: "url('images/bibleStudy.jpg')" }} // Update this path
          aria-label="Thursday Bible Study"
        >
            {/* Subtle overlay to help the image sit well in a dark section */}
            <div className="w-full h-full bg-black/20 rounded-2xl" />
        </div>

        {/* Right Column: Content (Moved to right on desktop) */}
        <div className="flex flex-col justify-center py-10 md:py-0 order-2">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 text-lg md:text-xl font-bold rounded-sm uppercase tracking-tight">
              Mid-Week Study
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            Thursdays At 7:00PM
          </h2>

          <div className="space-y-6 text-slate-300 mb-12">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="font-bold text-white text-xl md:text-2xl leading-tight">
                Fellowship Hall<br />
                123 Church Street<br />
                Your City, State 12345
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              Dive deeper into the Word in a relaxed, conversational setting. Our Thursday night gatherings focus on community, Q&A, and practical application of faith in our daily lives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center shadow-lg shadow-blue-600/20">
              Join a Group →
            </button>
            <button className="border-2 border-slate-700 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all text-center">
              Current Series
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThursdayGathering;