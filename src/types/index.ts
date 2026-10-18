export interface RecruiterFormPayload {
  recruiterName: string;
  companyName: string;
  recruiterEmail: string;
  phoneNumber: string;
  jobTitle: string;
  jobLocation: string;
  employmentType: 'Full-time' | 'Contract' | 'Part-time' | 'Other';
  companyWebsite: string;
  jobDescription: string;
  additionalMessage: string;
  honeypotField?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  tag: string;
  statusBadge: string;
  isEnterprise: boolean;
  shortDesc: string;
  problem: string;
  solution: string;
  keyOutcomes: string[];
  techStack: string[];
  architectureSummary: string;
  modules: string[];
  liveDemoLink?: string;
  githubLink?: string;
  repoNote?: string;
  tabs: {
    id: string;
    label: string;
    content: string | { title: string; desc: string; items?: string[] };
  }[];
  apiEndpointSample?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
    samplePayload?: Record<string, unknown>;
    sampleResponse?: Record<string, unknown>;
  };
}

export interface UnitTestResult {
  name: string;
  category: string;
  status: 'passed' | 'running' | 'idle';
  durationMs: number;
  assertion: string;
}
