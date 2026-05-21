import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { plannedActivities } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Activities | PANIFIKA EXPO",
  description: "Activities planned for the first edition of PANIFIKA EXPO."
};

export default function ActivitiesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Activites", "Activities")} title={tx("Moments live prevus autour du salon.", "Live moments planned around the exhibition.")} copy={tx("Les activites seront confirmees progressivement : demonstrations, rendez-vous, showcases et contenu professionnel font partie de la feuille de route.", "Activities will be confirmed progressively: demonstrations, meetings, showcases and professional content are part of the first-edition roadmap.")} image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Formats prevus", "Planned formats")} title={tx("Ce que l'experience salon peut inclure.", "What the salon experience can include.")} />
          <div className="mt-[42px] grid gap-[14px] md:grid-cols-3">
            {plannedActivities.map((activity) => (
              <PremiumCard key={JSON.stringify(activity)}>
                <p className="text-[20px] font-black uppercase leading-[1.15] text-[#fff4d3]"><LocalizedTextView value={activity} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Suivez les annonces d'activites.", "Follow the activity announcements.")} copy={tx("Les details du programme seront publies a mesure que speakers, exposants et partenaires seront confirmes.", "Program details will be published as speakers, exhibitors and partners are confirmed.")} primaryHref="/registration" primaryLabel={tx("S'inscrire", "Register interest")} secondaryHref="/conferences" secondaryLabel={tx("Conferences", "Conferences")} />
    </PageLayout>
  );
}
