import type { Metadata } from "next";
import { loginAdmin, logoutAdmin } from "@/app/admin/actions";
import { AdminDashboard } from "@/components/AdminDashboard";
import { PremiumInput } from "@/components/FormControls";
import { PremiumCard } from "@/components/PremiumPrimitives";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Admin | PANIFIKA EXPO",
  description: "PANIFIKA EXPO administration dashboard."
};

type SearchParams = Promise<{ error?: string; type?: string }>;

type Lead = {
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

const filters = ["all", "exhibitor", "visitor", "contact", "speaker", "sponsor", "brochure"];

async function getLeads(type: string) {
  const supabase = getSupabaseAdmin();
  let query = (supabase.from("leads") as any)
    .select("id, lead_type, full_name, email, phone, company, topic, payload, status, internal_notes, assigned_to, contacted_at, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (type !== "all") {
    query = query.eq("lead_type", type);
  }

  let { data, error } = await query;

  if (error && error.message.includes("does not exist")) {
    const fallback = await (supabase.from("leads") as any)
      .select("id, lead_type, full_name, email, phone, company, topic, payload, status, created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    data = (fallback.data || []).map((lead: Record<string, unknown>) => ({
      ...lead,
      internal_notes: null,
      assigned_to: null,
      contacted_at: null
    }));
    error = fallback.error;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (data || []) as Lead[];
}

function AdminLogin({ hasError }: { hasError: boolean }) {
  return (
    <main className="min-h-screen bg-[#0f0805] px-[18px] py-[34px] text-[#fff6df] md:px-[48px]">
      <section className="flex min-h-[calc(100vh-68px)] items-center justify-center">
        <PremiumCard className="mx-auto max-w-[560px] p-[28px]">
          <form action={loginAdmin}>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f3ad16]">PANIFIKA admin</p>
            <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]">Admin login.</h2>
            <p className="mt-[12px] text-[15px] leading-[1.65] text-[#c9a66b]">Acces staff protege pour gerer les demandes du salon.</p>
            {hasError ? <p className="mt-[16px] rounded-[10px] border border-[#ff5d45]/40 bg-[#ff5d45]/10 p-[12px] text-[14px] font-bold text-[#ffd5ce]">Wrong password.</p> : null}
            <div className="mt-[24px]">
              <PremiumInput label="Password" name="password" placeholder="Admin password" type="password" required />
            </div>
            <button className="mt-[24px] inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] transition duration-300 hover:bg-[#ffd565]">
              Login
            </button>
          </form>
        </PremiumCard>
      </section>
    </main>
  );
}

export default async function AdminPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return <AdminLogin hasError={params.error === "1"} />;
  }

  const activeType = filters.includes(params.type || "") ? params.type || "all" : "all";
  const leads = await getLeads(activeType);

  return (
    <main className="min-h-screen bg-[#0f0805] text-[#fff6df]">
      <section className="border-b border-[#f3ad16]/14 bg-[#120c08] px-[18px] py-[12px] md:px-[32px]">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-[14px]">
          <a href="/" className="text-[12px] font-black uppercase tracking-[0.18em] text-[#ffd565]">
            PANIFIKA EXPO
          </a>
          <form action={logoutAdmin}>
            <button className="rounded-[8px] border border-[#f3ad16]/34 px-[14px] py-[10px] text-[10px] font-black uppercase tracking-[0.14em] text-[#fff2cf] transition hover:bg-[#f3ad16]/10">
              Logout
            </button>
          </form>
        </div>
      </section>
      <AdminDashboard initialLeads={leads} />
    </main>
  );
}
