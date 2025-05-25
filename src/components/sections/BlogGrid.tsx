
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

export function BlogGrid() {
  // Enhanced image mapping for better article relevance
  const getArticleImage = (postId: string, defaultImage: string) => {
    const imageMap: { [key: string]: string } = {
      '1': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', // Sales funnel - monitor with analytics
      '2': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Social media - woman using laptop for social media
    };
    
    return imageMap[postId] || defaultImage;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {blogPosts.map((post) => (
        <article 
          key={post.id}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-cloud-purple shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={getArticleImage(post.id, post.image)} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white/80 text-sm">{post.date} • Par {post.author}</p>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 hover:text-cloud-purple dark:hover:text-cloud-lightViolet transition-colors">
              <Link to={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>
              <Button variant="link" className="text-cloud-purple dark:text-cloud-lightViolet px-0 hover:underline">
                Lire l'article
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
