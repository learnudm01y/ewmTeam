import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const Hero: React.FC = () => {
  const { translations, isLoading } = useTranslation();

  if (isLoading || !translations) {
    return <section id="home" className="min-h-screen" />;
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
            <span className="block">{translations.hero_title_1}</span>
            <span className="block text-accent">{translations.hero_title_2}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-text max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {translations.hero_subtitle}
          </p>
          <div className="mt-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#services" className="inline-block bg-accent text-white font-bold rounded-md px-8 py-3 text-lg hover:brightness-110 transition duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
              {translations.hero_button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
