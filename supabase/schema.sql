create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null check (lead_type in ('exhibitor', 'visitor', 'contact', 'speaker', 'sponsor', 'brochure')),
  full_name text,
  email text,
  phone text,
  company text,
  topic text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'new',
  internal_notes text,
  assigned_to text,
  contacted_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists leads_lead_type_idx on public.leads (lead_type);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

create policy "Service role can manage leads"
on public.leads
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
