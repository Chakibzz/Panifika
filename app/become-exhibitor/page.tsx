import type { Metadata } from "next";
import { ExhibitorLeadForm } from "@/components/ExhibitorLeadForm";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, StatsSection, Timeline } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Become Exhibitor | PANIFIKA EXPO",
  description: "Exhibitor advantages, booth packages and lead generation form for PANIFIKA EXPO."
};

const packages = [
  ["Essential Booth", "A focused premium presence for ingredient, service and regional suppliers."],
  ["Showcase Booth", "Expanded visibility with demo capacity and enhanced communication support."],
  ["Signature Pavilion", "High-impact branded environment for flagship equipment and international launches."]
];

export default function BecomeExhibitorPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Become an exhibitor" title="Convert bakery decision-makers in a premium salon." copy="Present your brand inside a cinematic trade fair environment designed for qualified leads, demonstrations and international partnerships." image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={[{ value: "12k", label: "Visitors" }, { value: "42%", label: "Buyers" }, { value: "18", label: "Markets" }, { value: "80+", label: "Exhibitors" }]} />
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Booth packages" title="Participation levels for every commercial ambition." />
          <div className="mt-[42px] grid gap-[16px] md:grid-cols-3">
            {packages.map(([title, copy]) => (
              <PremiumCard key={title}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]">Package</p>
                <h3 className="mt-[12px] text-[29px] font-black uppercase leading-[1] text-[#fff4d3]">{title}</h3>
                <p className="mt-[16px] text-[15px] leading-[1.72] text-[#d9bb82]">{copy}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Process" title="From request to salon floor." />
            <div className="mt-[40px]">
              <Timeline
                items={[
                  { year: "01", title: "Request brochure", copy: "Share company details, sector and booth needs." },
                  { year: "02", title: "Select package", copy: "Choose the stand experience and visibility options." },
                  { year: "03", title: "Prepare launch", copy: "Coordinate assets, demos, badges and lead strategy." }
                ]}
              />
            </div>
          </div>
          <ExhibitorLeadForm />
        </div>
      </section>
      <CTASection title="Book your premium exhibition presence." copy="Start the conversation with the PANIFIKA EXPO commercial team." primaryHref="/contact" primaryLabel="Talk to sales" />
    </PageLayout>
  );
}
