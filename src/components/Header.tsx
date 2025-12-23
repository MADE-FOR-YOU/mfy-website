import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../../public/logo.png'

const Header: React.FC = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: t('nav_home'), path: '/' },
        { name: t('nav_about'), path: '/about' },
        { name: t('nav_program'), path: '/program' },
        { name: t('nav_speakers'), path: '/speakers' },
        { name: t('nav_gallery'), path: '/gallery' },
        { name: t('nav_contact'), path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-12 h-10">
                        <img src={logo} alt="logo" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-neutral' : 'text-white/70 hover:text-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold hover:bg-white/5 transition-colors"
                        >
                            <Globe size={14} />
                            {language.toUpperCase()}
                        </button>
                        <Link
                            to="/contact"
                            className="bg-highlight hover:bg-highlight/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-highlight/20"
                        >
                            {t('nav_register')}
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-primary border-b border-white/5 p-6 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-semibold text-white/90 hover:text-neutral"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <hr className="border-white/10 my-2" />
                        <button
                            onClick={() => {
                                setLanguage(language === 'en' ? 'fr' : 'en');
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-2 text-white/70"
                        >
                            <Globe size={18} />
                            {language === 'en' ? 'Français' : 'English'}
                        </button>
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full bg-highlight text-center text-white py-3 rounded-xl font-bold mt-2"
                        >
                            {t('nav_register')}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;