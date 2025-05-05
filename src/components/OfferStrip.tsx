
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const OfferStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          {t('offer_strip.title')}
        </h2>
        
        <a 
          href="#get-offer" 
          className="cta-button inline-flex items-center justify-center gap-2 bg-vibrant-red text-white text-lg"
        >
          {t('offer_strip.cta')}
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default OfferStrip;
