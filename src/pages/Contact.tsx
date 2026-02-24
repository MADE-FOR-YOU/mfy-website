import React, { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, MapPin, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
   const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsLoading(true);
      emailjs.sendForm('service_nk1w7e9', 'template_gicmjqe', form.current, 'uS1-O4rcYVxMB6Z9E')
        .then(() => {
          console.log('Email sent successfully!');
          alert ('Email sent successfully!');
          form.current?.reset();
        }, () => {
          console.log('Email failed to send!');
          alert ('Email failed to send!');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{t('contact_title')}</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">{t('contact_subtitle')}</p>
      </section>

      <section className="container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl backdrop-blur-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/40">{t('form_name')}</label>
                <input
                  id='name'
                  name='name'
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neutral transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/40">{t('form_email')}</label>
                <input
                  id='email'
                  name='email'
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neutral transition-colors"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-white/40">{t('form_message')}</label>
              <textarea
                id='message'
                name='message'
                rows={6}
                placeholder="Type your message here..."
                className="w-full bg-primary/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neutral transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] disabled:scale-100 shadow-xl shadow-accent/20"
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {t('form_sending') || 'Sending...'}
                </>
              ) : (
                <>
                  <Send size={24} />
                  {t('form_submit')}
                </>
              )}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32">
          <div>
            <h3 className="text-3xl font-black text-white mb-8">{t('follow_us')}</h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Stay connected and be the first to know about our latest events and updates.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/madee4rryouu?igsh=MTk0MXh2bTQ0OTVzbA==" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"><Instagram size={28} /></a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"><Twitter size={28} /></a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"><Linkedin size={28} /></a>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary"><Mail size={20} /></div>
                <a href="mailto:madee4rryouu@gmail.com" className="hover:text-white transition-colors"><span>madee4rryouu@gmail.com</span></a>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary"><Phone size={20} /></div>
                <span className="hover:text-white transition-colors">+237 6 92 34 01 87</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white mb-8">{t('find_us')}</h3>
            <p className="text-white/50 mb-8">Visit us at our main venue. See the map below for directions.</p>
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">
              <img
                src="https://picsum.photos/id/122/800/600"
                alt="Map placeholder"
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-highlight/20 backdrop-blur-md p-6 rounded-3xl text-center border border-highlight/30">
                  <MapPin className="mx-auto text-highlight mb-2" size={32} />
                  <span className="text-white font-bold">Empire State Building</span>
                  <p className="text-white/60 text-xs">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
