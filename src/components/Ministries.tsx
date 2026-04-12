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
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Kids
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-10">
            At One Hope Kids, children meet Jesus, are surrounded by His love, and are encouraged to make a difference wherever they go!
            (Ages 3–8)
          </p>
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
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Juniors
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-10">
            At One Hope Juniors, children build friendships, have fun learning about Jesus, and get equipped to live boldly for Him!
            (Ages 9–12)
          </p>
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
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Youth
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-10">
            One Hope Youth is where students discover more about God’s perfect plan of redemption, build real community, step into leadership, and are activated to impact the world for Him!
            (Ages 13–18)
          </p>
        </div>

      </div>
    </section>
  );
};

export default Ministries;