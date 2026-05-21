import type { Metadata } from "next";
import { ExhibitorDirectory } from "@/components/ExhibitorDirectory";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Exposants | PANIFIKA EXPO",
  description: "Annuaire et structure exposants de PANIFIKA EXPO."
};

export default function ExhibitorsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Annuaire exposants", "Exhibitor directory")}
        title={tx("Les candidatures exposants sont ouvertes avant la première édition.", "Exhibitor applications open before the first edition.")}
        copy={tx(
          "Explorez les secteurs du salon et déclarez votre intérêt. La liste officielle des exposants sera publiée progressivement, au fil des confirmations pour fin 2027.",
          "Browse the sector structure and register interest. The official exhibitor list will be published progressively as participation is confirmed for late 2027."
        )}
        image="/assets/bakery-equipment.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            eyebrow={tx("Aperçu de l'annuaire", "Directory preview")}
            title={tx("Les exposants confirmés apparaîtront ici.", "Official exhibitors will appear here after confirmation.")}
            copy={tx(
              "En attendant l'annonce des premiers exposants, cette zone prépare les catégories, les filtres et les futurs emplacements du salon.",
              "Until the commercial launch matures, this area works as the public structure for categories, filters and future stand locations."
            )}
          />
          <div className="mt-[42px]">
            <ExhibitorDirectory />
          </div>
        </div>
      </section>
      <CTASection
        title={tx("Exposez aux côtés de marques ambitieuses.", "Exhibit alongside premium brands.")}
        copy={tx("Demandez les informations de stand et les données d'audience prévues pour PANIFIKA EXPO.", "Request booth details and audience data for the next PANIFIKA EXPO edition.")}
        primaryHref="/become-exhibitor"
        primaryLabel={tx("Devenir exposant", "Become an exhibitor")}
      />
    </PageLayout>
  );
}
