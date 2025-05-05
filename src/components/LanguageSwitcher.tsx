
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-md">
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
