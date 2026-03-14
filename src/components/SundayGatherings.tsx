import React from 'react';

const SundayGathering: React.FC = () => {
  return (
    <section className="bg-white text-slate-950 mt-16 md:mt-24 mb-16 md:mb-24 px-6 md:px-12 lg:px-20"> 
      {/* mt-24 and mb-24 create a balanced "island" for this content */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] md:min-h-[750px] items-stretch gap-10 md:gap-16">
        
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center py-10 md:py-0 order-2 md:order-1">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 text-lg md:text-xl font-bold rounded-sm uppercase tracking-tight">
              Sunday Gathering
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-8">
            Sundays At 10:00AM & 1:30PM
          </h2>

          <div className="space-y-6 text-slate-600 mb-12">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="font-bold text-slate-800 text-xl md:text-2xl leading-tight">
                One Hope Church<br />
                123 Church Street<br />
                Your City, State 12345
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              We gather weekly to sing together, learn from the Scriptures, serve one another, and make space for God’s grace. Join us as we grow together in faith and community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition-all text-center shadow-lg shadow-blue-600/20">
              Plan Your Visit →
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all text-center">
              More Information
            </button>
          </div>
        </div>

        {/* Right Column: Framed Image */}
        <div 
          className="h-[450px] md:h-auto w-full bg-cover bg-center bg-no-repeat order-1 md:order-2 
                     rounded-[2.5rem] border-[12px] border-white shadow-2xl shadow-slate-300"
          style={{ backgroundImage: "url('images/hero2.jpg')" }}
          aria-label="Worship Gathering"
        >
            {/* Inner rounded corners for the image overlay */}
            <div className="w-full h-full bg-black/5 rounded-2xl" />
        </div>

      </div>
    </section>
  );
};

export default SundayGathering;