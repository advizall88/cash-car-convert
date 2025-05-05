
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone } from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Lobo's</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-dark-text hover:text-primary transition-colors">
            {t('nav.home')}
          </a>
          <a href="#how-it-works" className="text-dark-text hover:text-primary transition-colors">
            {t('nav.how')}
          </a>
          <a href="#why-choose" className="text-dark-text hover:text-primary transition-colors">
            {t('nav.why')}
          </a>
          <a href="#get-offer" className="text-dark-text hover:text-primary transition-colors">
            {t('nav.offer')}
          </a>
        </nav>
        
        <a href="tel:5088164697" className="flex items-center gap-2 text-primary font-semibold">
          <Phone size={20} />
          <span className="hidden md:inline">(508) 816-4697</span>
        </a>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-3 px-4 flex justify-between z-50 transition-all duration-300 transform ${isScrolled ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
        <a href="tel:5088164697" className="cta-button bg-vibrant-red flex-1 mx-2 flex items-center justify-center gap-2">
          <Phone size={18} />
          {t('hero.cta_secondary')}
        </a>
        <a href="#get-offer" className="cta-button bg-vibrant-blue flex-1 mx-2 text-center">
          {t('offer_strip.cta')}
        </a>
      </div>
    </header>
  );
};

export default Header;
