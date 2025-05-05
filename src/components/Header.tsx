
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-playfair tracking-wide">Lobo's</h1>
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#home"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
                    )}
                  >
                    {t('nav.home')}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#how-it-works"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
                    )}
                  >
                    {t('nav.how')}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#why-choose"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
                    )}
                  >
                    {t('nav.why')}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#get-offer"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
                    )}
                  >
                    {t('nav.offer')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Phone Call Button */}
          <a href="tel:5088164697" className="hidden md:flex items-center gap-2 text-primary font-semibold border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/5 transition-all">
            <Phone size={20} />
            <span>(508) 816-4697</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-primary" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-full left-0 right-0 z-50">
          <nav className="flex flex-col p-4">
            <a href="#home" className="py-3 px-4 hover:bg-primary/5 rounded-md font-medium" onClick={toggleMobileMenu}>
              {t('nav.home')}
            </a>
            <Separator className="my-1" />
            <a href="#how-it-works" className="py-3 px-4 hover:bg-primary/5 rounded-md font-medium" onClick={toggleMobileMenu}>
              {t('nav.how')}
            </a>
            <Separator className="my-1" />
            <a href="#why-choose" className="py-3 px-4 hover:bg-primary/5 rounded-md font-medium" onClick={toggleMobileMenu}>
              {t('nav.why')}
            </a>
            <Separator className="my-1" />
            <a href="#get-offer" className="py-3 px-4 hover:bg-primary/5 rounded-md font-medium" onClick={toggleMobileMenu}>
              {t('nav.offer')}
            </a>
            <Separator className="my-2" />
            <a href="tel:5088164697" className="flex items-center gap-2 text-primary font-semibold my-2 py-3 px-4">
              <Phone size={20} />
              <span>(508) 816-4697</span>
            </a>
          </nav>
        </div>
      )}
      
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
