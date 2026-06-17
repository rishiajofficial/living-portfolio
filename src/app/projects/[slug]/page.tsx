import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, getRoadmapItems, getUpdates } from "@/lib/data";
import StatusPipeline from "@/components/StatusPipeline";
import TagPill from "@/components/TagPill";
import VoteButton from "@/components/VoteButton";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import UpdateTimeline from "@/components/UpdateTimeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Ankit.build`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const [roadmapItems, updates] = await Promise.all([
    getRoadmapItems(project.id),
    getUpdates(project.id),
  ]);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All Projects
      </Link>

      {/* Header */}
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-zinc-400">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <VoteButton projectId={project.id} initialCount={project.vote_count} />
      </div>

      {/* Status pipeline */}
      <div className="mt-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
        <h2 className="mb-4 text-sm font-medium text-zinc-500 uppercase tracking-wider">
          Status
        </h2>
        <StatusPipeline currentStatus={project.status} />
        <p className="mt-3 text-xs text-zinc-600">
          Started{" "}
          {new Date(project.created_at).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}{" "}
          &middot; Last updated{" "}
          {new Date(project.updated_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
          About this project
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Two-column: Roadmap + Updates */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Roadmap */}
        <div>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
            Roadmap
          </h2>
          <div className="mt-4">
            <RoadmapTimeline items={roadmapItems} />
          </div>
        </div>

        {/* Updates */}
        <div>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
            Updates
          </h2>
          <div className="mt-4">
            <UpdateTimeline updates={updates} />
          </div>
        </div>
      </div>
    </div>
  );
}
