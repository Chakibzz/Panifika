import type { Metadata } from "next";
import { submitSpeakerInterest } from "@/app/actions";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Devenir intervenant | PANIFIKA EXPO",
  description: "Proposer une conférence, une démonstration ou un atelier pour PANIFIKA EXPO."
};

export default function BecomeSpeakerPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Devenir intervenant", "Become a speaker")}
        title={tx("Proposez une expertise pour la première édition.", "Propose expertise for the first edition.")}
        copy={tx("PANIFIKA recueille les propositions d'intervenants, chefs et animateurs d'ateliers avant la finalisation du programme officiel.", "PANIFIKA is collecting speaker, chef and workshop proposals before the official conference program is finalized.")}
        image="/assets/expo-hall.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow={tx("Appel à contributeurs", "Call for contributors")}
            title={tx("Partagez un sujet, une démonstration ou un concept d'atelier.", "Share a topic, demo or workshop concept.")}
            copy={tx("L'organisation étudiera les propositions à mesure que le programme se construit. Les intervenants confirmés seront annoncés plus tard.", "The organizer will review proposals as the program develops. Confirmed speakers will be announced later.")}
          />
          <PremiumCard className="p-[28px]">
            <form action={submitSpeakerInterest}>
              <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Candidature intervenant.", "Speaker interest.")} /></h2>
              <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
                <PremiumInput label={tx("Nom complet", "Full name")} name="full_name" placeholder={tx("Nom complet", "Full name")} required />
                <PremiumInput label={tx("Email", "Email")} name="email" placeholder="you@example.com" type="email" required />
                <PremiumInput label={tx("Entreprise", "Company")} name="company" placeholder={tx("Entreprise ou institution", "Company or institution")} />
                <PremiumInput label={tx("Téléphone", "Phone")} name="phone" placeholder="+213..." />
                <PremiumSelect label={tx("Format", "Format")} name="topic" options={[tx("Conférence", "Conference"), tx("Atelier", "Workshop"), tx("Démonstration live", "Live demo"), tx("Panel", "Panel"), tx("Formation", "Training session")]} required />
                <PremiumInput label={tx("Titre proposé", "Proposed title")} name="proposed_title" placeholder={tx("Titre de la session", "Session title")} required />
              </div>
              <label className="mt-[16px] block">
                <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]"><LocalizedTextView value={tx("Résumé de proposition", "Short proposal")} /></span>
                <textarea name="message" required className="min-h-[150px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 p-[17px] text-[15px] text-[#fff4d3] outline-none placeholder:text-[#a58251] focus:border-[#f3ad16]/68" placeholder="Quel sujet souhaitez-vous présenter ?" />
              </label>
              <button className="mt-[24px] inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] transition duration-300 hover:bg-[#ffd565]">
                <LocalizedTextView value={tx("Envoyer la proposition", "Submit proposal")} />
              </button>
            </form>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
