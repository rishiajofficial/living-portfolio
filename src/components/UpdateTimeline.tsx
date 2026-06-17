import type { Update } from "@/lib/types";
import { MessageSquare } from "lucide-react";

export default function UpdateTimeline({ updates }: { updates: Update[] }) {
  if (updates.length === 0) {
    return (
      <p className="text-sm text-zinc-500 italic">No updates yet&hellip;</p>
    );
  }

  return (
    <div className="space-y-4">
      {updates.map((update) => (
        <div
          key={update.id}
          className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
              <MessageSquare className="h-4 w-4 text-zinc-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium text-zinc-200">
                  {update.title}
                </h4>
                <span className="text-xs text-zinc-600">
                  {new Date(update.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {update.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
