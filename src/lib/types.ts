export type ProjectStatus = "idea" | "research" | "building" | "live";

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  cover_image: string | null;
  created_at: string;
  updated_at: string;
  vote_count: number;
}

export interface RoadmapItem {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  status: "pending" | "in_progress" | "completed";
  order: number;
  created_at: string;
}

export interface Update {
  id: string;
  project_id: string;
  title: string;
  content: string;
  created_at: string;
}

export interface Vote {
  id: string;
  project_id: string;
  voter_id: string;
  created_at: string;
}

export const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; color: string; bgColor: string; step: number }
> = {
  idea: {
    label: "Idea",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10 border-violet-500/20",
    step: 1,
  },
  research: {
    label: "Research",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/20",
    step: 2,
  },
  building: {
    label: "Building",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/20",
    step: 3,
  },
  live: {
    label: "Live",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
    step: 4,
  },
};
