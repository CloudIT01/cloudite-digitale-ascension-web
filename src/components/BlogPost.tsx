
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  title: string;
  content: React.ReactNode;
  date: string;
  author: string;
  image: string;
}

export function BlogPost({ title, content, date, author, image }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Article Header */}
      <div className="mb-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-4 text-cloud-purple hover:text-cloud-lightViolet gap-2">
            <ArrowLeft size={16} />
            Retour au blog
          </Button>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>Par {author}</span>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {content}
      </div>
    </article>
  );
}
