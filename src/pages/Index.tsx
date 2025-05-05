
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import OfferStrip from '@/components/OfferStrip';
import OfferForm from '@/components/OfferForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
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
