
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const LegalNotice = () => {
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
                {t('legalNotice')}
              </h1>
              <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
            </div>
          </div>
        </section>
        
        {/* Legal Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
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
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default LegalNotice;
