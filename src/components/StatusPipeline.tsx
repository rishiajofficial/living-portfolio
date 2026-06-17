import type { ProjectStatus } from "@/lib/types";
import { STATUS_CONFIG } from "@/lib/types";

const STEPS: ProjectStatus[] = ["idea", "research", "building", "live"];

export default function StatusPipeline({
  currentStatus,
}: {
  currentStatus: ProjectStatus;
}) {
  const currentStep = STATUS_CONFIG[currentStatus].step;

  return (
    <div className="flex items-center gap-1">
      {STEPS.map((step, i) => {
        const config = STATUS_CONFIG[step];
        const isReached = config.step <= currentStep;
        const isCurrent = step === currentStatus;

        return (
          <div key={step} className="flex items-center gap-1">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all ${
                  isCurrent
                    ? `${config.bgColor} ${config.color} ring-2 ring-current/20`
                    : isReached
                      ? "border-zinc-600 bg-zinc-800 text-zinc-300"
                      : "border-zinc-800 bg-zinc-900 text-zinc-600"
                }`}
              >
                {config.step}
              </div>
              <span
                className={`text-[10px] font-medium ${
                  isCurrent ? config.color : isReached ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {config.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`mb-4 h-px w-6 sm:w-10 ${
                  config.step < currentStep ? "bg-zinc-600" : "bg-zinc-800"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
