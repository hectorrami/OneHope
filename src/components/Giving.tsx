import React from 'react';

const OnlineGiving: React.FC = () => {
  // PASTE YOUR SQUARESPACE LINK HERE
  const GIVING_URL = "https://checkout.square.site/merchant/MLQYBHH7GTDFP/checkout/KM3BVDSYVFDLBVPHQFCEO3HR";

  return (
    // Updated background to 'bg-white' to match theme
    <section id="giving" className="bg-white text-slate-950 py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-slate-100">

      {/* Container - Replicated layout from 'Sunday Gathering' */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[350px] md:min-h-[350px] gap-10 md:gap-16">

        {/* Left Column: Content */}
        <div className="flex flex-col justify-center order-2 md:order-1 py-10 md:py-0">

          {/* Theme Accent: Blue Badge */}
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 text-lg md:text-xl font-bold rounded-sm uppercase tracking-tight">
              Stewardship
            </span>
          </div>

          {/* Theme Accent: Extra Bold, All Caps Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-8">
            Online Giving
          </h2>

          {/* Main Body */}
          <div className="space-y-6 text-slate-600 mb-12">
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              Giving just got easier. We've recently upgraded our giving platform to
              make it easier and more secure. Give a single gift, or schedule recurring
              giving using your checking account, debit, or credit card.
            </p>
          </div>

          {/* Theme Link-Button: Solid Blue with Shadow */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={GIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition-all text-center shadow-lg shadow-blue-600/20 inline-block"
            >
              Give Now →
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 md:order-2">
          {/* Theme Accent: Soft Rounded Image with Shadow */}
          <div className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200">
            <img
              src="images/offering.jpg"
              alt="Online Giving"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OnlineGiving;