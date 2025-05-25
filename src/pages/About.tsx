
import React, { useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroTemplate } from '@/components/layout/HeroTemplate';
import { ContentSection } from '@/components/layout/ContentSection';
import { Newsletter } from '@/components/Newsletter';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSection = (
    <HeroTemplate title={t('about')} />
  );

  return (
    <PageLayout heroSection={heroSection}>
      {/* About Content */}
      <ContentSection backgroundColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Notre mission</h2>
            <p>
              Chez CloudITechnologies, notre mission est de propulser votre entreprise dans l'ère numérique grâce à des solutions marketing innovantes et personnalisées. Telle une pluie digitale bienfaisante, nous diffusons les technologies et stratégies qui permettront à votre entreprise de s'épanouir et de croître.
            </p>
            
            <h2>Notre approche</h2>
            <p>
              Notre approche se distingue par une compréhension approfondie de vos besoins spécifiques et de votre secteur d'activité. Nous ne proposons pas des solutions uniformes, mais créons des stratégies sur mesure qui répondent parfaitement à vos objectifs commerciaux.
            </p>
            
            <h2>Notre expertise</h2>
            <p>
              Fondée par des experts passionnés du marketing digital, CloudITechnologies réunit des talents dans de nombreux domaines : copywriting, création de funnels de vente, gestion des réseaux sociaux, référencement naturel et bien plus encore. Cette diversité de compétences nous permet d'offrir un service complet et cohérent.
            </p>
            
            <h2>Notre engagement</h2>
            <p>
              Nous nous engageons à fournir un service d'excellence, basé sur la transparence, l'éthique et des résultats mesurables. Votre réussite est notre priorité absolue, et nous mettons tout en œuvre pour créer une relation de confiance durable avec chacun de nos clients.
            </p>
            
            <h2>Notre vision</h2>
            <p>
              Nous envisageons un futur où chaque entreprise, quelle que soit sa taille, peut bénéficier des avantages du marketing digital de pointe. Notre vision est de démocratiser l'accès à ces technologies et stratégies, pour permettre à toutes les entreprises de se développer dans un monde numérique en constante évolution.
            </p>
          </div>
        </div>
      </ContentSection>
      
      {/* Newsletter Section */}
      <ContentSection backgroundColor="gray">
        <Newsletter />
      </ContentSection>
    </PageLayout>
  );
};

export default About;
