import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, StatsSection, Timeline } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "About | PANIFIKA EXPO",
  description: "Mission, story and international positioning of PANIFIKA EXPO."
};

const values = ["Craft excellence", "International exchange", "Innovation for professionals", "Warm bakery culture"];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About PANIFIKA EXPO"
        title="A premium bakery salon with global ambition."
        copy="PANIFIKA EXPO connects bakery, pastry, pizza, coffee and equipment professionals through a cinematic trade fair experience shaped by warm craft and international business."
        image="/assets/artisan-bread.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[50px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative aspect-[1.08] overflow-hidden rounded-[32px] border border-[#f3ad16]/24 bg-[#23130d] p-[10px] expo-glow">
            <Image src="/assets/expo-hall.png" alt="PANIFIKA EXPO exhibition hall" fill className="object-cover p-[10px]" sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
          <div>
            <SectionTitle
              eyebrow="Organizer story"
              title="Built for the professionals shaping tomorrow's bakery."
              copy="The exhibition was conceived as a warm, high-value meeting point where industrial capability, artisan knowledge and hospitality can live inside the same premium event environment."
            />
            <div className="mt-[32px] grid gap-[12px] md:grid-cols-2">
              {values.map((value) => (
                <PremiumCard key={value}>
                  <p className="text-[16px] font-black uppercase tracking-[0.08em] text-[#fff4d3]">{value}</p>
                </PremiumCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Editions" title="A timeline of expanding international presence." />
          <div className="mt-[44px]">
            <Timeline
              items={[
                { year: "2024", title: "Brand foundation", copy: "PANIFIKA EXPO defines its premium bakery positioning and visual identity." },
                { year: "2025", title: "Professional ecosystem", copy: "Exhibitors, chefs and suppliers align around equipment, craft and ingredients." },
                { year: "2026", title: "International edition", copy: "The salon expands into a wider platform for global bakery business." }
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={[{ value: "18", label: "Countries" }, { value: "80+", label: "Exhibitors" }, { value: "24", label: "Live demos" }, { value: "12k", label: "Visitors" }]} />
        </div>
      </section>
      <CTASection title="Discover the exhibition platform." copy="Explore the sectors, benefits and highlights created for bakery professionals." primaryHref="/exhibition" primaryLabel="View exhibition" secondaryHref="/contact" secondaryLabel="Contact organizer" />
    </PageLayout>
  );
}
