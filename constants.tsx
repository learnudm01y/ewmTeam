import React from 'react';
import type { Technology, TechnologyCategory } from './types';

// SVG Icons
const BrainCircuitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.129 3 3 0 0 0 5.986-.13"/><path d="M12 12a3 3 0 1 0-5.993.129 3 3 0 0 0 5.986-.13"/><path d="M12 19a3 3 0 1 0-5.993.129 3 3 0 0 0 5.986-.13"/><path d="M12 5a3 3 0 1 0 5.993.129 3 3 0 0 0-5.986-.13"/><path d="M12 12a3 3 0 1 0 5.993.129 3 3 0 0 0-5.986-.13"/><path d="M12 19a3 3 0 1 0 5.993.129 3 3 0 0 0-5.986-.13"/><path d="M15 12a3 3 0 1 0-5.993.129 3 3 0 0 0 5.986-.13"/><path d="M15 5a3 3 0 1 0-5.993.129 3 3 0 0 0 5.986-.13"/><path d="M15 19a3 3 0 1 0-5.993.129 3 3 0 0 0 5.986-.13"/><path d="M9 7.5v-1"/><path d="M9 14.5v-1"/><path d="M9 21.5v-1"/><path d="M15 7.5v-1"/><path d="M15 14.5v-1"/><path d="M15 21.5v-1"/><path d="m6.007 12.129.003-.258"/><path d="m6.007 5.129.003-.258"/><path d="m6.007 19.129.003-.258"/><path d="m18.007 19.129-.003-.258"/><path d="m18.007 12.129-.003-.258"/><path d="m18.007 5.129-.003-.258"/><path d="m10 5-1-1"/><path d="m10 12-1-1"/><path d="m10 19-1-1"/><path d="M14 5l1-1"/><path d="m14 12 1-1"/><path d="m14 19 1-1"/><path d="m18 7-1-1"/><path d="m18 14-1-1"/><path d="m18 21-1-1"/><path d="m6 7 1-1"/><path d="m6 14 1-1"/><path d="m6 21 1-1"/>
  </svg>
);

const SmartphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);

const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const LayoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>
  </svg>
);

const ServerCogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12H2V4h20v8h-3"/><path d="M2 12h20"/><path d="M20 16.5a2.5 2.5 0 0 0-5 0"/><path d="M20 16.5a2.5 2.5 0 0 1-5 0"/><path d="M17.5 21a2.5 2.5 0 0 0 5 0"/><path d="M17.5 21a2.5 2.5 0 0 1 5 0"/><path d="M15 19a2.5 2.5 0 0 0 0-5"/><path d="M15 19a2.5 2.5 0 0 1 0-5"/><path d="M22.5 19a2.5 2.5 0 0 0 0-5"/><path d="M22.5 19a2.5 2.5 0 0 1 0-5"/><circle cx="17.5" cy="16.5" r="1"/><circle cx="20" cy="19" r="1"/><path d="M6 16v-4"/><path d="M10 16v-4"/>
  </svg>
);

const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
);
const LayersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
);

const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.5-.6 1.2-.5 2V21"/>
  </svg>
);

const GitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="6" y1="3" x2="6" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
);

const N8nIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M9 12h6" />
    <path d="m15.5 7.5-3 3" />
    <path d="m12.5 13.5 3 3" />
  </svg>
);

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
    {
        titleKey: 'tech_category_frontend',
        technologies: [
            { name: 'React', icon: <CodeIcon className="w-8 h-8"/> },
            { name: 'Next.js', icon: <CodeIcon className="w-8 h-8"/> },
            { name: 'Flutter', icon: <SmartphoneIcon className="w-8 h-8"/> },
        ]
    },
    {
        titleKey: 'tech_category_backend',
        technologies: [
            { name: 'Node.js', icon: <ServerCogIcon className="w-8 h-8"/> },
            { name: 'Laravel', icon: <CodeIcon className="w-8 h-8"/> },
            { name: 'ASP.NET', icon: <ServerCogIcon className="w-8 h-8"/> },
        ]
    },
    {
        titleKey: 'tech_category_database',
        technologies: [
            { name: 'PostgreSQL', icon: <DatabaseIcon className="w-8 h-8"/> },
            { name: 'MongoDB', icon: <DatabaseIcon className="w-8 h-8"/> },
            { name: 'MySQL', icon: <DatabaseIcon className="w-8 h-8"/> },
        ]
    },
    {
        titleKey: 'tech_category_ai_automation',
        technologies: [
            { name: 'n8n', icon: <N8nIcon className="w-8 h-8"/> },
            { name: 'OpenAI', icon: <BrainCircuitIcon className="w-8 h-8"/> },
        ]
    },
    {
        titleKey: 'tech_category_devops_cloud',
        technologies: [
            { name: 'Docker', icon: <LayersIcon className="w-8 h-8"/> },
            { name: 'AWS', icon: <CloudIcon className="w-8 h-8"/> },
            { name: 'Google Cloud', icon: <CloudIcon className="w-8 h-8"/> },
        ]
    },
    {
        titleKey: 'tech_category_design_tools',
        technologies: [
            { name: 'Figma', icon: <LayoutIcon className="w-8 h-8"/> },
            { name: 'Adobe XD', icon: <LayoutIcon className="w-8 h-8"/> },
            { name: 'Git', icon: <GitIcon className="w-8 h-8"/> },
            { name: 'GitHub', icon: <GitHubIcon className="w-8 h-8"/> },
        ]
    },
];
