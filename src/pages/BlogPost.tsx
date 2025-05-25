
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ContentSection } from '@/components/layout/ContentSection';
import { BlogPost as BlogPostComponent } from '@/components/BlogPost';
import { Newsletter } from '@/components/Newsletter';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.id === slug);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If post doesn't exist, redirect to blog index
  if (!post) {
    return <Navigate to="/blog" />;
  }

  const heroSection = (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full mb-8"></div>
      </div>
    </section>
  );

  return (
    <PageLayout heroSection={heroSection}>
      {/* Blog Post Content */}
      <ContentSection backgroundColor="white" padding="medium">
        <BlogPostComponent 
          title={post.title}
          content={post.content}
          date={post.date}
          author={post.author}
          image={post.image}
        />
      </ContentSection>
      
      {/* Newsletter Section */}
      <ContentSection backgroundColor="gray">
        <Newsletter />
      </ContentSection>
    </PageLayout>
  );
};

export default BlogPostPage;
