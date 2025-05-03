
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Solutions marketing digitales innovantes pour stimuler votre croissance.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('home')}</Link></li>
              <li><Link to="/a-propos" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('about')}</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('contact')}</Link></li>
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('legalNotice')}</Link></li>
              <li><Link to="/politique-de-confidentialite" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('privacyPolicy')}</Link></li>
              <li><Link to="/politique-des-cookies" className="text-gray-600 dark:text-gray-400 hover:text-cloud-purple dark:hover:text-cloud-lightViolet">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone size={16} />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail size={16} />
                <span>contact@clouditechnologies.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
          <p>&copy; {currentYear} CloudITechnologies. {t('allRightsReserved')}.</p>
        </div>
      </div>
    </footer>
  );
}
