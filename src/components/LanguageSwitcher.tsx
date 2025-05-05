
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute top-20 right-4 z-40 flex gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-md transition-all duration-300 hover:shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full px-2 py-0 h-8 ${language === 'en' ? 'bg-secondary text-white' : 'text-dark-text'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-full px-2 py-0 h-8 ${language === 'pt-br' ? 'bg-secondary text-white' : 'text-dark-text'}`}
        onClick={() => setLanguage('pt-br')}
      >
        PT
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
