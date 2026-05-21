import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, ExhibitionCard, PageHero, SectionTitle, StatsSection } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Visitors | PANIFIKA EXPO",
  description: "Visitor opportunities, networking and registration for PANIFIKA EXPO."
};

const reasons = [
  ["Networking", "Meet bakery buyers, suppliers, chefs, distributors and international decision-makers.", "/assets/expo-hall.png"],
  ["Masterclasses", "Attend premium workshops and live demonstrations led by bakery specialists.", "/assets/artisan-bread.png"],
  ["Innovation", "Discover equipment, ingredients, packaging, automation and new product concepts.", "/assets/bakery-equipment.png"]
];

export default function VisitorsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Visitor experience" title="A business salon for serious bakery professionals." copy="Visit PANIFIKA EXPO to discover suppliers, meet international partners, attend conferences and experience live bakery innovation." image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Why visit" title="High-value discovery in a premium atmosphere." />
          <div className="mt-[42px] grid gap-[18px] md:grid-cols-3">
            {reasons.map(([title, copy, image]) => (
              <ExhibitionCard key={title} title={title} copy={copy} image={image} meta="Visitor benefit" />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={[{ value: "12k", label: "Expected visitors" }, { value: "42%", label: "Decision-makers" }, { value: "18", label: "Countries" }, { value: "30+", label: "Conferences" }]} />
        </div>
      </section>
      <CTASection title="Register for professional access." copy="Secure your visitor badge and plan your meetings inside the PANIFIKA EXPO salon." primaryHref="/registration" primaryLabel="Register now" secondaryHref="/conferences" secondaryLabel="View agenda" />
    </PageLayout>
  );
}
