export interface Project {
  id: string;
  title: string;
  problem: string;
  architectureHighlights: string[];
  techStack: string[];
  diagramType: 'RAG' | 'EDGE_PIPELINE' | 'DATA_PIPELINE' | 'AGENTIC' | 'OCR_PIPELINE';
  githubUrl?: string;
  buttonText?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ResearchItem {
  title: string;
  venue: string;
  date: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}