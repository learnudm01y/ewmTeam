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