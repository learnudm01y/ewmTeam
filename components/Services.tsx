
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import type { Service } from '../types.ts';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const { translations } = useLanguage();

  return (
    <div className="py-16 animate-fade-in-up">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 items-center ${isEven ? 'lg:flex-row rtl:lg:flex-row-reverse' : 'lg:flex-row-reverse rtl:lg:flex-row'}`}>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="rounded-2xl shadow-2xl shadow-accent/20 w-full object-cover aspect-video transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-accent">{service.title}</h3>
          <p className="text-gray-text mb-6 text-justify">{service.longDescription}</p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">{translations?.key_capabilities}</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 me-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-xl font-semibold mb-3">{translations?.our_process}</h4>
             <div className="space-y-4">
                {service.process.map((step, i) => (
                    <div key={i}>
                        <h5 className="font-semibold text-light">{i+1}. {step.title}</h5>
                        <p className="text-gray-text text-sm ps-4">{step.description}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Services: React.FC = () => {
  const { translations, isLoading } = useLanguage();

  if (isLoading || !translations) {
    return <section id="services" className="py-20" />;
  }
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4">{translations.services_title}</h2>
        <p className="text-lg text-gray-text max-w-3xl mx-auto mb-12">
          {translations.services_subtitle}
        </p>
      </div>
      <div className="divide-y divide-white/10">
        {translations.services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};