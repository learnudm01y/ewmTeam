
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const Footer: React.FC = () => {
  const { translations, isLoading } = useLanguage();

  if (isLoading || !translations) {
    return <footer className="bg-glass backdrop-blur-xl border-t border-white/10 h-24"></footer>;
  }

  const year = new Date().getFullYear();
  const copyrightText = translations.footer_copyright.replace('{year}', year.toString());

  return (
    <footer className="bg-glass backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-text">
        <p>{copyrightText}</p>
        <p className="mt-2 text-sm">{translations.footer_tagline}</p>
      </div>
    </footer>
  );
};