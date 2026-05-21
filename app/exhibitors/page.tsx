import type { Metadata } from "next";
import { ExhibitorDirectory } from "@/components/ExhibitorDirectory";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Exhibitors | PANIFIKA EXPO",
  description: "Luxury exhibition directory for PANIFIKA EXPO exhibitors."
};

export default function ExhibitorsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Exhibitor directory" title="A curated directory of bakery leaders." copy="Browse premium suppliers, equipment manufacturers, ingredient brands and international exhibitors by sector." image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Directory" title="Featured exhibitors and stand locations." />
          <div className="mt-[42px]">
            <ExhibitorDirectory />
          </div>
        </div>
      </section>
      <CTASection title="Exhibit alongside premium brands." copy="Request booth details and audience data for the next PANIFIKA EXPO edition." primaryHref="/become-exhibitor" primaryLabel="Become exhibitor" />
    </PageLayout>
  );
}
