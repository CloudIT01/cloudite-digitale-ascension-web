
import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Newsletter } from '@/components/Newsletter';
import { ServiceCard } from '@/components/ServiceCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MessageSquare, PenTool, BarChart3, Layout, Facebook, Search, FileText } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ourServices')}</h2>
              <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                title={t('copywritingTitle')}
                description={t('copywritingDesc')}
                icon={PenTool}
              />
              <ServiceCard
                title={t('funnelsTitle')}
                description={t('funnelsDesc')}
                icon={MessageSquare}
              />
              <ServiceCard
                title={t('landingTitle')}
                description={t('landingDesc')}
                icon={Layout}
              />
              <ServiceCard
                title={t('socialTitle')}
                description={t('socialDesc')}
                icon={Facebook}
              />
              <ServiceCard
                title={t('adsTitle')}
                description={t('adsDesc')}
                icon={BarChart3}
              />
              <ServiceCard
                title={t('contentTitle')}
                description={t('contentDesc')}
                icon={FileText}
              />
              <ServiceCard
                title={t('seoTitle')}
                description={t('seoDesc')}
                icon={Search}
              />
              <ServiceCard
                title={t('auditTitle')}
                description={t('auditDesc')}
                icon={BarChart3}
              />
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Newsletter />
          </div>
        </section>
      </main>
      
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Index;
