import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary/95 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-neutral rounded flex items-center justify-center font-bold text-primary">M</div>
              <span className="text-xl font-bold text-white">MFY Events</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t('hero_description')}
            </p>
          </div>
          <div>
            <h4 className="text-neutral font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav_about')}</Link></li>
              <li><Link to="/program" className="hover:text-white transition-colors">{t('nav_program')}</Link></li>
              <li><Link to="/speakers" className="hover:text-white transition-colors">{t('nav_speakers')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav_contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} MFY {t('copyright')}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;