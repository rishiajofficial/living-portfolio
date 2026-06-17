import Link from "next/link";
import type { Project } from "@/lib/types";
import StatusBadge from "./StatusBadge";
import TagPill from "./TagPill";
import VoteButton from "./VoteButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 transition-all hover:border-zinc-700/60 hover:bg-zinc-900/60">
      <VoteButton projectId={project.id} initialCount={project.vote_count} />

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-xs text-zinc-600">
            {new Date(project.updated_at).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-violet-400"
          >
            {project.title}
          </Link>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
