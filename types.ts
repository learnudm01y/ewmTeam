import type React from 'react';

export interface Service {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  longDescription: string;
  process: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
  technologies: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  imageUrl: string;
}

export interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface TechnologyCategory {
  titleKey: string;
  technologies: Technology[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
  coverImageUrl?: string;
}

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
