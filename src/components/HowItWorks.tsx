
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clipboard, BadgeDollarSign, Truck } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  return (
    <section id="how-it-works" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">{t('how.title')}</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-vibrant-purple text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Clipboard size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">{t('how.step1_title')}</h3>
          <p className="text-gray-600">{t('how.step1_desc')}</p>
        </div>
        
        <div className="bg-white rounded-lg p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <BadgeDollarSign size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">{t('how.step2_title')}</h3>
          <p className="text-gray-600">{t('how.step2_desc')}</p>
        </div>
        
        <div className="bg-white rounded-lg p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-vibrant-red text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">{t('how.step3_title')}</h3>
          <p className="text-gray-600">{t('how.step3_desc')}</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
