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

const leads = [
  {
    lead_type: "exhibitor",
    full_name: "Nadia Benali",
    email: "nadia.benali@example.com",
    phone: "+213 560 221 904",
    company: "FourTech Industrie",
    topic: "Equipment",
    payload: {
      salutation: "Mrs",
      job_title: "Sales Director",
      country: "Algeria",
      stand_option: "24 sqm",
      sector: "Food equipment",
      source: "LinkedIn",
      message: "Interested in ovens and production line visibility."
    }
  },
  {
    lead_type: "exhibitor",
    full_name: "Marco Rinaldi",
    email: "marco.rinaldi@example.com",
    phone: "+39 331 778 4400",
    company: "Italia Forni",
    topic: "Custom pavilion",
    payload: {
      salutation: "Mr",
      job_title: "Export Manager",
      country: "Italy",
      stand_option: "36 sqm",
      sector: "Bakery",
      source: "Email invitation"
    }
  },
  {
    lead_type: "visitor",
    full_name: "Karim Ait Said",
    email: "karim.aitsaid@example.com",
    phone: "+213 555 901 221",
    company: "Maison du Pain",
    topic: "Buyer",
    payload: {
      first_name: "Karim",
      last_name: "Ait Said",
      visitor_category: "Buyer",
      interest: "Bakery"
    }
  },
  {
    lead_type: "visitor",
    full_name: "Sarah Haddad",
    email: "sarah.haddad@example.com",
    phone: "+213 661 228 771",
    company: "Hotel Atlas",
    topic: "Professional Visitor",
    payload: {
      first_name: "Sarah",
      last_name: "Haddad",
      visitor_category: "Professional Visitor",
      interest: "Coffee"
    }
  },
  {
    lead_type: "sponsor",
    full_name: "Yacine Merabet",
    email: "yacine.merabet@example.com",
    phone: "+213 770 120 456",
    company: "Golden Wheat Group",
    topic: "Conference sponsor",
    payload: {
      budget_stage: "Need proposal",
      message: "Looking for visibility around conferences and registration."
    }
  },
  {
    lead_type: "speaker",
    full_name: "Chef Amel Khelifi",
    email: "amel.khelifi@example.com",
    phone: "+213 550 778 300",
    company: "Academie Patisserie Alger",
    topic: "Workshop",
    payload: {
      proposed_title: "Modern viennoiserie for hotel pastry teams",
      message: "Can host a technical workshop on lamination and production consistency."
    }
  },
  {
    lead_type: "brochure",
    full_name: "Thomas Meyer",
    email: "thomas.meyer@example.com",
    phone: "+49 171 445 0021",
    company: "Meyer Ingredients",
    topic: "Exhibitor brochure",
    payload: {
      profile: "Exhibitor",
      document: "Exhibitor brochure"
    }
  },
  {
    lead_type: "contact",
    full_name: "Leila Mansouri",
    email: "leila.mansouri@example.com",
    phone: "+213 560 003 112",
    company: "Food Business Magazine",
    topic: "Press",
    payload: {
      message: "Requesting media accreditation details and future press kit."
    }
  }
];

const { error } = await supabase.from("leads").insert(leads);

if (error) {
  throw new Error(error.message);
}

console.log(`Inserted ${leads.length} seed leads.`);
