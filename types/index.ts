export type ProjectTag = "TEAM PROJECT" | "SOLO" | "ONGOING";

export interface Project {
  id: string;
  title: string;
  tags: ProjectTag[];
  description: string;
  stack: string[];
  href?: string;
  featured: boolean;
}

export interface SkillCluster {
  id: string;
  label: string;
  icon: "cpu" | "terminal" | "radio";
  items: string[];
  caption?: string;
}

export interface StatItem {
  label: string;
}

export interface LeadershipEntry {
  id: string;
  org: string;
  role: string;
  body: string[];
  stats: StatItem[];
}

export interface NavSection {
  id: string;
  label: string;
  navLabel: string;
}
