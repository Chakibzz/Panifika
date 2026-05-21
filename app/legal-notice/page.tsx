import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mentions légales | PANIFIKA EXPO",
  description: "Mentions légales PANIFIKA EXPO."
};

export default function LegalNoticePage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Mentions légales", "Legal notice")} title={tx("Informations légales.", "Legal information.")} copy={tx("Informations relatives à l'organisateur et à la publication du site PANIFIKA EXPO.", "Organizer and publication information for PANIFIKA EXPO.")} image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[980px]">
          <SectionTitle eyebrow={tx("Éditeur", "Publisher")} title="PANIFIKA EXPO." />
          <PremiumCard className="mt-[34px] space-y-[18px] text-[16px] leading-[1.75] text-[#d9bb82]">
            <p><LocalizedTextView value={tx("Éditeur : PANIFIKA EXPO.", "Publisher: PANIFIKA EXPO.")} /></p>
            <p><LocalizedTextView value={tx("Événement : première édition prévue fin 2027 à Alger, Algérie.", "Event: first edition scheduled for late 2027 in Algiers, Algeria.")} /></p>
            <p>Contact: contact@panifika-expo.com.</p>
            <p><LocalizedTextView value={tx("Les informations complètes d'immatriculation, d'hébergement et de responsable de publication devront être ajoutées avant le lancement public.", "Full company registration details, hosting information and responsible editor details should be completed before public launch.")} /></p>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
