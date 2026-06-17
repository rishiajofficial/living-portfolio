import type { RoadmapItem } from "@/lib/types";
import { Check, Loader2, Circle } from "lucide-react";

const STATUS_ICON = {
  completed: <Check className="h-3.5 w-3.5 text-emerald-400" />,
  in_progress: <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-400" />,
  pending: <Circle className="h-3.5 w-3.5 text-zinc-600" />,
};

export default function RoadmapTimeline({ items }: { items: RoadmapItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-zinc-500 italic">
        Roadmap coming soon&hellip;
      </p>
    );
  }

  return (
    <div className="relative space-y-0">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <div key={item.id} className="relative flex gap-4 pb-6">
            {!isLast && (
              <div className="absolute left-[13px] top-7 h-[calc(100%-12px)] w-px bg-zinc-800" />
            )}

            <div
              className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                item.status === "completed"
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : item.status === "in_progress"
                    ? "border-blue-500/30 bg-blue-500/10"
                    : "border-zinc-800 bg-zinc-900"
              }`}
            >
              {STATUS_ICON[item.status]}
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p
                className={`text-sm font-medium ${
                  item.status === "completed"
                    ? "text-zinc-300"
                    : item.status === "in_progress"
                      ? "text-blue-300"
                      : "text-zinc-500"
                }`}
              >
                {item.title}
              </p>
              {item.description && (
                <p className="mt-0.5 text-xs text-zinc-500">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
