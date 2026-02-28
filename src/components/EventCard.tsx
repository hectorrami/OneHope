import React from 'react';

interface EventProps {
  title: string;
  date: string;
  image: string;
  category: string;
}

const EventCard: React.FC<EventProps> = ({ title, date, image, category }) => {
  return (
    <div className="group cursor-pointer overflow-hidden bg-white shadow-lg rounded-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <p className="text-blue-600 font-bold text-sm mb-1">{date}</p>
        <h3 className="text-xl font-black text-slate-900 leading-tight uppercase italic">
          {title}
        </h3>
        <button className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default EventCard;