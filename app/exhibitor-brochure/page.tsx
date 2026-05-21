import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Exhibitor Brochure | PANIFIKA EXPO",
  description: "Printable exhibitor brochure for PANIFIKA EXPO."
};

const sections = [
  ["Event", "First edition scheduled for late 2027 in Algiers, Algeria."],
  ["Positioning", "Professional bakery, pastry, pizza, coffee and food equipment exhibition."],
  ["Audience", "Bakery owners, chefs, distributors, hotel and restaurant buyers, retailers and investors."],
  ["Opportunities", "Stand presence, product demonstrations, workshops, sponsorship and buyer meetings."]
];

const sectors = ["Bakery equipment", "Ingredients", "Pastry and chocolate", "Pizza and snacking", "Coffee and hospitality", "Packaging", "Services and training"];

export default function ExhibitorBrochurePage() {
  return (
    <main className="min-h-screen bg-[#f8eed5] p-[22px] text-[#3a1c10] print:bg-white print:p-0">
      <div className="mx-auto max-w-[920px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_90px_rgba(58,28,16,0.18)] print:rounded-none print:shadow-none">
        <section className="relative min-h-[520px] bg-[#120a05] p-[42px] text-[#fff4d3]">
          <Image src="/assets/panifika-logo.png" alt="PANIFIKA EXPO" width={420} height={180} className="h-auto w-[360px] max-w-full" priority />
          <div className="mt-[74px] max-w-[720px]">
            <p className="text-[13px] font-black uppercase tracking-[0.28em] text-[#ffd94a]">Exhibitor brochure</p>
            <h1 className="mt-[18px] text-[58px] font-black uppercase leading-[0.94] tracking-[-0.04em]">Join the first edition.</h1>
            <p className="mt-[22px] text-[22px] leading-[1.55] text-[#f5dfb6]">PANIFIKA EXPO is preparing a premium professional platform for bakery and food service suppliers in late 2027.</p>
          </div>
        </section>

        <section className="grid gap-[18px] p-[42px] md:grid-cols-2">
          {sections.map(([title, copy]) => (
            <article key={title} className="rounded-[16px] border border-[#e9a817]/35 p-[22px]">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#9f2119]">{title}</p>
              <p className="mt-[10px] text-[18px] font-bold leading-[1.45]">{copy}</p>
            </article>
          ))}
        </section>

        <section className="border-y border-[#e9a817]/30 bg-[#fff8e7] p-[42px]">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#9f2119]">Target sectors</p>
          <div className="mt-[20px] grid gap-[10px] md:grid-cols-2">
            {sectors.map((sector) => (
              <div key={sector} className="rounded-[12px] bg-white px-[16px] py-[13px] text-[16px] font-black uppercase text-[#4b2414]">
                {sector}
              </div>
            ))}
          </div>
        </section>

        <section className="p-[42px]">
          <h2 className="text-[38px] font-black uppercase leading-[1] tracking-[-0.03em]">Commercial next step.</h2>
          <p className="mt-[16px] text-[18px] leading-[1.6]">Companies can register interest, request stand options and receive updated commercial documents as the first edition develops.</p>
          <div className="mt-[28px] rounded-[16px] bg-[#120a05] p-[24px] text-[#fff4d3]">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#ffd94a]">Contact</p>
            <p className="mt-[10px] text-[24px] font-black">contact@panifika-expo.com</p>
            <p className="mt-[8px] text-[16px] text-[#f5dfb6]">www.panifika-expo.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
