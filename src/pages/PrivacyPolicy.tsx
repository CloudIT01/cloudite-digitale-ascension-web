
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const PrivacyPolicy = () => {
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
                {t('privacyPolicy')}
              </h1>
              <div className="w-24 h-1 bg-cloud-gradient mx-auto rounded-full"></div>
            </div>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2>Politique de confidentialité</h2>
              <p>
                Cette politique de confidentialité décrit comment CloudITechnologies collecte, utilise et protège vos informations personnelles lorsque vous visitez notre site web ou utilisez nos services.
              </p>
              
              <h3>Collecte d'informations</h3>
              <p>
                Nous collectons des informations lorsque vous vous inscrivez sur notre site, vous connectez à votre compte, effectuez un achat, participez à un concours et/ou lorsque vous vous déconnectez. Les informations collectées incluent votre nom, adresse e-mail, numéro de téléphone, et/ou carte de crédit.
              </p>
              <p>
                En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.
              </p>
              
              <h3>Utilisation des informations</h3>
              <p>
                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              </p>
              <ul>
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Fournir un contenu publicitaire personnalisé</li>
                <li>Améliorer notre site Web</li>
                <li>Améliorer le service client et vos besoins de prise en charge</li>
                <li>Vous contacter par e-mail</li>
                <li>Administrer un concours, une promotion, ou une enquête</li>
              </ul>
              
              <h3>Protection des informations</h3>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.
              </p>
              
              <h3>Cookies</h3>
              <p>
                Notre site Web utilise des cookies pour améliorer l'accès à notre site et identifier les visiteurs réguliers. En outre, nos cookies améliorent l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
              </p>
              
              <h3>Consentement</h3>
              <p>
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
