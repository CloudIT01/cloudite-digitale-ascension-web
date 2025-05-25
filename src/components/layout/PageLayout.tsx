
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
  heroSection?: React.ReactNode;
  className?: string;
}

export function PageLayout({ 
  children, 
  showNewsletter = true, 
  heroSection,
  className = ""
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      
      <main className={className}>
        {heroSection && heroSection}
        {children}
      </main>
      
      <Footer />
    </>
  );
}
