
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { Calendar } from "lucide-react";

interface CalendlyModalProps {
  children: React.ReactNode;
}

export function CalendlyModal({ children }: CalendlyModalProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {t('scheduleCall')}
          </DialogTitle>
          <DialogDescription>
            {t('scheduleCallDesc')}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 h-[500px]">
          <iframe
            src="https://calendly.com/appointment"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Scheduling"
            className="rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
