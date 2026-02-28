import React from 'react';
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';

const Schedule: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Join Our Gatherings
          </h2>
          <p className="text-slate-500 mt-2 font-medium uppercase tracking-widest text-sm">
            Worship & Word
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Sunday Services Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-black text-blue-600 mb-6 uppercase italic">Sundays</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600 text-xl">
                  <HiOutlineClock />
                </div>
                <div>
                  <h4 className="font-bold text-lg">11:00 AM — English Service</h4>
                  <p className="text-slate-500 text-sm">Main Sanctuary • Worship, Message & Kids Ministry</p>
                </div>
              </div>

              <div className="flex gap-4 border-t border-slate-100 pt-8">
                <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600 text-xl">
                  <HiOutlineClock />
                </div>
                <div>
                  <h4 className="font-bold text-lg">1:00 PM — Servicio en Español</h4>
                  <p className="text-slate-500 text-sm">Santuario Principal • Alabanza y Predicación</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bible Study Card */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase italic">Mid-Week Study</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit text-blue-400 text-xl">
                  <HiOutlineClock />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Thursdays @ 8:00 PM</h4>
                  <h5 className="text-blue-400 font-bold text-xs uppercase tracking-widest mt-1">Deep Dive Bible Study</h5>
                  <p className="text-slate-400 text-sm mt-2">An in-depth look at scripture and open discussion.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-sm">
                  <HiOutlineLocationMarker className="text-blue-400" />
                  <span className="font-medium">Childcare available for ages 0-5</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;