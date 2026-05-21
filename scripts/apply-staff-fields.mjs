import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
}

const supabase = createClient(url, key, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

const statements = [
  "alter table public.leads add column if not exists internal_notes text",
  "alter table public.leads add column if not exists assigned_to text",
  "alter table public.leads add column if not exists contacted_at timestamptz"
];

for (const statement of statements) {
  const { error } = await supabase.rpc("exec_sql", { sql: statement });

  if (error) {
    console.log(`Could not run via rpc: ${statement}`);
    console.log(error.message);
    console.log("Run supabase/migrations/20260521083000_add_staff_fields_to_leads.sql in SQL Editor if needed.");
    process.exit(0);
  }
}

console.log("Staff fields applied.");
