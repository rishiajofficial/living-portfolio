import type { Metadata } from "next";
import { Suspense } from "react";
import { getProjects, getAllTags } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";

export const metadata: Metadata = {
  title: "Projects — Ankit.build",
  description:
    "Explore ideas, explorations, and ventures at every stage — from thinking to launch.",
};

async function ProjectList({
  status,
  tag,
}: {
  status: string | null;
  tag: string | null;
}) {
  const projects = await getProjects({
    status: status ?? undefined,
    tag: tag ?? undefined,
  });

  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-12 text-center">
        <p className="text-zinc-500">No projects match these filters.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const status = params.status ?? null;
  const tag = params.tag ?? null;
  const allTags = await getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-violet-400">All Projects</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50">
          Ideas in motion.
        </h1>
        <p className="mt-2 text-base text-zinc-400">
          Everything I&apos;m thinking about, exploring, and building — filtered
          by stage or topic.
        </p>
      </div>

      <div className="mt-8">
        <Suspense>
          <ProjectFilters
            allTags={allTags}
            activeStatus={status}
            activeTag={tag}
          />
        </Suspense>
      </div>

      <div className="mt-8">
        <ProjectList status={status} tag={tag} />
      </div>
    </div>
  );
}
