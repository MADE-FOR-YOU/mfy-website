
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Countdown: React.FC = () => {
  const { t } = useLanguage();
  const targetDate = new Date('2025-10-25T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: t('countdown_days'), value: timeLeft.days },
    { label: t('countdown_hours'), value: timeLeft.hours },
    { label: t('countdown_minutes'), value: timeLeft.minutes },
    { label: t('countdown_seconds'), value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-12">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-20 h-24 md:w-28 md:h-32 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-sm">
            <span className="text-4xl md:text-5xl font-black text-neutral tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/50">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
