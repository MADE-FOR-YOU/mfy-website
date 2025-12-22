
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbulb, Calendar, Globe, Users, School, Rocket } from 'lucide-react';
import { speakers } from '../data/mockData';

interface CoreValue {
  icon: React.ReactElement<{ size?: number | string }>;
  title: string;
  desc: string;
}

const About: React.FC = () => {
  const { t } = useLanguage();

  const historyItems = [
    { icon: <Lightbulb />, title: 'The Spark: MFY is Born', desc: 'A brief description of our founding vision and the initial idea.' },
    { icon: <Calendar />, title: 'First Annual Event', desc: 'Details about our inaugural event and its impact.' },
    { icon: <Globe />, title: 'Expanding Our Reach', desc: 'How we\'ve grown over the years to include a wider audience.' },
  ];

  const coreValues:CoreValue[] = [
    { icon: <Users />, title: 'Connect', desc: 'Bring together diverse minds to foster meaningful connections.' },
    { icon: <School />, title: 'Inspire', desc: 'Ignite passion and creativity through inspiring talks and shared experiences.' },
    { icon: <Rocket />, title: 'Empower', desc: 'Provide tools and platforms to turn their ideas into reality.' },
  ];

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
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-neutral/10 text-neutral rounded-xl flex items-center justify-center mb-8">
             {React.cloneElement(value.icon, { size: 32 })}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-white/50 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Preview */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-6">{t('team_title')}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We are a dedicated group of volunteers and professionals passionate about creating an unforgettable experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.slice(0, 3).map((member) => (
            <div key={member.id} className="bg-secondary/10 p-8 rounded-2xl flex flex-col items-center text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white/10" />
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-neutral font-medium text-sm mb-4">{member.role}</p>
              <p className="text-white/40 text-sm leading-relaxed">{member.bio.substring(0, 80)}...</p>
            </div>
          ))}
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
