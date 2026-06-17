import Link from "next/link";
import { ArrowRight, Lightbulb, Search, Hammer, Rocket } from "lucide-react";
import { getProjects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const PIPELINE_STEPS = [
  { icon: Lightbulb, label: "Thinking", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  { icon: Search, label: "Exploration", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { icon: Hammer, label: "Building", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { icon: Rocket, label: "Launch", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
];

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-violet-400">
            Living Portfolio &middot; Builder OS
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
            Watch ideas evolve
            <br />
            <span className="text-zinc-500">from thought to launch.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Not a portfolio of finished work. A living map of ideas,
            explorations, research, ventures, and products being built — all
            evolving in real time.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
            >
              About Ankit
            </Link>
          </div>
        </div>
      </section>

      {/* Pipeline visualization */}
      <section className="pb-16">
        <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 sm:p-8">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
            The Pipeline
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 sm:gap-4">
                <div className={`flex items-center gap-2.5 rounded-xl border px-4 py-2.5 ${step.color}`}>
                  <step.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{step.label}</span>
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-zinc-700 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-zinc-500">
            People can watch ideas evolve through each stage.
          </p>
        </div>
      </section>

      {/* Featured projects */}
      <section className="pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-100">
            Latest Activity
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm text-violet-400 transition-colors hover:text-violet-300"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
