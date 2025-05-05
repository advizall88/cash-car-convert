
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lobo's Car Removal</h3>
            <p className="text-gray-300 mb-4 italic">{t('footer.tagline')}</p>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={20} className="text-secondary mt-1" />
              <div>
                <p className="text-white">{t('footer.address')}</p>
                <p className="text-gray-400 text-sm">{t('footer.service_area')}</p>
              </div>
            </div>
            <a href="tel:5088164697" className="flex items-center gap-2 text-white hover:text-secondary transition-colors">
              <Phone size={20} />
              {t('footer.phone')}
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-300 hover:text-secondary transition-colors">
                {t('nav.home')}
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-secondary transition-colors">
                {t('nav.how')}
              </a>
              <a href="#why-choose" className="text-gray-300 hover:text-secondary transition-colors">
                {t('nav.why')}
              </a>
              <a href="#get-offer" className="text-gray-300 hover:text-secondary transition-colors">
                {t('nav.offer')}
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition-colors">
              <Facebook size={20} />
              Facebook
            </a>
            <div className="mt-8">
              <img src="https://www.bbb.org/TerminusContent/dist/img/bbb-accredited-business-logo-5f2f93ed.png" alt="Better Business Bureau" className="w-16 h-auto" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
