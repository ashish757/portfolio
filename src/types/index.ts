export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Activity {
  title: string;
  description: string;
  date?: string;
}
