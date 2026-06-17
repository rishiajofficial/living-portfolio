import type { Project, RoadmapItem, Update } from "./types";
import { mockProjects, mockRoadmapItems, mockUpdates } from "./mock-data";

const USE_MOCK =
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getSupabase() {
  const { createClient } = await import("./supabase/server");
  return createClient();
}

export async function getProjects(filters?: {
  status?: string;
  tag?: string;
}): Promise<Project[]> {
  if (USE_MOCK) {
    let results = [...mockProjects];
    if (filters?.status) {
      results = results.filter((p) => p.status === filters.status);
    }
    if (filters?.tag) {
      results = results.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === filters.tag!.toLowerCase())
      );
    }
    return results.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  }

  const supabase = await getSupabase();
  let query = supabase.from("projects").select("*").order("updated_at", { ascending: false });

  if (filters?.status) {
    query = query.eq("status", filters.status);
  }
  if (filters?.tag) {
    query = query.contains("tags", [filters.tag]);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as Project[];
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  if (USE_MOCK) {
    return mockProjects.find((p) => p.slug === slug) ?? null;
  }

  const supabase = await getSupabase();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data as Project;
}

export async function getRoadmapItems(
  projectId: string
): Promise<RoadmapItem[]> {
  if (USE_MOCK) {
    return mockRoadmapItems[projectId] ?? [];
  }

  const supabase = await getSupabase();
  const { data, error } = await supabase
    .from("roadmap_items")
    .select("*")
    .eq("project_id", projectId)
    .order("order", { ascending: true });

  if (error) throw error;
  return data as RoadmapItem[];
}

export async function getUpdates(projectId: string): Promise<Update[]> {
  if (USE_MOCK) {
    return (mockUpdates[projectId] ?? []).sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  const supabase = await getSupabase();
  const { data, error } = await supabase
    .from("updates")
    .select("*")
    .eq("project_id", projectId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Update[];
}

export async function getAllTags(): Promise<string[]> {
  if (USE_MOCK) {
    const tags = new Set<string>();
    mockProjects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }

  const supabase = await getSupabase();
  const { data, error } = await supabase.from("projects").select("tags");
  if (error) throw error;

  const tags = new Set<string>();
  (data as { tags: string[] }[]).forEach((row) =>
    row.tags.forEach((t) => tags.add(t))
  );
  return Array.from(tags).sort();
}
