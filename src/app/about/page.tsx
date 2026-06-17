import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Brain, Rocket, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Ankit.build",
  description: "Builder, thinker, product person. From zero to one.",
};

const PILLARS = [
  {
    icon: Brain,
    title: "Venture Thinking",
    description:
      "Identifying opportunities at intersections of technology, behavior, and market gaps. Thinking from first principles.",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Zap,
    title: "Creative Direction",
    description:
      "Shaping ideas into products with intentional design, clear messaging, and user-centric experiences.",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Rocket,
    title: "AI Building",
    description:
      "Leveraging AI as a force multiplier — building with agents, automation, and intelligent systems.",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Users,
    title: "Community & Impact",
    description:
      "Creating systems that compound value for people — education, wellness, and collaborative infrastructure.",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      {/* Intro */}
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-violet-400">About</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Builder. Thinker.
          <br />
          <span className="text-zinc-500">Zero to One.</span>
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-400">
          <p>
            I&apos;m Ankit — I build things from scratch. Not just products, but
            systems, frameworks, and ways of thinking that compound over time.
          </p>
          <p>
            This isn&apos;t a portfolio of finished work. It&apos;s a living map of
            everything I&apos;m thinking about, exploring, validating, and building.
            Some ideas will ship. Some will evolve into something else. Some will
            stay as explorations. That&apos;s the point.
          </p>
          <p>
            The platform itself is part of the experiment — it&apos;s built and
            maintained through a Builder OS where AI agents pick up tasks from a
            roadmap and ship features autonomously while I focus on product
            direction.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <section className="mt-16">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
          How I Think
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-5"
            >
              <div
                className={`inline-flex items-center justify-center rounded-xl border p-2.5 ${pillar.color}`}
              >
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-zinc-100">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Builder OS */}
      <section className="mt-16 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-zinc-100">
          The Builder OS
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          This website continuously improves even when I&apos;m not actively coding.
          Here&apos;s the workflow:
        </p>
        <div className="mt-5 space-y-3 font-mono text-sm text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-violet-400">→</span>
            <span>Ankit provides concept / PRD</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-violet-400">→</span>
            <span>Roadmap is generated</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-violet-400">→</span>
            <span>Agent picks next task</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-violet-400">→</span>
            <span>Builds → Tests → Creates PR</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-violet-400">→</span>
            <span>Moves roadmap forward → Repeats</span>
          </div>
        </div>
        <p className="mt-5 text-sm text-zinc-500">
          I remain the <span className="text-zinc-300">Product Owner</span>.
          The agent is the <span className="text-zinc-300">Engineer</span>.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          See what I&apos;m building
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
