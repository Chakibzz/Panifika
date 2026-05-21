import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, Timeline } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Conferences | PANIFIKA EXPO",
  description: "Conferences, workshops, demonstrations and agenda at PANIFIKA EXPO."
};

const speakers = ["Chef Amelie Laurent", "Marco Bellini", "Nadia Benali", "Thomas Meyer"];

export default function ConferencesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Conferences and demos" title="Knowledge staged like a premium salon." copy="Daily conferences, live bakery demonstrations, workshops and competitions designed for professionals seeking insight and inspiration." image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Daily agenda" title="A golden timeline of live expertise." />
          <div className="mt-[44px]">
            <Timeline
              items={[
                { year: "09:30", title: "Opening keynote", copy: "Bakery market evolution and international growth opportunities." },
                { year: "11:00", title: "Live sourdough masterclass", copy: "Fermentation control, texture and production consistency." },
                { year: "13:30", title: "Pizza and oven technology", copy: "High-output baking systems and dough performance." },
                { year: "16:00", title: "Pastry competition", copy: "Chefs present signature products under salon lighting." }
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Speakers" title="Chefs and experts leading the program." />
          <div className="mt-[42px] grid gap-[16px] md:grid-cols-4">
            {speakers.map((speaker) => (
              <PremiumCard key={speaker}>
                <div className="mb-[18px] flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#fff9ea] text-[24px] font-black text-[#8e1712]">
                  {speaker
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="text-[21px] font-black uppercase leading-[1.05] text-[#fff4d3]">{speaker}</h3>
                <p className="mt-[10px] text-[13px] font-black uppercase tracking-[0.16em] text-[#f3ad16]">Bakery expert</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Plan your conference day." copy="Register as a visitor and reserve priority access for highlighted workshops." primaryHref="/registration" primaryLabel="Register" />
    </PageLayout>
  );
}
