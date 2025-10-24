
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import type { Translations } from '../types.ts';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  changeLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  translations: Translations | null;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newDirection = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    document.documentElement.lang = language;
    document.documentElement.dir = newDirection;
    document.body.style.fontFamily = language === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";
  }, [language]);

  useEffect(() => {
    const fetchTranslations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) {
          throw new Error(`Could not load ${language}.json`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Failed to fetch translations:", error);
        // Fallback to English if the requested language file fails to load
        if (language !== 'en') {
          try {
            const response = await fetch(`/locales/en.json`);
            const data = await response.json();
            setTranslations(data);
          } catch (fallbackError) {
             console.error("Failed to fetch fallback English translations:", fallbackError);
             setTranslations(null);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, [language]);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage, toggleLanguage, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};