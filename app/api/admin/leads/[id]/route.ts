import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase";

const statuses = ["new", "contacted", "qualified", "proposal", "converted", "archived"];

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = (await request.json()) as {
    status?: string;
    internal_notes?: string;
    assigned_to?: string;
    contacted_at?: string | null;
  };

  const update: Record<string, string | null> = {};

  if (body.status && statuses.includes(body.status)) {
    update.status = body.status;
  }

  if (typeof body.internal_notes === "string") {
    update.internal_notes = body.internal_notes;
  }

  if (typeof body.assigned_to === "string") {
    update.assigned_to = body.assigned_to;
  }

  if ("contacted_at" in body) {
    update.contacted_at = body.contacted_at || null;
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await (supabase.from("leads") as any)
    .update(update)
    .eq("id", id)
    .select("id, lead_type, full_name, email, phone, company, topic, payload, status, internal_notes, assigned_to, contacted_at, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ lead: data });
}
