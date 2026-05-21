import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { exhibitorSectors } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Exhibitor Profile | PANIFIKA EXPO",
  description: "Target exhibitor sectors for PANIFIKA EXPO."
};

export default function ExhibitorProfilePage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Profil exposant", "Exhibitor profile")} title={tx("L'univers fournisseurs pour lequel PANIFIKA est construit.", "The supplier universe PANIFIKA is built for.")} copy={tx("La premiere edition cible les entreprises au service des professionnels boulangerie, patisserie, pizza, cafe, hospitality et production alimentaire.", "The first edition targets companies serving bakery, pastry, pizza, coffee, hospitality and food production professionals.")} image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Secteurs", "Sectors")} title={tx("Qui devrait exposer.", "Who should exhibit.")} />
          <div className="mt-[42px] grid gap-[14px] md:grid-cols-3">
            {exhibitorSectors.map((sector) => (
              <PremiumCard key={JSON.stringify(sector)}>
                <p className="text-[18px] font-black uppercase leading-[1.25] text-[#fff4d3]"><LocalizedTextView value={sector} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Rejoignez le pipeline exposants.", "Join the exhibitor pipeline.")} copy={tx("Les exposants officiels seront annonces progressivement a l'approche de la premiere edition.", "Official exhibitors will be announced progressively as the first edition approaches.")} primaryHref="/book-stand" primaryLabel={tx("Demander un stand", "Request stand")} />
    </PageLayout>
  );
}
