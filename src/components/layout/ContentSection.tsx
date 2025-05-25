
import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'transparent';
  padding?: 'small' | 'medium' | 'large';
}

export function ContentSection({ 
  children, 
  className = "",
  backgroundColor = 'white',
  padding = 'medium'
}: ContentSectionProps) {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    transparent: ''
  };

  const paddingClasses = {
    small: 'py-8',
    medium: 'py-16',
    large: 'py-20'
  };

  return (
    <section className={`${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
