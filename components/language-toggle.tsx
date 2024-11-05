'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'sw' : 'en';
    setLanguage(newLang);
    document.documentElement.setAttribute('lang', newLang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-background/80 backdrop-blur-sm"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {language === 'en' ? 'Swahili' : 'English'}
      </span>
    </Button>
  );
}