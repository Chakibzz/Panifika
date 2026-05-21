import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Partners | PANIFIKA EXPO",
  description: "Sponsors, media partners and institutional partners of PANIFIKA EXPO."
};

const groups = {
  Sponsors: ["Golden Grain", "Dolce Forni", "Crema Roasters", "Cacao Atelier"],
  "Media partners": ["Bakery Review", "Food Service Weekly", "Salon Magazine", "Cafe Business"],
  "Institutional partners": ["International Bakery Council", "Chamber of Commerce", "Hospitality Alliance", "Trade Development Agency"]
};

export default function PartnersPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Partners" title="Corporate visibility in a premium bakery environment." copy="PANIFIKA EXPO brings sponsors, media partners and institutions into a refined international trade fair platform." image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px] space-y-[58px]">
          {Object.entries(groups).map(([title, names]) => (
            <div key={title}>
              <SectionTitle eyebrow={title} title={`${title} shaping the salon.`} />
              <div className="mt-[28px] grid gap-[14px] md:grid-cols-4">
                {names.map((name) => (
                  <PremiumCard key={name}>
                    <div className="flex h-[104px] items-center justify-center rounded-[18px] bg-[#fff9ea] px-[18px] text-center text-[22px] font-black uppercase tracking-[-0.03em] text-[#8e1712]">
                      {name}
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Become a visible partner." copy="Sponsor a stage, content program, registration moment or premium visitor experience." primaryHref="/contact" primaryLabel="Contact team" />
    </PageLayout>
  );
}
