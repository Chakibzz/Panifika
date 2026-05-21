import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "FAQ | PANIFIKA EXPO",
  description: "Questions about visitors, exhibitors, logistics, access, tickets and booth booking."
};

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="FAQ" title="Practical answers with premium support." copy="Find clear guidance for exhibitor questions, visitor access, tickets, logistics, booth booking and conference participation." image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle eyebrow="Support" title="Everything you need before entering the salon." copy="The accordion system follows the same cinematic brand style while keeping operational details easy to scan." />
          <FAQAccordion />
        </div>
      </section>
      <CTASection title="Need a specific answer?" copy="Contact the organizing team for visitor, exhibitor or logistics support." primaryHref="/contact" primaryLabel="Contact support" />
    </PageLayout>
  );
}
