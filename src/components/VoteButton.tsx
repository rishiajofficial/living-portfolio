"use client";

import { useState, useTransition } from "react";
import { Triangle } from "lucide-react";

export default function VoteButton({
  projectId,
  initialCount,
}: {
  projectId: string;
  initialCount: number;
}) {
  const [count, setCount] = useState(initialCount);
  const [hasVoted, setHasVoted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleVote() {
    if (hasVoted || isPending) return;

    startTransition(async () => {
      try {
        const res = await fetch("/api/vote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ project_id: projectId }),
        });

        if (res.ok) {
          setCount((c) => c + 1);
          setHasVoted(true);
        }
      } catch {
        // silently fail
      }
    });
  }

  return (
    <button
      onClick={handleVote}
      disabled={hasVoted || isPending}
      className={`group flex flex-col items-center gap-0.5 rounded-xl border px-3 py-2 transition-all ${
        hasVoted
          ? "border-violet-500/30 bg-violet-500/10 text-violet-400"
          : "border-zinc-700/50 bg-zinc-800/50 text-zinc-400 hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-400"
      }`}
    >
      <Triangle
        className={`h-3.5 w-3.5 transition-transform ${
          hasVoted
            ? "fill-violet-400"
            : "group-hover:-translate-y-0.5"
        }`}
      />
      <span className="text-sm font-semibold tabular-nums">{count}</span>
    </button>
  );
}
