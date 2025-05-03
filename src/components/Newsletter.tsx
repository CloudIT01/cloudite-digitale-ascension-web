
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function Newsletter() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !email) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: t('thankYou'),
        description: "Vous recevrez bientôt nos actualités par email.",
      });
      
      setFirstName('');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-cloud-gradient rounded-xl p-8 shadow-lg max-w-md mx-auto text-white">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{t('newsletterTitle')}</h3>
        <p className="text-sm opacity-90">{t('newsletterDesc')}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder={t('firstName')}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-white text-cloud-purple hover:bg-white/90 hover:text-cloud-darkBlue"
          disabled={isSubmitting}
        >
          {isSubmitting ? "..." : t('subscribe')}
        </Button>
      </form>
    </div>
  );
}
