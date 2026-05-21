import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Why Visit | PANIFIKA EXPO",
  description: "Reasons to visit the first edition of PANIFIKA EXPO."
};

const reasons = [
  [tx("Comparer les fournisseurs", "Compare suppliers"), tx("Rencontrez fournisseurs d'equipements, ingredients, packaging et services en une visite professionnelle.", "Meet equipment, ingredient, packaging and service providers in one professional visit.")],
  [tx("Decouvrir l'innovation", "Discover innovation"), tx("Suivez lancements, demonstrations et nouvelles solutions pour boulangerie et food service.", "Follow launches, demonstrations and new solutions for bakery and food service operations.")],
  [tx("Creer des relations", "Build relationships"), tx("Preparez des rendez-vous avec exposants, distributeurs, chefs et partenaires institutionnels.", "Prepare meetings with exhibitors, distributors, chefs and institutional partners.")],
  [tx("Apprendre des experts", "Learn from experts"), tx("Assistez aux conferences et workshops a mesure que le programme de premiere edition est annonce.", "Attend conferences and workshops as the first edition program is announced.")]
];

export default function WhyVisitPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Pourquoi visiter", "Why visit")} title={tx("Planifiez une visite professionnelle a forte valeur.", "Plan a high-value professional visit.")} copy={tx("PANIFIKA EXPO est pense pour les visiteurs qui recherchent fournisseurs, expertise technique et contacts business dans l'ecosysteme boulangerie.", "PANIFIKA EXPO is being designed for visitors who need suppliers, technical insight and business contacts in the bakery ecosystem.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Valeur visiteur", "Visitor value")} title={tx("Ce que les professionnels viendront chercher.", "What professionals will come for.")} />
          <div className="mt-[42px] grid gap-[16px] md:grid-cols-2">
            {reasons.map(([title, copy]) => (
              <PremiumCard key={JSON.stringify(title)}>
                <h2 className="text-[30px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={title} /></h2>
                <p className="mt-[16px] text-[16px] leading-[1.74] text-[#d9bb82]"><LocalizedTextView value={copy} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Enregistrez votre interet visiteur.", "Register your visitor interest.")} copy={tx("Les badges ouvriront plus tard ; l'inscription anticipee permet de recevoir les prochaines informations.", "Visitor badges will open later; early registration captures your profile for event updates.")} primaryHref="/registration" primaryLabel={tx("S'inscrire", "Register interest")} secondaryHref="/visitor-profile" secondaryLabel={tx("Profil visiteur", "Visitor profile")} />
    </PageLayout>
  );
}
