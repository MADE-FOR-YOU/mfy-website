
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Countdown from '../components/Countdown';
import { ArrowRight, Calendar, Users, Mic } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-highlight/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 container mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6">
          {t('hero_title')}
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-neutral mb-6 max-w-2xl">
          {t('hero_subtitle')}
        </h2>
        <p className="text-white/60 text-lg max-w-xl mb-12 leading-relaxed">
          {t('hero_description')}
        </p>

        <p className="text-sm font-bold tracking-widest uppercase text-white/30 mb-8">
          {t('hero_countdown_title')}
        </p>
        
        <Countdown />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
          <Link
            to="/program"
            className="group bg-neutral text-primary px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-neutral/10 flex items-center gap-2"
          >
            {t('hero_cta_program')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/speakers"
            className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
          >
            {t('hero_cta_speakers')}
          </Link>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="bg-primary-950/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                <Calendar size={32} />
              </div>
              <h3 className="text-3xl font-black text-white">2 Days</h3>
              <p className="text-white/40">October 25 - 26, 2025</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-neutral/10 text-neutral rounded-2xl flex items-center justify-center">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-black text-white">500+</h3>
              <p className="text-white/40">Attendees Joining</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-highlight/10 text-highlight rounded-2xl flex items-center justify-center">
                <Mic size={32} />
              </div>
              <h3 className="text-3xl font-black text-white">24+</h3>
              <p className="text-white/40">Expert Speakers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
