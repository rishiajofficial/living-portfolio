import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-zinc-500">
          <Zap className="h-4 w-4 text-violet-400/60" />
          <span className="text-sm">
            Built by Ankit &middot; Powered by the Builder OS
          </span>
        </div>
        <p className="text-xs text-zinc-600">
          Ideas evolve. Watch them grow.
        </p>
      </div>
    </footer>
  );
}
