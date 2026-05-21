import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Why Exhibit | PANIFIKA EXPO",
  description: "Why companies should exhibit at the first edition of PANIFIKA EXPO."
};

const reasons = [
  [tx("Visibilite de lancement", "Launch visibility"), tx("Positionnez votre marque tot dans une nouvelle plateforme B2B dediee a la boulangerie, prevue fin 2027.", "Position your brand early inside a new bakery-focused B2B platform scheduled for late 2027.")],
  [tx("Conversations qualifiees", "Qualified conversations"), tx("Rencontrez acheteurs, distributeurs, chefs, detaillants et operateurs food service dans un cadre professionnel.", "Reach buyers, distributors, chefs, retailers and food service operators in one professional environment.")],
  [tx("Demonstration produit", "Product demonstration"), tx("Montrez fours, ingredients, packaging, recettes et services en situation reelle.", "Use the exhibition format to show ovens, ingredients, packaging, recipes and services in action.")],
  [tx("Entree marche", "Market entry"), tx("Construisez votre presence avant la premiere edition et preparez vos rendez-vous avec les professionnels algeriens et internationaux.", "Build awareness before the first edition and prepare meetings with Algerian and international professionals.")]
];

export default function WhyExhibitPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Pourquoi exposer", "Why exhibit")} title={tx("Entrez sur le marche boulangerie avant l'ouverture de la premiere edition.", "Enter the bakery market before the first edition opens.")} copy={tx("PANIFIKA EXPO se construit comme une plateforme commerciale pour les marques qui veulent visibilite, leads et positionnement avant fin 2027.", "PANIFIKA EXPO is being shaped as a commercial platform for brands that want visibility, lead generation and industry positioning before late 2027.")} image="/assets/bakery-equipment.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Valeur exposant", "Exhibitor value")} title={tx("Une plateforme de lancement pour fournisseurs ambitieux.", "A launch platform for serious bakery suppliers.")} />
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
      <CTASection title={tx("Demandez la brochure exposant.", "Request the exhibitor brochure.")} copy={tx("Indiquez votre secteur, surface souhaitee et objectif marche afin que l'equipe commerciale qualifie votre participation.", "Tell us your sector, stand size and market objective so the commercial team can qualify your participation.")} primaryHref="/book-stand" primaryLabel={tx("Reserver un interet", "Reserve interest")} secondaryHref="/exhibitor-profile" secondaryLabel={tx("Profil exposants", "Profile exhibitors")} />
    </PageLayout>
  );
}
