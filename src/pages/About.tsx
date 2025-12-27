
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbulb, Calendar, Rocket, Sparkles, Handshake, Heart } from 'lucide-react';
import { speakers } from '../data/mockData';
import type { CoreValue } from '../types';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const getTranslatedText = (text: { en: string; fr: string }) => {
    return text[language] || text.en;
  };

  const historyItems = [
    { 
      icon: <Lightbulb />, 
      title: t('history_spark_title'), 
      desc: t('history_spark_desc')
    },
    { 
      icon: <Calendar />, 
      title: t('history_first_event_title'), 
      desc: t('history_first_event_desc')
    }
  ];

  const coreValues = [
    { 
      icon: <Sparkles className="w-8 h-8 mx-auto mb-4" />, 
      title: { 
        en: 'Promote', 
        fr: 'Promouvoir' 
      }, 
      desc: { 
        en: 'Promote youth entrepreneurship and creativity through innovative initiatives.', 
        fr: 'Promouvoir l\'entrepreneuriat jeune et la créativité à travers des initiatives innovantes.' 
      } 
    },
    { 
      icon: <Handshake className="w-8 h-8 mx-auto mb-4" />, 
      title: { 
        en: 'Collaborate', 
        fr: 'Collaborer' 
      }, 
      desc: { 
        en: 'Provide a collaborative space and expertise sharing for young entrepreneurs.', 
        fr: 'Fournir un espace de collaboration et de partage d\'expertise pour les jeunes entrepreneurs.' 
      } 
    },
    { 
      icon: <Rocket className="w-8 h-8 mx-auto mb-4" />, 
      title: { 
        en: 'Support', 
        fr: 'Soutenir' 
      }, 
      desc: { 
        en: 'Help young entrepreneurs develop and bring their projects to life.', 
        fr: 'Aider les jeunes entrepreneurs à développer leurs projets et à les concrétiser.' 
      } 
    },
    { 
      icon: <Heart className="w-8 h-8 mx-auto mb-4" />, 
      title: { 
        en: 'Contribute', 
        fr: 'Contribuer' 
      }, 
      desc: { 
        en: 'Contribute to the economic and social development of Cameroon.', 
        fr: 'Contribuer au développement économique et social du Cameroun.' 
      } 
    },
  ] satisfies CoreValue[];

  return (
    <div className="py-20">
      {/* Intro Header */}
      <section className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          {t('about_title')}
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {t('about_subtitle')}
        </p>
      </section>

      {/* History Timeline Card */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-neutral rounded-3xl p-8 md:p-16 text-primary shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8">{t('history_title')}</h2>
              <p className="text-primary/70 text-lg mb-12 leading-relaxed">
                {t('history_desc')}
              </p>
              <div className="space-y-12">
                {historyItems.map((item, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    {idx < historyItems.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-[-48px] w-px bg-primary/20"></div>
                    )}
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-primary/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
               <img 
                src="https://picsum.photos/id/1/800/1000" 
                alt="Event history" 
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 object-cover w-full h-full"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-6">{t('mission_title')}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t('mission_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value) => (
                <div key={value.title.en} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {React.cloneElement(value.icon, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{getTranslatedText(value.title)}</h3>
                  <p className="text-white/60">{getTranslatedText(value.desc)}</p>
                </div>
          ))}
        </div>
      </section>

      {/* Team Preview */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-6">{t('team_title')}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t('team_description')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.slice(0, 3).map((member) => {
            const name = (member.name);
            const role = getTranslatedText(member.role);
            const bio = getTranslatedText(member.bio);
            
            return (
              <div key={member.id} className="bg-secondary/10 p-8 rounded-2xl flex flex-col items-center text-center">
                <img 
                  src={member.image} 
                  alt={name} 
                  className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white/10" 
                />
                <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
                <p className="text-neutral font-medium text-sm mb-4">{role}</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  {bio.substring(0, 80)}...
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="bg-neutral rounded-3xl p-12 md:p-20 text-center text-primary relative overflow-hidden">
          <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[200%] bg-white/10 rotate-12 pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative">Ready to be part of the story?</h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto relative">
            Join our community, attend an event, or volunteer. There are many ways to get involved with MFY.
          </p>
          <button className="bg-accent text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-xl relative">
            {t('cta_involved')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
