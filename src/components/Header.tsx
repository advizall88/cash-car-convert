
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Phone, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1' 
        : 'bg-white/95 backdrop-blur-lg py-2'}`}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3 relative"> {/* Further reduced horizontal padding */}
        <div className="flex justify-between items-center">
          {/* Logo with link to home */}
          <div className="flex items-center">
            <a href="#home" className="block">
              <img 
                src="/logo.png" 
                alt="Lobo's Logo" 
                className="h-28 w-auto object-contain" /* Increased size significantly (almost double) */
                style={{ maxHeight: '28px' }} /* Force specific size */
              />
            </a>
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                {[
                  { href: "#home", label: t('nav.home') },
                  { href: "#how-it-works", label: t('nav.how') },
                  { href: "#why-choose", label: t('nav.why') },
                  { href: "#get-offer", label: t('nav.offer') }
                ].map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink 
                      href={item.href}
                      className={cn(
                        "inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium text-black",
                        "bg-white border border-black/10 rounded-xl shadow-sm",
                        "transition-all duration-200",
                        "hover:shadow-md hover:translate-y-[-2px] hover:bg-black/5",
                        "active:translate-y-[1px] active:shadow-inner active:bg-black/10",
                        "focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-1"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Phone Call Button - Only on Desktop */}
          <a 
            href="tel:5088164697" 
            className="hidden md:flex items-center gap-2 text-black font-medium rounded-full px-6 py-2.5 transition-all border border-black/10 shadow-sm hover:shadow-md hover:bg-black hover:text-white hover:border-transparent hover:translate-y-[-2px] active:translate-y-[1px]"
          >
            <Phone size={18} strokeWidth={2} />
            <span>(508) 816-4697</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Language Switcher positioned below the header */}
        <LanguageSwitcher />
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/5 backdrop-blur-sm z-50 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`bg-white h-full w-[80%] max-w-sm shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <a href="#home" onClick={toggleMobileMenu}>
              <img 
                src="/logo.png" 
                alt="Lobo's Logo" 
                className="h-24 w-auto object-contain"
                style={{ maxHeight: '24px' }} /* Force specific size */
              />
            </a>
            <button 
              onClick={toggleMobileMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col p-4">
            {[
              { href: "#home", label: t('nav.home') },
              { href: "#how-it-works", label: t('nav.how') },
              { href: "#why-choose", label: t('nav.why') },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <a 
                  href={item.href} 
                  className="py-3 px-4 text-black font-medium bg-white border border-black/10 rounded-xl shadow-sm my-1 hover:shadow-md hover:bg-black/5 hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-inner transition-all" 
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </a>
                {index < 2 && <Separator className="my-2 bg-black/5" />}
              </React.Fragment>
            ))}
            
            {/* We're removing the "Get Your Offer" button from the mobile menu */}
          </nav>
        </div>
      </div>
      
      {/* Mobile Sticky CTA - Only showing the blue button and phone button */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] py-3 px-4 flex justify-between z-50 transition-all duration-300 transform ${isScrolled ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
        <a href="tel:5088164697" className="flex-1 mx-2 bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-transform active:scale-[0.98]">
          <Phone size={18} />
          {t('hero.cta_secondary')}
        </a>
      </div>
    </header>
  );
};

export default Header;
