import type { Project, RoadmapItem, Update } from "./types";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "ReflectiveOS",
    slug: "reflective-os",
    tagline: "A self-aware AI layer with quality scoring and feedback loops",
    description:
      "ReflectiveOS is an AI operating system that monitors its own outputs, scores quality, and creates feedback loops to continuously improve. It introduces a reflective layer between user intent and AI execution — scoring each action, learning from failures, and autonomously adjusting its approach. The goal: AI that doesn't just do, but thinks about how it does.",
    status: "building",
    tags: ["AI", "Framework", "Research"],
    cover_image: null,
    created_at: "2025-11-15T00:00:00Z",
    updated_at: "2026-06-10T00:00:00Z",
    vote_count: 42,
  },
  {
    id: "2",
    title: "Decentralized News Network",
    slug: "decentralized-news-network",
    tagline: "Community-verified news without centralized editorial control",
    description:
      "A protocol for distributing and verifying news where no single entity controls the narrative. Contributors stake reputation on stories, communities vote on accuracy, and algorithms surface consensus rather than engagement. Built on the premise that truth is a coordination problem, not an editorial one.",
    status: "idea",
    tags: ["Web3", "Community", "Media"],
    cover_image: null,
    created_at: "2026-03-01T00:00:00Z",
    updated_at: "2026-06-01T00:00:00Z",
    vote_count: 28,
  },
  {
    id: "3",
    title: "AI School",
    slug: "ai-school",
    tagline: "Learn by building real AI products, not watching tutorials",
    description:
      "A project-first AI education platform where students build real products from day one. No passive lectures. Each module is a product sprint: define, build, ship, reflect. Students graduate with a portfolio of shipped AI projects and the muscle memory to build more.",
    status: "research",
    tags: ["Education", "AI", "Product"],
    cover_image: null,
    created_at: "2026-01-20T00:00:00Z",
    updated_at: "2026-05-15T00:00:00Z",
    vote_count: 67,
  },
  {
    id: "4",
    title: "Supercharged Community",
    slug: "supercharged-community",
    tagline: "Community infrastructure that compounds member value over time",
    description:
      "A framework and toolkit for building communities where every interaction adds compounding value. Members build reputation through contributions, unlock progressively deeper access, and the community itself becomes smarter over time through structured knowledge capture and AI-assisted synthesis.",
    status: "idea",
    tags: ["Community", "SaaS", "Growth"],
    cover_image: null,
    created_at: "2026-04-10T00:00:00Z",
    updated_at: "2026-06-05T00:00:00Z",
    vote_count: 35,
  },
  {
    id: "5",
    title: "Awakey Ecosystem",
    slug: "awakey-ecosystem",
    tagline: "Hardware + software for intentional living and wellness",
    description:
      "A connected ecosystem of wellness hardware and companion software. Smart devices that understand context — your sleep, focus, stress — and software that adapts your environment, routines, and digital experience accordingly. Not another tracker. An operating system for how you live.",
    status: "building",
    tags: ["Wellness", "Hardware", "IoT"],
    cover_image: null,
    created_at: "2025-08-01T00:00:00Z",
    updated_at: "2026-06-12T00:00:00Z",
    vote_count: 53,
  },
  {
    id: "6",
    title: "Thought-to-Publish Pipeline",
    slug: "thought-to-publish",
    tagline: "From raw thought to multi-platform content in one step",
    description:
      "An automation pipeline that takes a raw thought — voice memo, note, sketch — and transforms it into platform-ready content across Twitter, LinkedIn, blog, and newsletter. AI handles formatting, tone adaptation, and scheduling. You think. It publishes.",
    status: "live",
    tags: ["AI", "Automation", "Content"],
    cover_image: null,
    created_at: "2025-06-15T00:00:00Z",
    updated_at: "2026-06-14T00:00:00Z",
    vote_count: 89,
  },
];

