"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  ["How do I register as a visitor?", "Use the registration page to request a professional visitor badge and select the most relevant visitor category."],
  ["Can international exhibitors book a booth?", "Yes. PANIFIKA EXPO is structured for international suppliers, equipment manufacturers, ingredient brands and service providers."],
  ["Are conferences included with visitor access?", "Main conferences are included with professional access. Masterclasses and competitions may require dedicated seat reservations."],
  ["What sectors are represented?", "Bakery, pastry, pizza, coffee, ingredients, packaging, cold chain, ovens and professional food equipment."],
  ["How do I request the exhibitor brochure?", "Submit the lead generation form on the Become Exhibitor page and the organizing team will follow up with booth options."],
  ["Is there support for logistics and access?", "The organizer provides access guidance, exhibitor deadlines, booth setup coordination and badge information before the event."]
];

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-[14px]">
      {questions.map(([question, answer], index) => {
        const active = open === index;
        return (
          <div key={question} className="overflow-hidden rounded-[22px] border border-[#f3ad16]/22 bg-[#23130d]/82">
            <button
              type="button"
              onClick={() => setOpen(active ? -1 : index)}
              className="flex w-full items-center justify-between gap-[20px] px-[22px] py-[20px] text-left text-[16px] font-black uppercase tracking-[0.05em] text-[#fff4d3]"
            >
              {question}
              <ChevronDown className={`h-[20px] w-[20px] shrink-0 text-[#f3ad16] transition ${active ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="border-t border-[#f3ad16]/14 px-[22px] pb-[22px] pt-[16px] text-[15px] leading-[1.74] text-[#d9bb82]">{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
