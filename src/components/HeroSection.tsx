
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar } from 'lucide-react';
import { CalendlyModal } from '@/components/CalendlyModal';

export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll to content
  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"
    >
      {/* Modern animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cloud-purple/30 to-cloud-blue/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-cloud-lightViolet/20 to-cloud-purple/10 blur-3xl animate-float-delay"></div>
        
        {/* Original geometric shapes */}
        <div className="absolute top-1/4 right-1/5 w-32 h-32 border border-cloud-purple/30 rounded-lg rotate-12 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-20 h-20 border border-cloud-blue/30 rounded-full animate-pulse-slow"></div>
        
        {/* NEW: Additional contemporary geometric shapes */}
        {/* 1. Triangular shape with gradient and animation */}
        <div className="absolute top-[15%] right-[15%] w-36 h-36 animate-float" style={{ 
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "linear-gradient(225deg, #b767d5 0%, #6628c8 100%)",
          opacity: 0.25
        }}></div>
        
        {/* 2. Rotating hexagon with glow effect */}
        <div className="absolute bottom-[20%] right-[30%] w-28 h-28 shadow-lg animate-rotate-slow" style={{ 
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          background: "linear-gradient(90deg, #2e3192 0%, #0032f8 100%)",
          boxShadow: "0 0 15px #0032f8",
          opacity: 0.2
        }}></div>
        
        {/* 3. Pulsing wave pattern */}
        <svg 
          className="absolute top-[30%] left-[10%] w-40 h-40 animate-pulse-slow opacity-30"
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,50 Q25,30 50,50 Q75,70 100,50" 
            fill="none" 
            stroke="#b767d5" 
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path 
            d="M0,55 Q25,35 50,55 Q75,75 100,55" 
            fill="none" 
            stroke="#6628c8" 
            strokeWidth="2"
            strokeDasharray="3,3"
            style={{ animationDelay: "0.5s" }}
          />
          <path 
            d="M0,45 Q25,25 50,45 Q75,65 100,45" 
            fill="none" 
            stroke="#0032f8" 
            strokeWidth="2"
            strokeDasharray="7,3"
            style={{ animationDelay: "0.2s" }}
          />
        </svg>
        
        {/* Floating dots grid */}
        <div className="grid-dots"></div>
        
        {/* Moving gradient line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cloud-purple/50 to-transparent animate-pulse-slow"></div>
      </div>
      
      {/* 3D perspective container */}
      <div className="container mx-auto px-4 z-10 relative perspective">
        <div className="max-w-3xl mx-auto text-center transform transition-all duration-700 hover:translate-z-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent animate-gradient">
            {t('heroHeadline')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CalendlyModal>
              <Button className="btn-primary text-lg px-8 py-6 flex items-center gap-2 group">
                <Calendar className="h-5 w-5 group-hover:animate-bounce" />
                <span className="relative">
                  {t('ctaButton')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Button>
            </CalendlyModal>
            <Button 
              variant="outline" 
              className="px-6 py-3 text-cloud-purple border-cloud-purple hover:bg-cloud-purple/10 dark:border-cloud-lightViolet dark:text-cloud-lightViolet dark:hover:bg-cloud-lightViolet/10 group"
              onClick={scrollToContent}
            >
              <span className="relative">
                {t('learnMore')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cloud-purple dark:bg-cloud-lightViolet transition-all group-hover:w-full"></span>
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300"
          onClick={scrollToContent}
        >
          <ArrowDown className="h-5 w-5 text-gray-700 dark:text-gray-300 animate-bounce" />
        </Button>
      </div>
      
      {/* Decorative tech pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </div>
  );
}

