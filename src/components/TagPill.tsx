import Link from "next/link";

export default function TagPill({
  tag,
  active = false,
}: {
  tag: string;
  active?: boolean;
}) {
  return (
    <Link
      href={active ? "/projects" : `/projects?tag=${encodeURIComponent(tag)}`}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${
        active
          ? "border-violet-500/40 bg-violet-500/20 text-violet-300"
          : "border-zinc-700/50 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300"
      }`}
    >
      {tag}
    </Link>
  );
}
