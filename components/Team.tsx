
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import type { TeamMember } from '../types.ts';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const { translations } = useLanguage();
  return (
    <div 
      className="bg-glass backdrop-blur-xl border border-white/10 rounded-2xl shadow-glass transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in-up text-center py-10 px-6"
    >
      {/* Gradient border wrapper for the image */}
      <div className="relative inline-block p-1 rounded-full bg-gradient-to-tr from-accent via-purple-500 to-pink-500">
        <img 
          className="w-40 h-40 rounded-full object-cover border-4 border-primary" 
          src={member.imageUrl} 
          alt={member.name} 
        />
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-accent font-semibold mt-1">{member.role}</p>
        <p className="text-gray-text mt-2">{translations?.team_specialty}: <span className="font-medium text-light">{member.specialty}</span></p>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const { translations, isLoading } = useLanguage();

  if (isLoading || !translations) {
    return <section id="team" className="py-20" />;
  }

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">{translations.team_title}</h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mt-4">
            {translations.team_subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations.team_members.map((member, index) => (
            <div key={member.name} style={{ animationDelay: `${index * 0.2}s` }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};