import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, Timeline } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Conférences | PANIFIKA EXPO",
  description: "Conférences, ateliers, démonstrations et programme de PANIFIKA EXPO."
};

const tracks = [
  tx("Marché et tendances", "Market outlook"),
  tx("Boulangerie industrielle", "Industrial bakery"),
  tx("Savoir-faire artisanal", "Artisan craft"),
  tx("Pizza et snacking", "Pizza and snacking")
];

export default function ConferencesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Conférences et démonstrations", "Conferences and demos")}
        title={tx("Un programme de contenu en préparation.", "Knowledge program in preparation.")}
        copy={tx(
          "Le programme de la première édition sera annoncé progressivement. PANIFIKA prépare conférences, démonstrations live et ateliers pour les professionnels des métiers de la pâte.",
          "The first edition program will be announced progressively. PANIFIKA is preparing conferences, live demonstrations and workshops for professional bakery audiences."
        )}
        image="/assets/expo-hall.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Feuille de route", "Program roadmap")} title={tx("Un agenda construit avec les experts du secteur.", "A first-edition agenda built with experts.")} />
          <div className="mt-[44px]">
            <Timeline
              items={[
                { year: "01", title: tx("Appel à intervenants", "Call for speakers"), copy: tx("Experts, chefs et marques peuvent proposer des sujets pour la première édition.", "Experts, chefs and brands can submit topics for the first edition.") },
                { year: "02", title: tx("Sélection des thèmes", "Track selection"), copy: tx("Les thèmes marché, industrie, artisanat et hospitality seront structurés avec soin.", "Market, industrial, artisan and hospitality tracks will be curated.") },
                { year: "03", title: tx("Calendrier des ateliers", "Workshop calendar"), copy: tx("Les démonstrations et sessions techniques seront organisées par jour et par espace.", "Demonstrations and technical sessions will be scheduled by day and stage.") },
                { year: "04", title: tx("Programme final", "Final program"), copy: tx("L'agenda complet sera publié avant l'ouverture des inscriptions visiteurs.", "The full agenda will be published before visitor registration opens.") }
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Thématiques", "Tracks")} title={tx("Axes de conférences en cours de préparation.", "Conference tracks being prepared.")} />
          <div className="mt-[42px] grid gap-[16px] md:grid-cols-4">
            {tracks.map((track) => (
              <PremiumCard key={track.en}>
                <div className="mb-[18px] flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#fff9ea] text-[24px] font-black text-[#8e1712]">
                  {track.fr[0]}
                </div>
                <h3 className="text-[21px] font-black uppercase leading-[1.05] text-[#fff4d3]"><LocalizedTextView value={track} /></h3>
                <p className="mt-[10px] text-[13px] font-black uppercase tracking-[0.16em] text-[#f3ad16]"><LocalizedTextView value={tx("Ouvert aux contributeurs", "Open for contributors")} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title={tx("Contribuez au programme de la première édition.", "Contribute to the first edition program.")}
        copy={tx("Candidatez comme intervenant, proposez un atelier ou enregistrez votre intérêt comme visiteur.", "Apply as a speaker, propose a workshop or register interest as a visitor.")}
        primaryHref="/become-speaker"
        primaryLabel={tx("Devenir intervenant", "Become a speaker")}
        secondaryHref="/conference-program"
        secondaryLabel={tx("Voir la feuille de route", "Program roadmap")}
      />
    </PageLayout>
  );
}
