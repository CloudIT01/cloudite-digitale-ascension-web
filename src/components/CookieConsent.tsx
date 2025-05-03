
import React, { useState } from 'react';
import { useCookie } from '@/context/CookieContext';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

export function CookieConsent() {
  const { showCookieBanner, acceptAllCookies, declineCookies, saveCookieSettings } = useCookie();
  const { t } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always necessary
    analytics: false,
    marketing: false
  });

  if (!showCookieBanner) {
    return null;
  }

  const handleSaveSettings = () => {
    saveCookieSettings(cookiePreferences);
    setShowSettings(false);
  };

  return (
    <>
      {/* Cookie banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 p-4 md:p-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">{t('cookieTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('cookieDesc')}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={declineCookies}>{t('decline')}</Button>
              <Button variant="outline" onClick={() => setShowSettings(true)}>{t('settings')}</Button>
              <Button onClick={acceptAllCookies}>{t('accept')}</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie settings dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('cookieTitle')}</DialogTitle>
            <DialogDescription>
              {t('cookieDesc')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="necessary" 
                checked={cookiePreferences.necessary} 
                disabled 
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="necessary">Cookies nécessaires</Label>
                <p className="text-sm text-muted-foreground">Ces cookies sont essentiels au fonctionnement du site.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="analytics" 
                checked={cookiePreferences.analytics} 
                onCheckedChange={(checked) => 
                  setCookiePreferences({...cookiePreferences, analytics: !!checked})
                } 
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="analytics">Cookies analytiques (Google Analytics)</Label>
                <p className="text-sm text-muted-foreground">Ces cookies nous aident à comprendre comment vous utilisez notre site.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="marketing" 
                checked={cookiePreferences.marketing} 
                onCheckedChange={(checked) => 
                  setCookiePreferences({...cookiePreferences, marketing: !!checked})
                } 
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="marketing">Cookies marketing</Label>
                <p className="text-sm text-muted-foreground">Ces cookies sont utilisés pour les publicités ciblées.</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSettings(false)}>Annuler</Button>
            <Button onClick={handleSaveSettings}>Enregistrer les préférences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
