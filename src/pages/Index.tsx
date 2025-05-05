
import React, { useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import OfferStrip from '@/components/OfferStrip';
import OfferForm from '@/components/OfferForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <LanguageSwitcher />
        <Header />
        
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <OfferStrip />
          <OfferForm />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
