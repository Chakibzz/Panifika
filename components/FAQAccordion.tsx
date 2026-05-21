"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { tx } from "@/lib/i18n";
import { LocalizedTextView } from "./LocalizedText";

const questions = [
  [tx("Comment s'inscrire comme visiteur ?", "How do I register as a visitor?"), tx("Utilisez la page inscription pour demander un badge professionnel et choisir le profil visiteur le plus adapté.", "Use the registration page to request a professional visitor badge and select the most relevant visitor category.")],
  [tx("Les exposants internationaux peuvent-ils réserver un stand ?", "Can international exhibitors book a booth?"), tx("Oui. PANIFIKA EXPO est structuré pour accueillir fournisseurs internationaux, fabricants d'équipements, marques ingrédients et prestataires professionnels.", "Yes. PANIFIKA EXPO is structured for international suppliers, equipment manufacturers, ingredient brands and service providers.")],
  [tx("Les conférences sont-elles incluses avec l'accès visiteur ?", "Are conferences included with visitor access?"), tx("Les conférences principales sont prévues avec l'accès professionnel. Certains ateliers ou masterclasses pourront demander une réservation dédiée.", "Main conferences are included with professional access. Masterclasses and competitions may require dedicated seat reservations.")],
  [tx("Quels secteurs sont représentés ?", "What sectors are represented?"), tx("Boulangerie, pâtisserie, pizza, café, ingrédients, packaging, froid, fours et équipements alimentaires professionnels.", "Bakery, pastry, pizza, coffee, ingredients, packaging, cold chain, ovens and professional food equipment.")],
  [tx("Comment demander la brochure exposant ?", "How do I request the exhibitor brochure?"), tx("Envoyez le formulaire exposant. L'équipe organisatrice reviendra vers vous avec les options de stand adaptées.", "Submit the lead generation form on the Become Exhibitor page and the organizing team will follow up with booth options.")],
  [tx("Un accompagnement logistique est-il prévu ?", "Is there support for logistics and access?"), tx("L'organisation publiera les informations d'accès, délais exposants, coordination montage et badges avant l'événement.", "The organizer provides access guidance, exhibitor deadlines, booth setup coordination and badge information before the event.")]
];

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-[14px]">
      {questions.map(([question, answer], index) => {
        const active = open === index;
        return (
          <div key={question.en} className="overflow-hidden rounded-[22px] border border-[#f3ad16]/22 bg-[#23130d]/82">
            <button
              type="button"
              onClick={() => setOpen(active ? -1 : index)}
              className="flex w-full items-center justify-between gap-[20px] px-[22px] py-[20px] text-left text-[16px] font-black uppercase tracking-[0.05em] text-[#fff4d3]"
            >
              <LocalizedTextView value={question} />
              <ChevronDown className={`h-[20px] w-[20px] shrink-0 text-[#f3ad16] transition ${active ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="border-t border-[#f3ad16]/14 px-[22px] pb-[22px] pt-[16px] text-[15px] leading-[1.74] text-[#d9bb82]"><LocalizedTextView value={answer} /></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
