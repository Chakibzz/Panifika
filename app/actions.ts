"use server";

import { redirect } from "next/navigation";
import { sendLeadEmails } from "@/lib/email";
import { getSupabaseAdmin } from "@/lib/supabase";

type LeadType = "exhibitor" | "visitor" | "contact" | "speaker" | "sponsor" | "brochure";

type LeadInsert = {
  lead_type: LeadType;
  full_name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  payload: Record<string, string>;
};

function value(formData: FormData, key: string) {
  const raw = formData.get(key);
  return typeof raw === "string" ? raw.trim() : "";
}

async function insertLead(type: LeadType, formData: FormData) {
  const payload: Record<string, string> = {};

  for (const [key, raw] of formData.entries()) {
    if (typeof raw === "string" && key !== "lead_type") {
      payload[key] = raw.trim();
    }
  }

  const supabase = getSupabaseAdmin();
  const lead: LeadInsert = {
    lead_type: type,
    full_name: value(formData, "full_name") || [value(formData, "first_name"), value(formData, "last_name")].filter(Boolean).join(" "),
    email: value(formData, "email"),
    phone: value(formData, "phone"),
    company: value(formData, "company"),
    topic: value(formData, "topic") || value(formData, "sector") || value(formData, "visitor_category"),
    payload
  };

  const { error } = await (supabase.from("leads") as any).insert(lead);

  if (error) {
    throw new Error(error.message);
  }

  await sendLeadEmails({
    leadType: type,
    fullName: lead.full_name,
    email: lead.email,
    company: lead.company,
    topic: lead.topic
  });
}

export async function submitExhibitorLead(formData: FormData) {
  await insertLead("exhibitor", formData);
  redirect("/thank-you?type=exhibitor");
}

export async function submitVisitorRegistration(formData: FormData) {
  await insertLead("visitor", formData);
  redirect("/thank-you?type=visitor");
}

export async function submitContactMessage(formData: FormData) {
  await insertLead("contact", formData);
  redirect("/thank-you?type=contact");
}

export async function submitSpeakerInterest(formData: FormData) {
  await insertLead("speaker", formData);
  redirect("/thank-you?type=speaker");
}

export async function submitSponsorInterest(formData: FormData) {
  await insertLead("sponsor", formData);
  redirect("/thank-you?type=sponsor");
}

export async function submitBrochureRequest(formData: FormData) {
  await insertLead("brochure", formData);
  redirect("/thank-you?type=brochure");
}
