import React from 'react';

const Ministries: React.FC = () => {
  return (
    <section className="mt-16 md:mt-24 mb-16 md:mb-24 px-0">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-4">
          Ministries
        </h2>
      </div>

      {/* The 3-Column Color Block Grid - Increased min-h to 900px */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[800px] md:min-h-[900px]">
        
        {/* Ministry 1: Baby Nursery (Teal/Mint) */}
        <div className="bg-[#a6e1e3] flex flex-col items-center justify-center py-20 md:py-32 px-12 lg:p-16 text-center">
          {/* Increased max-w to 380px for a larger image presence */}
          <div className="relative w-full aspect-square max-w-[320px] lg:max-w-[380px] mb-12 overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl">
            <img 
              src="images/kids.jpg" 
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              alt="Nursery"
            />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
            Baby Nursery
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-10">
            Join us this Sunday morning. We'd love to meet you, show you around, and help you find your community.
          </p>
          <button className="bg-white text-[#a6e1e3] px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg">
            Find Your Place
          </button>
        </div>

        {/* Ministry 2: Juniors Ministry (Sky Blue) */}
        <div className="bg-[#4a82d1] flex flex-col items-center justify-center py-20 md:py-32 px-12 lg:p-16 text-center border-y md:border-y-0 md:border-x border-white/10">
          <div className="relative w-full aspect-square max-w-[320px] lg:max-w-[380px] mb-12 overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl">
            <img 
              src="images/juniors.jpg" 
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              alt="Juniors"
            />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
            Juniors Ministry
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-10">
            Commit to attending six Sundays in a row. It takes time to find home, but we are here for you.
          </p>
          <button className="bg-white text-[#4a82d1] px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg">
            Get Started
          </button>
        </div>

        {/* Ministry 3: Youth Ministry (Deep Blue) */}
        <div className="bg-[#1a1da1] flex flex-col items-center justify-center py-20 md:py-32 px-12 lg:p-16 text-center">
          <div className="relative w-full aspect-square max-w-[320px] lg:max-w-[380px] mb-12 overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl">
            <img 
              src="images/youth.jpg" 
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              alt="Youth"
            />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
            Youth Ministry
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-10">
            A place for students to belong, ask questions, and discover a real relationship with Jesus.
          </p>
          <button className="bg-white text-[#1a1da1] px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Ministries;