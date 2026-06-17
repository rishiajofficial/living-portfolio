-- Living Portfolio — Supabase Schema
-- Run this in the Supabase SQL Editor to set up the database

-- ============================================
-- TABLES
-- ============================================

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  tagline text not null default '',
  description text not null default '',
  status text not null default 'idea' check (status in ('idea', 'research', 'building', 'live')),
  tags text[] not null default '{}',
  cover_image text,
  vote_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roadmap_items (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'completed')),
  "order" integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.updates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  content text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.votes (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  voter_id text not null,
  created_at timestamptz not null default now(),
  unique(project_id, voter_id)
);

-- ============================================
-- INDEXES
-- ============================================

create index if not exists idx_projects_slug on public.projects(slug);
create index if not exists idx_projects_status on public.projects(status);
create index if not exists idx_roadmap_items_project on public.roadmap_items(project_id);
create index if not exists idx_updates_project on public.updates(project_id);
create index if not exists idx_votes_project on public.votes(project_id);
create index if not exists idx_votes_unique on public.votes(project_id, voter_id);

-- ============================================
-- RLS POLICIES
-- ============================================

alter table public.projects enable row level security;
alter table public.roadmap_items enable row level security;
alter table public.updates enable row level security;
alter table public.votes enable row level security;

-- Public read access for all tables
create policy "Public read projects" on public.projects for select using (true);
create policy "Public read roadmap_items" on public.roadmap_items for select using (true);
create policy "Public read updates" on public.updates for select using (true);

-- Votes: public can insert (one per voter per project), read own
create policy "Public insert votes" on public.votes for insert with check (true);
create policy "Public read votes" on public.votes for select using (true);

-- ============================================
-- FUNCTIONS
-- ============================================

create or replace function public.increment_vote_count(p_project_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  update public.projects
  set vote_count = vote_count + 1
  where id = p_project_id;
end;
$$;

-- ============================================
-- AUTO-UPDATE updated_at
-- ============================================

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at
  before update on public.projects
  for each row
  execute function public.handle_updated_at();
