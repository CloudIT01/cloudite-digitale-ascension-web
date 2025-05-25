
import React, { useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroTemplate } from '@/components/layout/HeroTemplate';
import { ContentSection } from '@/components/layout/ContentSection';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { Newsletter } from '@/components/Newsletter';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink 
} from '@/components/ui/pagination';

const Blog = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSection = (
    <HeroTemplate
      title={t('blog')}
      description="Découvrez nos articles sur le marketing digital, le copywriting, les réseaux sociaux et bien plus encore."
    />
  );

  return (
    <PageLayout heroSection={heroSection}>
      {/* Blog Posts */}
      <ContentSection backgroundColor="white">
        <BlogGrid />

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </ContentSection>
      
      {/* Newsletter Section */}
      <ContentSection backgroundColor="gray">
        <Newsletter />
      </ContentSection>
    </PageLayout>
  );
};

export default Blog;
