import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Conditions | PANIFIKA EXPO",
  description: "Conditions d'utilisation du site PANIFIKA EXPO."
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Conditions", "Terms")} title={tx("Conditions d'utilisation du site.", "Website terms.")} copy={tx("Conditions générales liées à l'utilisation du site PANIFIKA EXPO et à l'envoi de demandes événement.", "General terms for using the PANIFIKA EXPO website and submitting event requests.")} image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[980px]">
          <SectionTitle eyebrow={tx("Utilisation", "Use")} title={tx("Informations avant la première édition.", "Information before the first edition.")} />
          <PremiumCard className="mt-[34px] space-y-[18px] text-[16px] leading-[1.75] text-[#d9bb82]">
            <p><LocalizedTextView value={tx("Les informations du site peuvent évoluer à mesure que partenaires, lieu, programme et documents commerciaux sont confirmés.", "Information on this website may evolve as partners, venue details, program content and commercial documents are confirmed.")} /></p>
            <p><LocalizedTextView value={tx("L'envoi d'un formulaire ne confirme pas une participation, un sponsoring, une sélection intervenant ou un accès visiteur. L'organisation étudie chaque demande.", "Submitting a form does not confirm participation, sponsorship, speaker selection or visitor access. The organizer will review each request and follow up where appropriate.")} /></p>
            <p><LocalizedTextView value={tx("La marque, les visuels et les contenus PANIFIKA EXPO sont protégés et ne peuvent pas être réutilisés sans autorisation.", "All PANIFIKA EXPO branding, visuals and content are protected and may not be reused without permission.")} /></p>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
