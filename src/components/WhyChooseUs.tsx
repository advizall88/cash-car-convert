
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { TruckIcon, DollarSign, Shield, FileQuestion } from 'lucide-react';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  return (
    <section id="why-choose" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">{t('why.title')}</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 flex items-start gap-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-vibrant-blue text-white rounded-full flex items-center justify-center">
            <TruckIcon size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{t('why.reason1_title')}</h3>
            <p className="text-gray-600">{t('why.reason1_desc')}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 flex items-start gap-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
            <DollarSign size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{t('why.reason2_title')}</h3>
            <p className="text-gray-600">{t('why.reason2_desc')}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 flex items-start gap-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-vibrant-purple text-white rounded-full flex items-center justify-center">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{t('why.reason3_title')}</h3>
            <p className="text-gray-600">{t('why.reason3_desc')}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 flex items-start gap-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-vibrant-red text-white rounded-full flex items-center justify-center">
            <FileQuestion size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{t('why.reason4_title')}</h3>
            <p className="text-gray-600">{t('why.reason4_desc')}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg inline-block">
          <div className="text-xl font-medium italic text-gray-700 mb-4">
            "Lobo's offered me $500 more than the other guys and picked up my car the same day. Couldn't be happier!"
          </div>
          <div className="text-secondary font-semibold">- Mike D., Worcester</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
