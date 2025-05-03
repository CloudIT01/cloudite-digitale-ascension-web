
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card group relative overflow-hidden">
      {/* Adding subtle decorative element */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-cloud-purple/5 rounded-full" />
      
      <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-lg bg-cloud-purple/10 text-cloud-purple group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-cloud-purple transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
