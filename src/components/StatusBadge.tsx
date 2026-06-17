import type { ProjectStatus } from "@/lib/types";
import { STATUS_CONFIG } from "@/lib/types";

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.bgColor} ${config.color}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
            status === "building" ? "bg-blue-400" : status === "live" ? "bg-emerald-400" : "bg-transparent"
          }`}
        />
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            status === "idea"
              ? "bg-violet-400"
              : status === "research"
                ? "bg-amber-400"
                : status === "building"
                  ? "bg-blue-400"
                  : "bg-emerald-400"
          }`}
        />
      </span>
      {config.label}
    </span>
  );
}
