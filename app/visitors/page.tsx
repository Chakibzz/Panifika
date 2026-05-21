import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, ExhibitionCard, PageHero, SectionTitle, StatsSection } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Visiteurs | PANIFIKA EXPO",
  description: "Opportunités visiteurs, networking et inscription pour PANIFIKA EXPO."
};

const reasons = [
  { title: tx("Networking", "Networking"), copy: tx("Rencontrez acheteurs, fournisseurs, chefs, distributeurs et décideurs du secteur.", "Meet bakery buyers, suppliers, chefs, distributors and international decision-makers."), image: "/assets/expo-hall.png" },
  { title: tx("Masterclasses", "Masterclasses"), copy: tx("Participez à des ateliers et démonstrations animés par des spécialistes.", "Attend premium workshops and live demonstrations led by bakery specialists."), image: "/assets/artisan-bread.png" },
  { title: tx("Innovation", "Innovation"), copy: tx("Découvrez équipements, ingrédients, packaging, automatisation et nouveaux concepts.", "Discover equipment, ingredients, packaging, automation and new product concepts."), image: "/assets/bakery-equipment.png" }
];

export default function VisitorsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Expérience visiteur", "Visitor experience")} title={tx("Un salon business pour les professionnels des métiers de la pâte.", "A business salon for serious bakery professionals.")} copy={tx("L'inscription visiteur se prépare pour la première édition fin 2027. Découvrez les profils ciblés, les activités prévues et les bénéfices professionnels.", "Visitor registration is being prepared for the first edition in late 2027. Discover the audience profile, planned activities and professional benefits now.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Pourquoi visiter", "Why visit")} title={tx("Découvrir, comparer et rencontrer dans un cadre premium.", "High-value discovery in a premium atmosphere.")} />
          <div className="mt-[42px] grid gap-[18px] md:grid-cols-3">
            {reasons.map((reason) => (
              <ExhibitionCard key={reason.title.en} title={reason.title} copy={reason.copy} image={reason.image} meta={tx("Bénéfice visiteur", "Visitor benefit")} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={[{ value: "2027", label: tx("Première édition", "First edition") }, { value: "B2B", label: tx("Audience professionnelle", "Audience focus") }, { value: "5", label: tx("Secteurs clés", "Core sectors") }, { value: "Soon", label: tx("Badges bientôt", "Badge launch") }]} />
        </div>
      </section>
      <CTASection title={tx("Préparez votre accès professionnel.", "Register for professional access.")} copy={tx("Enregistrez votre intérêt et recevez les informations visiteurs à mesure que l'ouverture des badges approche.", "Secure your visitor badge and plan your meetings inside the PANIFIKA EXPO salon.")} primaryHref="/registration" primaryLabel={tx("S'inscrire", "Register now")} secondaryHref="/conferences" secondaryLabel={tx("Voir le programme", "View agenda")} />
    </PageLayout>
  );
}
