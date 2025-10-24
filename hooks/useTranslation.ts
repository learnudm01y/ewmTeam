import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Service, TeamMember, Project } from '../types';

export interface Translations {
  nav_services: string;
  nav_team: string;
  nav_tech: string;
  nav_projects: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_button: string;
  services_title: string;
  services_subtitle: string;
  key_capabilities: string;
  our_process: string;
  services: Service[];
  team_title: string;
  team_subtitle: string;
  team_specialty: string;
  team_members: TeamMember[];
  tech_title: string;
  tech_subtitle: string;
  projects_title: string;
  projects_subtitle: string;
  projects: Project[];
  projects_show_more: string;
  projects_show_less: string;
  footer_copyright: string;
  footer_tagline: string;
  tech_category_frontend: string;
  tech_category_backend: string;
  tech_category_database: string;
  tech_category_ai_automation: string;
  tech_category_devops_cloud: string;
  tech_category_design_tools: string;
}

export const useTranslation = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return { translations, isLoading };
};