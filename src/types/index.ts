export type NavTab = 'overview' | 'expertise' | 'projects' | 'contact';

export interface Competency {
  id: string;
  title: string;
  icon: string;
  colorVariant: 'primary' | 'secondary' | 'tertiary';
  description: string;
  tools: string[];
  frameworkAlignment: string;
  methodologies: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  code: string;
  badge: string;
  category: 'financial' | 'intel' | 'infrastructure' | 'all';
  title: string;
  summary: string;
  outcomeType: 'Hardened Outcome' | 'Performance Impact' | 'Security Milestone';
  outcomeValue: string;
  outcomeIcon: string;
  threatActors?: string;
  vulnerabilitiesPatched: string[];
  toolsUsed: string[];
  fullWriteup: {
    background: string;
    attackVector: string;
    technicalExecution: string[];
    remediation: string;
  };
}

export interface ThreatFeedItem {
  id: string;
  cveId: string;
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  source: string;
  date: string;
  affectedSystems: string;
}
