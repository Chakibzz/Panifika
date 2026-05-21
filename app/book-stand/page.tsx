import type { Metadata } from "next";
import { ExhibitorLeadForm } from "@/components/ExhibitorLeadForm";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Réserver un stand | PANIFIKA EXPO",
  description: "Demande d'information stand pour PANIFIKA EXPO fin 2027."
};

const options = [
  tx("Stand découverte 9 m²", "9 sqm starter stand"),
  tx("Stand professionnel 12 m²", "12 sqm professional booth"),
  tx("Stand démonstration 18 m²", "18 sqm demonstration booth"),
  tx("Stand angle 24 m²", "24 sqm corner booth"),
  tx("Présence flagship 36 m²", "36 sqm flagship presence"),
  tx("Pavillon sur mesure", "Custom pavilion")
];

export default function BookStandPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Réserver un stand", "Reserve your stand")}
        title={tx("Lancez votre demande exposant pour fin 2027.", "Start your exhibitor request for late 2027.")}
        copy={tx(
          "Les sponsors et le plan définitif viendront plus tard. Pour l'instant, PANIFIKA qualifie les demandes de stand et les besoins commerciaux des marques intéressées.",
          "Sponsors and final floor plan will come later. For now, PANIFIKA is collecting qualified stand interest and commercial requirements."
        )}
        image="/assets/bakery-equipment.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow={tx("Options de stand", "Stand options")} title={tx("Choisissez le niveau de présence à étudier.", "Choose the level of presence you want to explore.")} />
            <div className="mt-[34px] grid gap-[12px]">
              {options.map((option) => (
                <PremiumCard key={option.en}>
                  <p className="text-[17px] font-black uppercase text-[#fff4d3]"><LocalizedTextView value={option} /></p>
                </PremiumCard>
              ))}
            </div>
          </div>
          <ExhibitorLeadForm />
        </div>
      </section>
    </PageLayout>
  );
}
