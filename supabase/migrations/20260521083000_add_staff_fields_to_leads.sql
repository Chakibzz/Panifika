alter table public.leads
add column if not exists internal_notes text,
add column if not exists assigned_to text,
add column if not exists contacted_at timestamptz;
