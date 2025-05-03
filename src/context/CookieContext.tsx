
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CookieConsentOptions {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  consentGiven: boolean;
  cookieOptions: CookieConsentOptions;
  showCookieBanner: boolean;
  acceptAllCookies: () => void;
  declineCookies: () => void;
  saveCookieSettings: (options: CookieConsentOptions) => void;
  toggleShowBanner: (show: boolean) => void;
}

const defaultCookieOptions: CookieConsentOptions = {
  necessary: true, // Always necessary
  analytics: false,
  marketing: false
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState<boolean>(false);
  const [cookieOptions, setCookieOptions] = useState<CookieConsentOptions>(defaultCookieOptions);
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true);

  // Check for existing cookie consent on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      setConsentGiven(true);
      setCookieOptions(JSON.parse(savedConsent));
      setShowCookieBanner(false);
    }
  }, []);

  // Initialize GTM if consent is given for analytics
  useEffect(() => {
    if (consentGiven && cookieOptions.analytics) {
      // Initialize Google Tag Manager
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P6MDF79');
      `;
      document.head.appendChild(script);
    }
  }, [consentGiven, cookieOptions.analytics]);

  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setCookieOptions(allAccepted);
    setConsentGiven(true);
    setShowCookieBanner(false);
  };

  const declineCookies = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setCookieOptions(onlyNecessary);
    setConsentGiven(true);
    setShowCookieBanner(false);
  };

  const saveCookieSettings = (options: CookieConsentOptions) => {
    const updatedOptions = {
      ...options,
      necessary: true // Always keep necessary cookies
    };
    localStorage.setItem('cookie-consent', JSON.stringify(updatedOptions));
    setCookieOptions(updatedOptions);
    setConsentGiven(true);
    setShowCookieBanner(false);
  };

  const toggleShowBanner = (show: boolean) => {
    setShowCookieBanner(show);
  };

  const value = {
    consentGiven,
    cookieOptions,
    showCookieBanner,
    acceptAllCookies,
    declineCookies,
    saveCookieSettings,
    toggleShowBanner
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};
