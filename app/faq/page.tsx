import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "FAQ | PANIFIKA EXPO",
  description: "Questions sur les visiteurs, exposants, accès, logistique, badges et stands."
};

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("FAQ", "FAQ")} title={tx("Des réponses claires pour préparer votre participation.", "Practical answers with premium support.")} copy={tx("Retrouvez les informations utiles sur les exposants, visiteurs, accès, stands, logistique et participation au programme.", "Find clear guidance for exhibitor questions, visitor access, tickets, logistics, booth booking and conference participation.")} image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle eyebrow={tx("Support", "Support")} title={tx("L'essentiel avant d'entrer dans le salon.", "Everything you need before entering the salon.")} copy={tx("Les réponses sont structurées pour rester rapides à lire, même lorsque les détails finaux seront ajoutés.", "The accordion system follows the same cinematic brand style while keeping operational details easy to scan.")} />
          <FAQAccordion />
        </div>
      </section>
      <CTASection title={tx("Besoin d'une réponse spécifique ?", "Need a specific answer?")} copy={tx("Contactez l'équipe organisatrice pour une question visiteur, exposant ou logistique.", "Contact the organizing team for visitor, exhibitor or logistics support.")} primaryHref="/contact" primaryLabel={tx("Contacter le support", "Contact support")} />
    </PageLayout>
  );
}
