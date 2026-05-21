import type { Metadata } from "next";
import { submitSponsorInterest } from "@/app/actions";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sponsoring | PANIFIKA EXPO",
  description: "Demande d'intérêt sponsoring pour PANIFIKA EXPO."
};

const levels = [
  tx("Sponsor officiel", "Official sponsor"),
  tx("Sponsor conférences", "Conference sponsor"),
  tx("Sponsor ateliers", "Workshop sponsor"),
  tx("Sponsor zone inscription", "Registration area sponsor"),
  tx("Partenaire média", "Media partner"),
  tx("Partenaire institutionnel", "Institutional partner")
];

export default function SponsorshipPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Sponsoring", "Sponsorship")} title={tx("Les catégories partenaires ouvriront progressivement.", "Partner categories will open progressively.")} copy={tx("Les sponsors ne sont pas encore finalisés pour la première édition. Cette page prépare les formats pour les marques qui souhaitent discuter visibilité en amont.", "Sponsors are not final for the first edition. This page prepares the structure for brands that want early visibility conversations.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow={tx("Futurs packages", "Future packages")} title={tx("Catégories de visibilité en préparation.", "Visibility categories under preparation.")} />
            <div className="mt-[34px] grid gap-[12px]">
              {levels.map((level) => (
                <PremiumCard key={level.en}>
                  <p className="text-[18px] font-black uppercase text-[#fff4d3]"><LocalizedTextView value={level} /></p>
                </PremiumCard>
              ))}
            </div>
          </div>
          <PremiumCard className="p-[28px]">
            <form action={submitSponsorInterest}>
              <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Intérêt sponsor.", "Sponsor interest.")} /></h2>
              <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
                <PremiumInput label={tx("Nom complet", "Full name")} name="full_name" placeholder={tx("Nom complet", "Full name")} required />
                <PremiumInput label={tx("Email", "Email")} name="email" placeholder="you@example.com" type="email" required />
                <PremiumInput label={tx("Entreprise", "Company")} name="company" placeholder={tx("Entreprise", "Company")} required />
                <PremiumInput label={tx("Téléphone", "Phone")} name="phone" placeholder="+213..." />
                <PremiumSelect label={tx("Intérêt", "Interest")} name="topic" options={levels} required />
                <PremiumSelect label={tx("Avancement budget", "Budget stage")} name="budget_stage" options={[tx("Exploration", "Exploring"), tx("Budget prévu", "Budget planned"), tx("Besoin d'une proposition", "Need proposal"), tx("Partenariat institutionnel", "Institutional partnership")]} />
              </div>
              <button className="mt-[24px] inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] transition duration-300 hover:bg-[#ffd565]">
                <LocalizedTextView value={tx("Envoyer la demande", "Submit interest")} />
              </button>
            </form>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
