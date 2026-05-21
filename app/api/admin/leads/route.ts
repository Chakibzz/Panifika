import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  const query = (supabase.from("leads") as any)
    .select("id, lead_type, full_name, email, phone, company, topic, payload, status, internal_notes, assigned_to, contacted_at, created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  let { data, error } = await query;

  if (error && error.message.includes("does not exist")) {
    const fallback = await (supabase.from("leads") as any)
      .select("id, lead_type, full_name, email, phone, company, topic, payload, status, created_at")
      .order("created_at", { ascending: false })
      .limit(500);

    data = (fallback.data || []).map((lead: Record<string, unknown>) => ({
      ...lead,
      internal_notes: null,
      assigned_to: null,
      contacted_at: null
    }));
    error = fallback.error;
  }

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data || [] });
}
