
import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Newsletter } from '@/components/Newsletter';
import { PageLayout } from '@/components/layout/PageLayout';
import { ContentSection } from '@/components/layout/ContentSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { CookieConsent } from '@/components/CookieConsent';
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ContentSection backgroundColor="white">
        <div id="services">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ourServices')}</h2>
            <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
          </div>
          
          <ServicesGrid />
        </div>
      </ContentSection>
      
      {/* Newsletter Section */}
      <ContentSection backgroundColor="gray">
        <Newsletter />
      </ContentSection>
      
      <CookieConsent />
    </PageLayout>
  );
};

export default Index;
