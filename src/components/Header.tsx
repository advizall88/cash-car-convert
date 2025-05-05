
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
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t } = useLanguage();
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
        ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2' 
        : 'bg-white/95 backdrop-blur-lg py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-black font-playfair tracking-wide relative">
              <span className="relative z-10">Lobo's</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-black/5 rounded-full"></span>
            </h1>
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
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
                        "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors text-black hover:text-black relative focus:outline-none",
                        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                        "hover:after:scale-x-100 hover:after:origin-bottom-left"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Phone Call Button */}
          <a 
            href="tel:5088164697" 
            className="hidden md:flex items-center gap-2 text-black font-medium rounded-full px-6 py-2.5 transition-all border border-black/10 shadow-sm hover:shadow-md hover:bg-black hover:text-white hover:border-transparent"
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
            <h1 className="text-2xl font-bold text-black font-playfair">Lobo's</h1>
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
              { href: "#get-offer", label: t('nav.offer') }
            ].map((item, index) => (
              <React.Fragment key={index}>
                <a 
                  href={item.href} 
                  className="py-4 px-4 text-black font-medium hover:bg-black/5 rounded-lg transition-colors" 
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </a>
                {index < 3 && <Separator className="my-1 bg-black/5" />}
              </React.Fragment>
            ))}
            
            <div className="mt-8 p-4">
              <a 
                href="tel:5088164697" 
                className="flex items-center justify-center gap-2 text-white font-medium bg-black rounded-full py-3 px-6 shadow-md hover:bg-black/90 transition-colors"
              >
                <Phone size={18} />
                <span>(508) 816-4697</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] py-3 px-4 flex justify-between z-50 transition-all duration-300 transform ${isScrolled ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
        <a href="tel:5088164697" className="flex-1 mx-2 bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-transform active:scale-[0.98]">
          <Phone size={18} />
          {t('hero.cta_secondary')}
        </a>
        <a href="#get-offer" className="flex-1 mx-2 bg-white border border-black text-black py-3 rounded-lg text-center font-medium shadow-sm transition-transform active:scale-[0.98]">
          {t('offer_strip.cta')}
        </a>
      </div>
    </header>
  );
};

export default Header;
