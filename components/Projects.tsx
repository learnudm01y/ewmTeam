
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import type { Project } from '../types.ts';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardClasses = "bg-glass backdrop-blur-xl border border-white/10 rounded-2xl shadow-glass overflow-hidden animate-fade-in-up transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-2 flex flex-col group";

  return (
    <div className={cardClasses} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex items-center px-4 py-2 bg-primary/50 border-b border-white/10">
        <div className="flex space-x-2 rtl:space-x-reverse">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-grow text-center text-sm text-gray-400 truncate mx-4">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            {project.url.replace(/https?:\/\//, '').replace(/\/$/, '')}
          </a>
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" title="Open in new tab" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div className="w-full h-80 bg-primary">
        {project.coverImageUrl ? (
          <img
            src={project.coverImageUrl}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            loading="lazy"
          />
        ) : (
          <iframe
            src={project.url}
            title={project.name}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          ></iframe>
        )}
      </div>
      <div className="p-4 bg-primary/30 mt-auto">
        <h3 className="text-xl font-bold text-center text-light truncate">{project.name}</h3>
        <p className="text-gray-text text-sm text-center mt-2 h-10 overflow-hidden">{project.description}</p>
      </div>
    </div>
  );
};

const INITIAL_VISIBLE_COUNT = 6;
const PROJECTS_PER_PAGE = 6;

export const Projects: React.FC = () => {
  const { translations, isLoading } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  if (isLoading || !translations?.projects) {
    return <section id="projects" className="py-20" />;
  }

  const projectsToShow = translations.projects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + PROJECTS_PER_PAGE, translations.projects.length));
  };
  
  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">{translations.projects_title}</h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mt-4">
            {translations.projects_subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsToShow.map((project, index) => (
                <ProjectCard key={project.url} project={project} index={index} />
            ))}
        </div>

        {translations.projects.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-16 text-center flex justify-center items-center gap-4">
            {visibleCount < translations.projects.length && (
              <button
                onClick={handleShowMore}
                className="inline-block bg-accent text-white font-bold rounded-md px-8 py-3 text-lg hover:brightness-110 transition duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                aria-label={translations.projects_show_more}
              >
                {translations.projects_show_more}
              </button>
            )}
            {visibleCount > INITIAL_VISIBLE_COUNT && (
              <button
                onClick={handleShowLess}
                className="inline-block bg-white/10 text-white font-bold rounded-md px-8 py-3 text-lg hover:bg-white/20 transition duration-300 transform hover:scale-105"
                aria-label={translations.projects_show_less}
              >
                {translations.projects_show_less}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};