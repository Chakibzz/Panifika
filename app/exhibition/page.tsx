import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, ExhibitionCard, PageHero, PremiumCard, SectionTitle, StatsSection } from "@/components/PremiumPrimitives";
import { targetStats } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Salon | PANIFIKA EXPO",
  description: "Présentation des secteurs, bénéfices et temps forts de PANIFIKA EXPO."
};

const sectors = [
  { title: tx("Boulangerie", "Bakery"), copy: tx("Pain artisanal et industriel, ingrédients, farines, céréales et savoir-faire en direct.", "Artisan and industrial bread production, ingredients, grains and live baking craft."), image: "/assets/artisan-bread.png" },
  { title: tx("Pâtisserie", "Pastry"), copy: tx("Pâtisserie premium, chocolat, desserts, décoration et démonstrations menées par des chefs.", "Premium pastry, chocolate, desserts, decoration and chef-led creative demonstrations."), image: "/assets/expo-hall.png" },
  { title: tx("Pizza", "Pizza"), copy: tx("Technologies de pâte, fours, garnitures et solutions de production rapide.", "Dough technology, ovens, toppings and fast-casual production solutions."), image: "/assets/artisan-bread.png" },
  { title: tx("Café", "Coffee"), copy: tx("Torréfacteurs, équipements, concepts coffee shop et fournisseurs hospitality.", "Roasters, brewing equipment, cafe concepts and hospitality suppliers."), image: "/assets/expo-hall.png" },
  { title: tx("Équipements", "Food Equipment"), copy: tx("Fours, pétrins, froid, packaging et innovations pour lignes de production.", "Ovens, mixers, refrigeration, packaging and production line innovation."), image: "/assets/bakery-equipment.png" }
];

export default function ExhibitionPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Présentation du salon", "Exhibition overview")} title={tx("La première édition du salon des métiers de la pâte.", "The first edition bakery trade fair experience.")} copy={tx("Un salon professionnel en préparation pour fin 2027, conçu pour réunir ingrédients, équipements, savoir-faire, technologies et échanges commerciaux.", "A professional salon in preparation for late 2027, designed to gather ingredients, equipment, craft, technology and commercial exchange under one premium platform.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Secteurs", "Sectors")} title={tx("Cinq univers au cœur du business boulangerie.", "Five worlds of bakery business.")} copy={tx("Chaque secteur met en avant les produits, les démonstrations, l'expertise métier et les rencontres professionnelles.", "Each sector is staged with the same premium visual language: warm light, product visibility, live expertise and professional networking.")} />
          <div className="mt-[42px] grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <ExhibitionCard key={sector.title.en} title={sector.title} copy={sector.copy} image={sector.image} meta={tx("Secteur", "Sector")} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[22px] md:grid-cols-2">
          <PremiumCard>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#f3ad16]"><LocalizedTextView value={tx("Pour les visiteurs", "Visitor benefits")} /></p>
            <h2 className="mt-[16px] text-[38px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Rencontrer fournisseurs, tendances et experts au même endroit.", "Meet suppliers, trends and chefs in one place.")} /></h2>
            <p className="mt-[20px] text-[16px] leading-[1.76] text-[#d9bb82]"><LocalizedTextView value={tx("Découvrez de nouveaux produits, comparez les équipements, assistez aux démonstrations et développez des partenariats.", "Discover new products, compare equipment, attend demonstrations and build international partnerships.")} /></p>
          </PremiumCard>
          <PremiumCard>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#f3ad16]"><LocalizedTextView value={tx("Pour les exposants", "Exhibitor benefits")} /></p>
            <h2 className="mt-[16px] text-[38px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Générer des contacts qualifiés dans un cadre premium.", "Generate qualified leads in a premium setting.")} /></h2>
            <p className="mt-[20px] text-[16px] leading-[1.76] text-[#d9bb82]"><LocalizedTextView value={tx("Présentez vos innovations, organisez des démonstrations, rencontrez des distributeurs et transformez des décideurs en opportunités.", "Showcase innovation, host product demos, meet distributors and convert decision-makers inside a luxury salon atmosphere.")} /></p>
          </PremiumCard>
        </div>
      </section>
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={targetStats} />
        </div>
      </section>
      <CTASection title={tx("Positionnez votre marque dans le salon.", "Position your brand inside the salon.")} copy={tx("Réservez un stand, animez une démonstration ou associez votre marque à un temps fort.", "Book a premium stand, host a demonstration or sponsor a highlighted exhibition moment.")} primaryHref="/become-exhibitor" primaryLabel={tx("Devenir exposant", "Become exhibitor")} secondaryHref="/visitors" secondaryLabel={tx("Pourquoi visiter", "Why visit")} />
    </PageLayout>
  );
}
