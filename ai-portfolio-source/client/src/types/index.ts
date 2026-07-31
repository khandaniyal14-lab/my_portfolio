export interface Project {
  id: string;
  slug: string;
  featured: boolean;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  coverImage: string;
  screenshots: string[];
  github: string;
  liveDemo?: string;
  demoVideo?: string;
  architectureImage?: string;
  features: string[];
  challenges: { challenge: string; solution: string }[];
  lessonsLearned: string[];
  aiWorkflow?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}
