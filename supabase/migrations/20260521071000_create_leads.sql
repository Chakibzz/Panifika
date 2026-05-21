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
  created_at timestamptz not null default now()
);

create index if not exists leads_lead_type_idx on public.leads (lead_type);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

drop policy if exists "Service role can manage leads" on public.leads;

create policy "Service role can manage leads"
on public.leads
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
