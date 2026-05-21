import { createClient } from "@supabase/supabase-js";

type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          lead_type: string;
          full_name: string | null;
          email: string | null;
          phone: string | null;
          company: string | null;
          topic: string | null;
          payload: Record<string, string>;
          status: string;
          internal_notes: string | null;
          assigned_to: string | null;
          contacted_at: string | null;
          created_at: string;
        };
        Insert: {
          lead_type: string;
          full_name?: string | null;
          email?: string | null;
          phone?: string | null;
          company?: string | null;
          topic?: string | null;
          payload?: Record<string, string>;
          status?: string;
          internal_notes?: string | null;
          assigned_to?: string | null;
          contacted_at?: string | null;
        };
        Update: {
          lead_type?: string;
          full_name?: string | null;
          email?: string | null;
          phone?: string | null;
          company?: string | null;
          topic?: string | null;
          payload?: Record<string, string>;
          status?: string;
          internal_notes?: string | null;
          assigned_to?: string | null;
          contacted_at?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let supabaseAdmin: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  if (!supabaseAdmin) {
    supabaseAdmin = createClient<Database>(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
  }

  return supabaseAdmin;
}
