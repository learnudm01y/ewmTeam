import React from 'react';
import { TECHNOLOGY_CATEGORIES } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

export const TechStack: React.FC = () => {
  const { translations, isLoading } = useTranslation();

  if (isLoading || !translations) {
    return <section id="tech" className="py-20" />;
  }

  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">{translations.tech_title}</h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mt-4">
            {translations.tech_subtitle}
          </p>
        </div>
        <div className="space-y-16">
          {TECHNOLOGY_CATEGORIES.map((category, catIndex) => (
            <div key={category.titleKey} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.15}s` }}>
              {/* FIX: Cast to string because TypeScript infers a broad type for dynamic property access on the translations object. We know this will be a string. */}
              <h3 className="text-2xl font-bold text-center mb-8 text-accent">{translations[category.titleKey as keyof typeof translations] as string}</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {category.technologies.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex flex-col items-center justify-center p-4 bg-glass backdrop-blur-xl border border-white/10 rounded-lg w-32 h-32 md:w-36 md:h-36 transition duration-300 transform hover:scale-110 hover:shadow-accent/20 hover:text-accent"
                  >
                    <div className="mb-2 text-light">{tech.icon}</div>
                    <span className="font-semibold text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};