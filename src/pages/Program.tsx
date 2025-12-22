
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { program } from '../data/mockData';
import { Clock, MapPin, User, Tag } from 'lucide-react';

const Program: React.FC = () => {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState(1);

  const filteredItems = program.filter(item => item.day === activeDay);

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-12">{t('program_title')}</h1>
        
        <div className="flex gap-4 mb-16 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveDay(1)}
            className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
              activeDay === 1 ? 'bg-neutral text-primary' : 'text-white/50 hover:text-white'
            }`}
          >
            {t('program_day1')}
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
              activeDay === 2 ? 'bg-neutral text-primary' : 'text-white/50 hover:text-white'
            }`}
          >
            {t('program_day2')}
          </button>
        </div>

        <div className="space-y-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-neutral rounded-2xl p-6 md:p-10 text-primary flex flex-col md:flex-row gap-8 items-start md:items-center hover:translate-y-[-4px] transition-all group"
              >
                <div className="flex-shrink-0 w-32">
                  <div className="flex items-center gap-2 text-primary/40 mb-1 font-bold">
                    <Clock size={16} />
                    <span>TIME</span>
                  </div>
                  <div className="text-2xl font-black">{item.time}</div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-highlight text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight group-hover:text-highlight transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-primary/60 font-medium">
                    <div className="flex items-center gap-2">
                      <User size={18} className="text-accent" />
                      <span>{item.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-accent" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button className="bg-primary text-white p-4 rounded-xl hover:bg-accent transition-colors">
                    <Tag size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-white/30 text-xl font-medium">
              No sessions scheduled for this day yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Program;
