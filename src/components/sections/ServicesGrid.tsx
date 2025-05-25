
import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MessageSquare, PenTool, BarChart3, Layout, Facebook, Search, FileText } from 'lucide-react';

export function ServicesGrid() {
  const { t } = useLanguage();

  // This data structure will be replaced with WordPress content in the conversion
  const services = [
    {
      title: t('copywritingTitle'),
      description: t('copywritingDesc'),
      icon: PenTool
    },
    {
      title: t('funnelsTitle'),
      description: t('funnelsDesc'),
      icon: MessageSquare
    },
    {
      title: t('landingTitle'),
      description: t('landingDesc'),
      icon: Layout
    },
    {
      title: t('socialTitle'),
      description: t('socialDesc'),
      icon: Facebook
    },
    {
      title: t('adsTitle'),
      description: t('adsDesc'),
      icon: BarChart3
    },
    {
      title: t('contentTitle'),
      description: t('contentDesc'),
      icon: FileText
    },
    {
      title: t('seoTitle'),
      description: t('seoDesc'),
      icon: Search
    },
    {
      title: t('auditTitle'),
      description: t('auditDesc'),
      icon: BarChart3
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
