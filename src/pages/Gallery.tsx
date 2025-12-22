
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { gallery } from '../data/mockData';
import { Play, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  type FilterType = 'all' | 'photo' | 'video' | 'day1' | 'day2';
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredItems = gallery.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  const filters = [
    { id: 'all', label: t('filter_all') },
    { id: 'photo', label: t('filter_photos') },
    { id: 'video', label: t('filter_videos') },
    { id: 'day1', label: 'Day 1' },
    { id: 'day2', label: 'Day 2' },
  ];

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{t('gallery_title')}</h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">{t('gallery_subtitle')}</p>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as FilterType)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === f.id ? 'bg-highlight text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 cursor-pointer shadow-lg"
            >
              <img 
                src={item.url} 
                alt="Event moment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {item.type === 'video' ? (
                    <div className="w-16 h-16 bg-neutral rounded-full flex items-center justify-center text-primary shadow-2xl">
                      <Play size={28} fill="currentColor" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md">
                      <Maximize2 size={28} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Mockup */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <button className="p-3 bg-white/5 rounded-full text-white/40 hover:bg-white/10 transition-colors"><ChevronLeft size={24} /></button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-neutral text-primary font-bold">1</button>
            <button className="w-10 h-10 rounded-full bg-white/5 text-white/40 font-bold hover:bg-white/10">2</button>
            <button className="w-10 h-10 rounded-full bg-white/5 text-white/40 font-bold hover:bg-white/10">3</button>
            <span className="text-white/20">...</span>
          </div>
          <button className="p-3 bg-white/5 rounded-full text-white/40 hover:bg-white/10 transition-colors"><ChevronRight size={24} /></button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
