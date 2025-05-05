
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center pt-20 pb-16 opacity-90">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573497019236-61f323146b60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3)', zIndex: -1 }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-normal text-white opacity-90 mb-10">
            {t('hero.subtitle')}
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="#get-offer" className="cta-button bg-vibrant-blue flex items-center justify-center gap-2 text-lg">
              {t('hero.cta_primary')}
              <ArrowRight size={20} />
            </a>
            
            <a href="tel:5088164697" className="cta-button bg-vibrant-red flex items-center justify-center gap-2 text-lg">
              <Phone size={20} />
              {t('hero.cta_secondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
