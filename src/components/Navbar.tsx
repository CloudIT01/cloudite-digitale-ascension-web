
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, Calendar } from 'lucide-react';
import { CalendlyModal } from '@/components/CalendlyModal';

export function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check if current route matches given path
  const isActive = (path: string) => location.pathname === path;

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 md:py-4"
    >
      <div 
        className={`container mx-auto rounded-xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm' 
            : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm'
        }`}
      >
        <nav className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-cloud-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cloud-purple to-cloud-darkBlue bg-clip-text text-transparent">
                CloudITechnologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}
              >
                {t('home')}
              </Link>
              <Link 
                to="/a-propos" 
                className={`nav-link ${isActive('/a-propos') ? 'active-nav-link' : ''}`}
              >
                {t('about')}
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active-nav-link' : ''}`}
              >
                {t('contact')}
              </Link>
              <Link 
                to="/blog" 
                className={`nav-link ${isActive('/blog') ? 'active-nav-link' : ''}`}
              >
                {t('blog')}
              </Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSwitcher />
              <CalendlyModal>
                <Button className="btn-primary ml-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {t('ctaButton')}
                </Button>
              </CalendlyModal>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-3 px-2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-cloud-purple/10 text-cloud-purple' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/a-propos" 
                className={`px-3 py-2 rounded-md ${isActive('/a-propos') ? 'bg-cloud-purple/10 text-cloud-purple' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-cloud-purple/10 text-cloud-purple' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link 
                to="/blog" 
                className={`px-3 py-2 rounded-md ${isActive('/blog') ? 'bg-cloud-purple/10 text-cloud-purple' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t('blog')}
              </Link>
              <CalendlyModal>
                <Button className="btn-primary flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {t('ctaButton')}
                </Button>
              </CalendlyModal>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

