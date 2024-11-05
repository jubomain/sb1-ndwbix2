'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export function useTranslations() {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<'en' | 'sw'>) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return {
    t: translations[language],
    language,
  };
}