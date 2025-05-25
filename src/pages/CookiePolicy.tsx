import React, { useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroTemplate } from '@/components/layout/HeroTemplate';
import { ContentSection } from '@/components/layout/ContentSection';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCookie } from '@/context/CookieContext';

const CookiePolicy = () => {
  const { t } = useLanguage();
  const { toggleShowBanner } = useCookie();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSection = (
    <HeroTemplate title={t('cookiePolicy')} />
  );

  return (
    <PageLayout heroSection={heroSection}>
      {/* Cookie Policy Content */}
      <ContentSection backgroundColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Politique des cookies</h2>
            <p>
              Cette politique des cookies explique ce que sont les cookies et comment nous les utilisons sur notre site web. Vous devriez lire cette politique afin de comprendre quel type de cookies nous utilisons, les informations que nous collectons à l'aide des cookies et comment ces informations sont utilisées.
            </p>
            
            <h3>Qu'est-ce qu'un cookie ?</h3>
            <p>
              Les cookies sont des petits fichiers texte stockés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Ils permettent au site web de mémoriser vos actions et préférences (comme la connexion, la langue, la taille de la police et d'autres préférences d'affichage) pendant une période déterminée, pour que vous n'ayez pas à les saisir à nouveau lorsque vous revenez sur le site ou naviguez d'une page à une autre.
            </p>
            
            <h3>Comment utilisons-nous les cookies ?</h3>
            <p>
              Nous utilisons différents types de cookies pour diverses raisons :
            </p>
            <ul>
              <li><strong>Cookies nécessaires</strong> : Ces cookies sont essentiels pour vous permettre de naviguer sur le site et utiliser ses fonctionnalités, comme l'accès aux zones sécurisées du site.</li>
              <li><strong>Cookies analytiques/de performance</strong> : Ces cookies nous permettent de reconnaître et de compter le nombre de visiteurs et de voir comment les visiteurs se déplacent sur notre site lorsqu'ils l'utilisent. Cela nous aide à améliorer le fonctionnement de notre site, en nous assurant par exemple que les utilisateurs trouvent facilement ce qu'ils cherchent.</li>
              <li><strong>Cookies de fonctionnalité</strong> : Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre nom d'utilisateur, votre langue ou la région dans laquelle vous vous trouvez) et fournissent des fonctionnalités améliorées et plus personnelles.</li>
              <li><strong>Cookies de ciblage</strong> : Ces cookies enregistrent votre visite sur notre site, les pages que vous avez visitées et les liens que vous avez suivis. Nous utiliserons ces informations pour rendre notre site et la publicité qui y est affichée plus pertinents par rapport à vos intérêts.</li>
            </ul>
            
            <h3>Google Analytics</h3>
            <p>
              Notre site utilise Google Analytics, un service d'analyse web fourni par Google, Inc. Google Analytics utilise des cookies pour nous aider à analyser comment les utilisateurs utilisent le site. Les informations générées par le cookie concernant votre utilisation du site (y compris votre adresse IP) seront transmises et stockées par Google sur des serveurs aux États-Unis.
            </p>
            <p>
              Google utilisera ces informations dans le but d'évaluer votre utilisation du site, de compiler des rapports sur l'activité du site à destination des exploitants du site et de fournir d'autres services relatifs à l'activité du site et à l'utilisation d'Internet. Google peut également transférer ces informations à des tiers lorsque la loi l'exige, ou lorsque ces tiers traitent les informations pour le compte de Google.
            </p>
            
            <h3>Comment gérer vos préférences en matière de cookies</h3>
            <p>
              Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies ou pour qu'il vous avertisse lorsqu'un cookie est envoyé. Toutefois, si vous n'acceptez pas les cookies, il se peut que vous ne puissiez pas utiliser certaines parties de notre site.
            </p>
            
            <div className="text-center mt-8">
              <Button 
                className="btn-primary"
                onClick={() => toggleShowBanner(true)}
              >
                Gérer mes préférences de cookies
              </Button>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default CookiePolicy;
