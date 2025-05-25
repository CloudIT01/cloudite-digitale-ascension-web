
import React, { useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroTemplate } from '@/components/layout/HeroTemplate';
import { ContentSection } from '@/components/layout/ContentSection';
import { useLanguage } from '@/context/LanguageContext';

const LegalNotice = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSection = (
    <HeroTemplate title={t('legalNotice')} />
  );

  return (
    <PageLayout heroSection={heroSection}>
      {/* Legal Content */}
      <ContentSection backgroundColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Mentions légales</h2>
            
            <h3>Éditeur du site</h3>
            <p>
              CloudITechnologies<br />
              123 Avenue des Nuages<br />
              75000 Paris<br />
              France<br />
              SIRET : 123 456 789 00012
            </p>
            
            <h3>Directeur de la publication</h3>
            <p>
              [Nom du directeur de la publication]<br />
              Email : contact@clouditechnologies.fr
            </p>
            
            <h3>Hébergement</h3>
            <p>
              Ce site est hébergé par:<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              [Pays de l'hébergeur]
            </p>
            
            <h3>Propriété intellectuelle</h3>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            
            <h3>Crédits</h3>
            <p>
              Conception et développement : CloudITechnologies<br />
              Photographies : Unsplash, Pexels
            </p>
            
            <h3>Responsabilité</h3>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une erreur ou ce qui peut être un dysfonctionnement, merci de le signaler par email en décrivant le problème de la manière la plus précise possible.
            </p>
            
            <h3>Liens hypertextes</h3>
            <p>
              Ce site peut offrir des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. CloudITechnologies ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet. CloudITechnologies ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default LegalNotice;
