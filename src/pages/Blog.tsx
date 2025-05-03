
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 'copywriting-email-marketing',
    title: 'L\'art du copywriting et de l\'email marketing',
    excerpt: 'Comment créer des connexions authentiques avec votre audience à travers des mots qui convertissent.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    date: '2023-05-15',
    author: 'Sophie Martin'
  },
  {
    id: 'sales-funnels',
    title: 'Construire des entonnoirs de vente qui convertissent',
    excerpt: 'Les étapes essentielles pour transformer vos visiteurs en clients fidèles avec des stratégies d\'entonnoir optimisées.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    date: '2023-05-10',
    author: 'Marc Dupont'
  },
  {
    id: 'landing-pages',
    title: 'L\'anatomie d\'une landing page parfaite',
    excerpt: 'Les éléments clés d\'une page d\'atterrissage conçue pour convertir et captiver votre audience.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    date: '2023-05-05',
    author: 'Julie Leroy'
  },
  {
    id: 'social-media-management',
    title: 'Maîtriser la gestion des réseaux sociaux',
    excerpt: 'Comment engager efficacement votre audience sur LinkedIn, Facebook, Instagram et plus.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    date: '2023-04-28',
    author: 'Thomas Bernard'
  },
];

const Blog = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cloud-purple via-cloud-lightViolet to-cloud-darkBlue bg-clip-text text-transparent">
                {t('blog')}
              </h1>
              <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
              <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                Découvrez nos articles sur le marketing digital, le copywriting, les réseaux sociaux et bien plus encore.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
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

export default Blog;
