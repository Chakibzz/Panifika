"use client";

import { Building2, Download, Mail, Phone, Search, UserRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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
const statuses = ["new", "contacted", "qualified", "proposal", "converted", "archived"];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function csvEscape(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

function whatsappUrl(phone: string | null, name: string | null) {
  if (!phone) {
    return "";
  }

  const normalized = phone.replace(/[^\d+]/g, "").replace(/^00/, "+");
  const international = normalized.startsWith("+") ? normalized.slice(1) : normalized;
  const message = encodeURIComponent(`Bonjour ${name || ""}, je vous contacte concernant votre demande PANIFIKA EXPO.`.trim());
  return `https://wa.me/${international}?text=${message}`;
}

function emailUrl(email: string | null, name: string | null, type: string) {
  if (!email) {
    return "";
  }

  const subject = encodeURIComponent(`PANIFIKA EXPO - ${type} request`);
  const body = encodeURIComponent(`Bonjour ${name || ""},\n\nMerci pour votre demande concernant PANIFIKA EXPO.\n\nCordialement,\nL'equipe PANIFIKA EXPO`);
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export function AdminDashboard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [activeType, setActiveType] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(initialLeads[0]?.id || "");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function refresh() {
      setLoading(true);
      const response = await fetch("/api/admin/leads", { cache: "no-store" });
      if (response.ok) {
        const data = (await response.json()) as { leads: Lead[] };
        setLeads(data.leads);
        setSelectedId((current) => current || data.leads[0]?.id || "");
      }
      setLoading(false);
    }

    refresh();
  }, []);

  const counts = useMemo(() => {
    return filters.reduce<Record<string, number>>((acc, type) => {
      acc[type] = type === "all" ? leads.length : leads.filter((lead) => lead.lead_type === type).length;
      return acc;
    }, {});
  }, [leads]);

  const filteredLeads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesType = activeType === "all" || lead.lead_type === activeType;
      const haystack = [lead.full_name, lead.email, lead.phone, lead.company, lead.topic, lead.lead_type, ...Object.values(lead.payload || {})]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesType && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeType, leads, query]);

  const selectedLead = filteredLeads.find((lead) => lead.id === selectedId) || filteredLeads[0] || null;

  async function updateLead(id: string, patch: Partial<Pick<Lead, "status" | "internal_notes" | "assigned_to" | "contacted_at">>) {
    setSaving(true);
    const response = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch)
    });

    if (response.ok) {
      const data = (await response.json()) as { lead: Lead };
      setLeads((current) => current.map((lead) => (lead.id === id ? data.lead : lead)));
    }

    setSaving(false);
  }

  function exportCsv() {
    const headers = ["type", "name", "email", "phone", "company", "topic", "status", "created_at"];
    const rows = filteredLeads.map((lead) => [
      lead.lead_type,
      lead.full_name || "",
      lead.email || "",
      lead.phone || "",
      lead.company || "",
      lead.topic || "",
      lead.status || "",
      lead.created_at
    ]);
    const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `panifika-leads-${activeType}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-[1480px] px-[18px] py-[24px] text-[#f7ead0] md:px-[32px]">
      <div className="flex flex-col gap-[18px] border-b border-[#f3ad16]/16 pb-[22px] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f3ad16]">PANIFIKA admin</p>
          <h1 className="mt-[8px] text-[34px] font-black uppercase leading-[1] text-[#fff4d3] md:text-[48px]">Lead management</h1>
          <p className="mt-[10px] max-w-[760px] text-[15px] leading-[1.65] text-[#c9a66b]">
            Centralisez les demandes exposants, visiteurs, sponsors, speakers, brochures et contacts.
          </p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <button onClick={exportCsv} className="inline-flex h-[42px] items-center gap-[8px] rounded-[8px] border border-[#f3ad16]/32 px-[14px] text-[11px] font-black uppercase tracking-[0.12em] text-[#fff2cf] transition hover:bg-[#f3ad16]/10">
            <Download className="h-[15px] w-[15px]" />
            Export CSV
          </button>
          <span className="inline-flex h-[42px] items-center rounded-[8px] bg-[#f3ad16] px-[14px] text-[11px] font-black uppercase tracking-[0.12em] text-[#4b0f0b]">
            {loading ? "Syncing" : "Live data"}
          </span>
        </div>
      </div>

      <div className="mt-[20px] grid gap-[12px] md:grid-cols-4">
        <Metric label="Total" value={counts.all || 0} />
        <Metric label="Exhibitors" value={counts.exhibitor || 0} />
        <Metric label="Visitors" value={counts.visitor || 0} />
        <Metric label="Commercial" value={(counts.sponsor || 0) + (counts.brochure || 0)} />
      </div>

      <div className="mt-[20px] rounded-[12px] border border-[#f3ad16]/18 bg-[#160d09] p-[14px]">
        <div className="grid gap-[12px] xl:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-[14px] top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[#f3ad16]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, company, email, phone, sector, message..."
              className="h-[46px] w-full rounded-[8px] border border-[#f3ad16]/20 bg-[#0f0805] pl-[42px] pr-[14px] text-[14px] text-[#fff4d3] outline-none placeholder:text-[#8f7653] focus:border-[#f3ad16]/70"
            />
          </label>
          <div className="flex flex-wrap gap-[8px]">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveType(filter);
                  setSelectedId("");
                }}
                className={`h-[46px] rounded-[8px] px-[13px] text-[10px] font-black uppercase tracking-[0.12em] transition ${
                  activeType === filter ? "bg-[#f3ad16] text-[#4b0f0b]" : "border border-[#f3ad16]/24 text-[#f5dfb6] hover:bg-[#f3ad16]/10"
                }`}
              >
                {filter} <span className="ml-[6px] opacity-70">{counts[filter] || 0}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[20px] grid gap-[18px] xl:grid-cols-[1fr_380px]">
        <div className="overflow-hidden rounded-[12px] border border-[#f3ad16]/18 bg-[#160d09]">
          <div className="grid min-w-[1000px] grid-cols-[118px_1.1fr_1fr_1fr_1fr_136px] gap-[14px] border-b border-[#f3ad16]/14 px-[16px] py-[13px] text-[10px] font-black uppercase tracking-[0.14em] text-[#f3ad16]">
            <span>Type</span>
            <span>Contact</span>
            <span>Company</span>
            <span>Topic</span>
            <span>Phone / Email</span>
            <span>Received</span>
          </div>
          <div className="max-h-[620px] overflow-auto">
            {filteredLeads.length === 0 ? (
              <div className="p-[28px] text-[15px] font-bold text-[#d9bb82]">No matching submissions.</div>
            ) : (
              filteredLeads.map((lead) => (
                <button
                  key={lead.id}
                  type="button"
                  onClick={() => setSelectedId(lead.id)}
                  className={`grid min-w-[1000px] grid-cols-[118px_1.1fr_1fr_1fr_1fr_136px] gap-[14px] border-b border-[#f3ad16]/8 px-[16px] py-[14px] text-left text-[13px] transition last:border-b-0 ${
                    selectedLead?.id === lead.id ? "bg-[#f3ad16]/10" : "hover:bg-[#ffffff]/[0.025]"
                  }`}
                >
                  <span className="rounded-[6px] bg-[#f3ad16]/12 px-[9px] py-[7px] text-[10px] font-black uppercase tracking-[0.12em] text-[#ffd565]">{lead.lead_type}</span>
                  <span className="font-bold text-[#fff4d3]">{lead.full_name || "-"}</span>
                  <span className="text-[#e4c78e]">{lead.company || "-"}</span>
                  <span className="text-[#d9bb82]">
                    {lead.topic || "-"}
                    <small className="mt-[4px] block text-[10px] font-black uppercase tracking-[0.12em] text-[#9f8763]">{lead.status}</small>
                  </span>
                  <span className="text-[#c9a66b]">{lead.phone || lead.email || "-"}</span>
                  <span className="text-[#c9a66b]">{formatDate(lead.created_at)}</span>
                </button>
              ))
            )}
          </div>
        </div>

        <aside className="rounded-[12px] border border-[#f3ad16]/18 bg-[#160d09] p-[18px]">
          {selectedLead ? (
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]">{selectedLead.lead_type}</p>
              <h2 className="mt-[8px] text-[28px] font-black uppercase leading-[1] text-[#fff4d3]">{selectedLead.full_name || "Unnamed lead"}</h2>
              <p className="mt-[8px] text-[13px] font-bold text-[#c9a66b]">{formatDate(selectedLead.created_at)}</p>

              <div className="mt-[18px] grid grid-cols-2 gap-[10px]">
                <ContactButton href={whatsappUrl(selectedLead.phone, selectedLead.full_name)} label="WhatsApp" />
                <ContactButton href={emailUrl(selectedLead.email, selectedLead.full_name, selectedLead.lead_type)} label="Email" />
              </div>

              <div className="mt-[18px] rounded-[10px] border border-[#f3ad16]/16 bg-[#0f0805] p-[12px]">
                <div className="grid gap-[10px]">
                  <label>
                    <span className="mb-[7px] block text-[10px] font-black uppercase tracking-[0.13em] text-[#f3ad16]">Status</span>
                    <select
                      value={selectedLead.status}
                      onChange={(event) => updateLead(selectedLead.id, { status: event.target.value })}
                      className="h-[40px] w-full rounded-[8px] border border-[#f3ad16]/20 bg-[#160d09] px-[10px] text-[13px] font-bold text-[#fff4d3] outline-none"
                    >
                      {statuses.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span className="mb-[7px] block text-[10px] font-black uppercase tracking-[0.13em] text-[#f3ad16]">Assigned to</span>
                    <input
                      defaultValue={selectedLead.assigned_to || ""}
                      onBlur={(event) => updateLead(selectedLead.id, { assigned_to: event.target.value })}
                      placeholder="Staff member"
                      className="h-[40px] w-full rounded-[8px] border border-[#f3ad16]/20 bg-[#160d09] px-[10px] text-[13px] font-bold text-[#fff4d3] outline-none placeholder:text-[#8f7653]"
                    />
                  </label>
                  <label>
                    <span className="mb-[7px] block text-[10px] font-black uppercase tracking-[0.13em] text-[#f3ad16]">Internal notes</span>
                    <textarea
                      key={selectedLead.id}
                      defaultValue={selectedLead.internal_notes || ""}
                      onBlur={(event) => updateLead(selectedLead.id, { internal_notes: event.target.value })}
                      placeholder="Notes visibles uniquement par le staff"
                      className="min-h-[96px] w-full rounded-[8px] border border-[#f3ad16]/20 bg-[#160d09] p-[10px] text-[13px] font-bold leading-[1.5] text-[#fff4d3] outline-none placeholder:text-[#8f7653]"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => updateLead(selectedLead.id, { status: "contacted", contacted_at: new Date().toISOString() })}
                    className="h-[40px] rounded-[8px] border border-[#f3ad16]/32 px-[12px] text-[10px] font-black uppercase tracking-[0.13em] text-[#fff2cf] transition hover:bg-[#f3ad16]/10"
                  >
                    {saving ? "Saving..." : "Mark contacted"}
                  </button>
                  {selectedLead.contacted_at ? <p className="text-[11px] font-bold text-[#c9a66b]">Contacted: {formatDate(selectedLead.contacted_at)}</p> : null}
                </div>
              </div>

              <div className="mt-[22px] space-y-[10px]">
                <Info icon={<Building2 />} label="Company" value={selectedLead.company} />
                <Info icon={<Mail />} label="Email" value={selectedLead.email} />
                <Info icon={<Phone />} label="Phone" value={selectedLead.phone} />
                <Info icon={<UserRound />} label="Topic" value={selectedLead.topic} />
              </div>

              <div className="mt-[22px] border-t border-[#f3ad16]/14 pt-[18px]">
                <h3 className="text-[12px] font-black uppercase tracking-[0.16em] text-[#f3ad16]">Full payload</h3>
                <div className="mt-[12px] space-y-[9px]">
                  {Object.entries(selectedLead.payload || {}).map(([key, value]) => (
                    <div key={key} className="rounded-[8px] bg-[#0f0805] p-[10px]">
                      <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#9f8763]">{key.replaceAll("_", " ")}</p>
                      <p className="mt-[4px] break-words text-[13px] text-[#f5dfb6]">{value || "-"}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-[15px] font-bold text-[#d9bb82]">Select a lead to inspect details.</p>
          )}
        </aside>
      </div>
    </div>
  );
}

function ContactButton({ href, label }: { href: string; label: string }) {
  const disabled = !href;

  if (disabled) {
    return (
      <span className="inline-flex h-[42px] items-center justify-center rounded-[8px] border border-[#f3ad16]/12 px-[12px] text-[10px] font-black uppercase tracking-[0.13em] text-[#7f6748]">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={label === "WhatsApp" ? "_blank" : undefined}
      rel={label === "WhatsApp" ? "noreferrer" : undefined}
      className="inline-flex h-[42px] items-center justify-center rounded-[8px] bg-[#f3ad16] px-[12px] text-[10px] font-black uppercase tracking-[0.13em] text-[#4b0f0b] transition hover:bg-[#ffd565]"
    >
      {label}
    </a>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[12px] border border-[#f3ad16]/18 bg-[#160d09] p-[16px]">
      <div className="text-[34px] font-black leading-none text-[#ffd565]">{value}</div>
      <div className="mt-[7px] text-[10px] font-black uppercase tracking-[0.16em] text-[#c9a66b]">{label}</div>
    </div>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | null }) {
  return (
    <div className="flex gap-[10px] rounded-[8px] bg-[#0f0805] p-[11px]">
      <span className="mt-[2px] text-[#f3ad16] [&_svg]:h-[16px] [&_svg]:w-[16px]">{icon}</span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#9f8763]">{label}</p>
        <p className="mt-[4px] break-words text-[14px] font-bold text-[#fff4d3]">{value || "-"}</p>
      </div>
    </div>
  );
}
