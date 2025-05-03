
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card group relative overflow-hidden rounded-xl border-2 border-cloud-purple shadow-[0_10px_25px_rgba(102,40,200,0.2)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cloud-purple/5 rounded-full -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cloud-purple/5 rounded-full -ml-10 -mb-10" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-lg bg-cloud-purple/10 text-cloud-purple group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-cloud-purple transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
