
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { speakers } from '../data/mockData';

const Speakers: React.FC = () => {
  const { language } = useLanguage();

  const getTranslatedText = (text: { en: string; fr: string }) => {
    return text[language] || text.en;
  };

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          {language === 'fr' ? 'Rencontrez nos experts' : 'Meet the Experts'}
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          {language === 'fr' 
            ? 'Apprenez des leaders et innovateurs qui façonnent le futur. Nos experts partagent leurs idées, expériences et vision.'
            : 'Learn from industry leaders and innovators who are shaping the future. Our lineup of experts is here to share their insights, experience, and vision.'
          }
        </p>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker) => {
            const name =(speaker.name);
            return (
              <div 
                key={speaker.id} 
                className="bg-neutral rounded-3xl p-8 text-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-110"></div>
                    <img 
                      src={speaker.image} 
                      alt={name} 
                      className="w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-lg relative z-10"
                    />
                  </div>
                  <h3 className="text-2xl font-black mb-1">{name}</h3>
                  <p className="text-accent font-bold text-sm uppercase tracking-widest mb-6">
                    {getTranslatedText(speaker.role)}
                  </p>
                  <p className="text-primary/70 leading-relaxed mb-8 ">
                    {getTranslatedText(speaker.bio)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Speakers;
