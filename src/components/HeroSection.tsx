
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [raindrops, setRaindrops] = useState<Array<{ id: string; style: React.CSSProperties }>>([]);

  // Generate digital raindrops on component mount
  useEffect(() => {
    const createRaindrops = () => {
      const newRaindrops = [];
      const raindropCount = Math.min(Math.floor(window.innerWidth / 20), 50); // Responsive number of raindrops
      
      for (let i = 0; i < raindropCount; i++) {
        const size = Math.random() * 4 + 2; // Random size between 2-6px
        const left = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 5}s`;
        const opacity = Math.random() * 0.7 + 0.3; // Random opacity between 0.3-1
        
        // Different speeds
        let animationClass;
        const speed = Math.random();
        if (speed < 0.33) {
          animationClass = 'digital-rain-fast';
        } else if (speed < 0.66) {
          animationClass = 'digital-rain-medium';
        } else {
          animationClass = 'digital-rain-slow';
        }
        
        newRaindrops.push({
          id: `raindrop-${i}`,
          style: {
            left,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            animationDelay,
          },
          className: `digital-rain ${animationClass}`,
        });
      }
      
      setRaindrops(newRaindrops);
    };
    
    createRaindrops();
    
    // Recreate raindrops on window resize
    const handleResize = () => {
      createRaindrops();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      {/* Cloud animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cloud-purple/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-cloud-lightViolet/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-cloud-blue/20 blur-3xl animate-pulse-slow"></div>
        
        {/* Digital rain effect */}
        {raindrops.map((drop) => (
          <div 
            key={drop.id}
            className={`digital-rain ${Math.random() > 0.5 ? 'digital-rain-fast' : Math.random() > 0.5 ? 'digital-rain-medium' : 'digital-rain-slow'}`}
            style={drop.style}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
            {t('heroHeadline')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary text-lg px-8 py-6">
              {t('ctaButton')}
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 text-cloud-purple border-cloud-purple hover:bg-cloud-purple/10 dark:border-cloud-lightViolet dark:text-cloud-lightViolet dark:hover:bg-cloud-lightViolet/10"
              onClick={scrollToContent}
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-sm"
          onClick={scrollToContent}
        >
          <ArrowDown className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Button>
      </div>
    </div>
  );
}
