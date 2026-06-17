"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ProjectStatus } from "@/lib/types";
import { STATUS_CONFIG } from "@/lib/types";

const STATUSES: ProjectStatus[] = ["idea", "research", "building", "live"];

export default function ProjectFilters({
  allTags,
  activeStatus,
  activeTag,
}: {
  allTags: string[];
  activeStatus: string | null;
  activeTag: string | null;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function navigate(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/projects?${params.toString()}`);
  }

  return (
    <div className="space-y-4">
      {/* Status filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => navigate("status", null)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            !activeStatus
              ? "bg-white/10 text-white"
              : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
          }`}
        >
          All
        </button>
        {STATUSES.map((status) => {
          const config = STATUS_CONFIG[status];
          const isActive = activeStatus === status;
          return (
            <button
              key={status}
              onClick={() => navigate("status", isActive ? null : status)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? `${config.bgColor} ${config.color}`
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
              }`}
            >
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-1.5">
        {allTags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => navigate("tag", isActive ? null : tag)}
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${
                isActive
                  ? "border-violet-500/40 bg-violet-500/20 text-violet-300"
                  : "border-zinc-700/50 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
