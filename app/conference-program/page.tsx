import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, Timeline } from "@/components/PremiumPrimitives";
import { conferenceTracks } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Conference Program | PANIFIKA EXPO",
  description: "Conference program roadmap for PANIFIKA EXPO."
};

export default function ConferenceProgramPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Programme conferences", "Conference program")} title={tx("Feuille de route avant l'agenda final.", "Program roadmap before the final agenda.")} copy={tx("Comme PANIFIKA est une premiere edition prevue fin 2027, l'agenda est presente comme une feuille de route jusqu'a confirmation des speakers et horaires.", "Because PANIFIKA is a first edition scheduled for late 2027, the conference agenda is presented as a curated roadmap until speakers and slots are confirmed.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Tracks", "Tracks")} title={tx("Themes en cours de curation.", "Themes under curation.")} />
          <div className="mt-[42px] grid gap-[14px] md:grid-cols-3">
            {conferenceTracks.map((track) => (
              <PremiumCard key={JSON.stringify(track)}>
                <p className="text-[19px] font-black uppercase leading-[1.18] text-[#fff4d3]"><LocalizedTextView value={track} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Calendrier", "Timeline")} title={tx("Comment le programme sera publie.", "How the program will be published.")} />
          <div className="mt-[42px]">
            <Timeline
              items={[
                { year: tx("Appel", "Call"), title: tx("Propositions speakers et workshops", "Speaker and workshop proposals"), copy: tx("Experts, chefs et marques soumettent themes, demos et sessions techniques.", "Experts submit topics, demos and technical sessions.") },
                { year: tx("Curation", "Curate"), title: tx("Planning tracks et scenes", "Track and stage planning"), copy: tx("L'organisateur regroupe les contenus par pertinence business et profil audience.", "The organizer groups content by business relevance and audience profile.") },
                { year: tx("Publication", "Publish"), title: tx("Publication agenda officiel", "Official agenda release"), copy: tx("Sessions finales, intervenants, dates et salles seront publies avant l'evenement.", "Final sessions, speakers, dates and rooms go live before the event.") }
              ]}
            />
          </div>
        </div>
      </section>
      <CTASection title={tx("Proposez une session.", "Propose a session.")} copy={tx("Chefs, marques, formateurs et experts peuvent soumettre un interet pour le programme de premiere edition.", "Chefs, brands, trainers and experts can submit interest for the first edition program.")} primaryHref="/become-speaker" primaryLabel={tx("Devenir intervenant", "Become speaker")} />
    </PageLayout>
  );
}