export const mockRoadmapItems: Record<string, RoadmapItem[]> = {
  "1": [
    {
      id: "r1",
      project_id: "1",
      title: "Define quality scoring rubric",
      description: "Create the framework for how AI output quality is measured",
      status: "completed",
      order: 1,
      created_at: "2025-11-20T00:00:00Z",
    },
    {
      id: "r2",
      project_id: "1",
      title: "Build reflection middleware",
      description:
        "Implement the layer between user request and AI execution",
      status: "completed",
      order: 2,
      created_at: "2025-12-15T00:00:00Z",
    },
    {
      id: "r3",
      project_id: "1",
      title: "Feedback loop engine",
      description: "System that learns from scored outputs and adjusts behavior",
      status: "in_progress",
      order: 3,
      created_at: "2026-02-01T00:00:00Z",
    },
    {
      id: "r4",
      project_id: "1",
      title: "Dashboard & analytics",
      description: "Visualize quality trends and improvement over time",
      status: "pending",
      order: 4,
      created_at: "2026-04-01T00:00:00Z",
    },
  ],
  "3": [
    {
      id: "r5",
      project_id: "3",
      title: "Curriculum design — Module 1",
      description: "First sprint: build a sentiment classifier from scratch",
      status: "completed",
      order: 1,
      created_at: "2026-01-25T00:00:00Z",
    },
    {
      id: "r6",
      project_id: "3",
      title: "Platform prototype",
      description: "Build the learning environment and project submission flow",
      status: "in_progress",
      order: 2,
      created_at: "2026-03-10T00:00:00Z",
    },
    {
      id: "r7",
      project_id: "3",
      title: "Mentor matching system",
      description: "Pair students with mentors based on project type",
      status: "pending",
      order: 3,
      created_at: "2026-05-01T00:00:00Z",
    },
  ],
  "5": [
    {
      id: "r8",
      project_id: "5",
      title: "TTLock SDK integration",
      description: "Connect hardware layer via TTLock protocol",
      status: "completed",
      order: 1,
      created_at: "2025-09-01T00:00:00Z",
    },
    {
      id: "r9",
      project_id: "5",
      title: "Companion app MVP",
      description: "Mobile app for device control and data visualization",
      status: "in_progress",
      order: 2,
      created_at: "2026-01-15T00:00:00Z",
    },
    {
      id: "r10",
      project_id: "5",
      title: "Context engine",
      description:
        "AI layer that understands user state from combined sensor data",
      status: "pending",
      order: 3,
      created_at: "2026-04-01T00:00:00Z",
    },
  ],
  "6": [
    {
      id: "r11",
      project_id: "6",
      title: "Voice-to-text pipeline",
      description: "Transcription and formatting from voice memos",
      status: "completed",
      order: 1,
      created_at: "2025-07-01T00:00:00Z",
    },
    {
      id: "r12",
      project_id: "6",
      title: "Multi-platform adapters",
      description: "Tone and format adaptation for Twitter, LinkedIn, blog",
      status: "completed",
      order: 2,
      created_at: "2025-10-01T00:00:00Z",
    },
    {
      id: "r13",
      project_id: "6",
      title: "Scheduling engine",
      description: "Optimal time publishing across platforms",
      status: "completed",
      order: 3,
      created_at: "2026-01-01T00:00:00Z",
    },
  ],
};

export const mockUpdates: Record<string, Update[]> = {
  "1": [
    {
      id: "u1",
      project_id: "1",
      title: "Quality scoring v1 complete",
      content:
        "Finished the first iteration of the quality scoring rubric. It evaluates AI outputs across accuracy, relevance, completeness, and tone.",
      created_at: "2026-01-10T00:00:00Z",
    },
    {
      id: "u2",
      project_id: "1",
      title: "Reflection middleware shipped",
      content:
        "The middleware now intercepts every AI call, runs it through the scoring pipeline, and logs results for the feedback engine.",
      created_at: "2026-03-22T00:00:00Z",
    },
    {
      id: "u3",
      project_id: "1",
      title: "Starting feedback loop engine",
      content:
        "Beginning work on the system that takes quality scores and adjusts prompts, context, and model selection dynamically.",
      created_at: "2026-06-01T00:00:00Z",
    },
  ],
  "5": [
    {
      id: "u4",
      project_id: "5",
      title: "TTLock integration working",
      content:
        "Successfully connected to TTLock hardware via their SDK. Can now read sensor data and control smart locks programmatically.",
      created_at: "2025-12-01T00:00:00Z",
    },
    {
      id: "u5",
      project_id: "5",
      title: "Companion app design complete",
      content:
        "Finalized the UI/UX for the companion app. Going for a calm, minimal aesthetic that matches the wellness focus.",
      created_at: "2026-03-15T00:00:00Z",
    },
  ],
  "6": [
    {
      id: "u6",
      project_id: "6",
      title: "Pipeline is live!",
      content:
        "The full thought-to-publish pipeline is operational. Voice memos are now automatically transcribed, adapted, and published across 4 platforms.",
      created_at: "2026-05-01T00:00:00Z",
    },
  ],
};
