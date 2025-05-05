
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';
import { BlogPost as BlogPostComponent } from '@/components/BlogPost';
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

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section with slightly reduced height for blog posts */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full mb-8"></div>
          </div>
        </section>
        
        {/* Blog Post Content */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <BlogPostComponent 
              title={post.title}
              content={post.content}
              date={post.date}
              author={post.author}
              image={post.image}
            />
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Newsletter />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPostPage;
