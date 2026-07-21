import { NavSection } from "@/types";

// Single source of truth for page order. Nav, SignalTrace markers, and
// page.tsx all read from this array so section order can never drift
// out of sync across the three places that care about it.
export const SECTIONS: NavSection[] = [
  { id: "about", label: "SEC / ABOUT", navLabel: "About" },
  { id: "skills", label: "SEC / SKILLS", navLabel: "Skills" },
  { id: "projects", label: "SEC / PROJECTS", navLabel: "Projects" },
  { id: "leadership", label: "SEC / LEADERSHIP", navLabel: "Leadership" },
  { id: "education", label: "SEC / EDUCATION", navLabel: "Education" },
  { id: "contact", label: "SEC / CONTACT", navLabel: "Contact" },
];
