import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Activations marketing | PANIFIKA EXPO",
  description: "Opportunités marketing prévues pour les exposants PANIFIKA EXPO."
};

const activities = [
  tx("Moment lancement produit", "Product launch moment"),
  tx("Visibilité scène démonstration", "Demo stage visibility"),
  tx("Profil exposant digital", "Digital exhibitor profile"),
  tx("Annonce newsletter", "Newsletter announcement"),
  tx("Mise en avant réseaux sociaux", "Social media feature"),
  tx("Visibilité badges et inscription", "Badge and registration visibility")
];

export default function MarketingActivitiesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Activations marketing", "Marketing activities")} title={tx("Des options de visibilité préparées pour les exposants.", "Visibility options prepared for exhibitors.")} copy={tx("À mesure que partenaires et sponsors rejoindront le salon, PANIFIKA ouvrira un menu d'opportunités promotionnelles autour de l'expérience événement.", "As partners and sponsors join over time, PANIFIKA will open a menu of promotional opportunities around the exhibition experience.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Opportunités", "Opportunities")} title={tx("Des temps forts commerciaux à activer progressivement.", "Commercial moments to be activated progressively.")} />
          <div className="mt-[42px] grid gap-[14px] md:grid-cols-3">
            {activities.map((activity) => (
              <PremiumCard key={activity.en}>
                <p className="text-[20px] font-black uppercase leading-[1.15] text-[#fff4d3]"><LocalizedTextView value={activity} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Demandez les options de visibilité.", "Ask for visibility options.")} copy={tx("Le menu sponsoring et marketing évoluera à mesure que le salon se rapprochera de son lancement.", "The sponsorship and marketing menu will evolve as the event gets closer to launch.")} primaryHref="/sponsorship" primaryLabel={tx("Intérêt sponsoring", "Sponsorship interest")} />
    </PageLayout>
  );
}
