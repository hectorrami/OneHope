import React from 'react';
import EventCard from './EventCard';
import eventData from '../data/events.json';

const EventList: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
            Upcoming Events
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-2"></div>
        </div>
        <button className="hidden md:block text-sm font-bold uppercase border-b-2 border-blue-600 pb-1">
          View All
        </button>
      </div>

      {/* The Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventData.map((event) => (
          <EventCard 
            key={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
            category={event.category}
          />
        ))}
      </div>
    </section>
  );
};

export default EventList;