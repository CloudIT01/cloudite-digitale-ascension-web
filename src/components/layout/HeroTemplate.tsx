
import React from 'react';

interface HeroTemplateProps {
  title: string;
  subtitle?: string;
  description?: string;
  showGradientBar?: boolean;
  children?: React.ReactNode;
}

export function HeroTemplate({ 
  title, 
  subtitle, 
  description, 
  showGradientBar = true,
  children 
}: HeroTemplateProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
            {title}
          </h1>
          {showGradientBar && (
            <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
          )}
          {subtitle && (
            <h2 className="mt-6 text-xl text-gray-600 dark:text-gray-400">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
