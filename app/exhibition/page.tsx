import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, ExhibitionCard, PageHero, PremiumCard, SectionTitle, StatsSection } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Exhibition | PANIFIKA EXPO",
  description: "Overview of PANIFIKA EXPO sectors, benefits and highlights."
};

const sectors = [
  ["Bakery", "Artisan and industrial bread production, ingredients, grains and live baking craft.", "/assets/artisan-bread.png"],
  ["Pastry", "Premium pastry, chocolate, desserts, decoration and chef-led creative demonstrations.", "/assets/expo-hall.png"],
  ["Pizza", "Dough technology, ovens, toppings and fast-casual production solutions.", "/assets/artisan-bread.png"],
  ["Coffee", "Roasters, brewing equipment, cafe concepts and hospitality suppliers.", "/assets/expo-hall.png"],
  ["Food Equipment", "Ovens, mixers, refrigeration, packaging and production line innovation.", "/assets/bakery-equipment.png"]
];

export default function ExhibitionPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Exhibition overview" title="The complete bakery trade fair experience." copy="A full professional salon for ingredients, equipment, craft, technology and international commercial exchange." image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Sectors" title="Five worlds of bakery business." copy="Each sector is staged with the same premium visual language: warm light, product visibility, live expertise and professional networking." />
          <div className="mt-[42px] grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {sectors.map(([title, copy, image]) => (
              <ExhibitionCard key={title} title={title} copy={copy} image={image} meta="Sector" />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[22px] md:grid-cols-2">
          <PremiumCard>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#f3ad16]">Visitor benefits</p>
            <h2 className="mt-[16px] text-[38px] font-black uppercase leading-[1] text-[#fff4d3]">Meet suppliers, trends and chefs in one place.</h2>
            <p className="mt-[20px] text-[16px] leading-[1.76] text-[#d9bb82]">Discover new products, compare equipment, attend demonstrations and build international partnerships.</p>
          </PremiumCard>
          <PremiumCard>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#f3ad16]">Exhibitor benefits</p>
            <h2 className="mt-[16px] text-[38px] font-black uppercase leading-[1] text-[#fff4d3]">Generate qualified leads in a premium setting.</h2>
            <p className="mt-[20px] text-[16px] leading-[1.76] text-[#d9bb82]">Showcase innovation, host product demos, meet distributors and convert decision-makers inside a luxury salon atmosphere.</p>
          </PremiumCard>
        </div>
      </section>
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={[{ value: "5", label: "Sectors" }, { value: "120+", label: "Brands" }, { value: "30+", label: "Talks" }, { value: "2", label: "Demo stages" }]} />
        </div>
      </section>
      <CTASection title="Position your brand inside the salon." copy="Book a premium stand, host a demonstration or sponsor a highlighted exhibition moment." primaryHref="/become-exhibitor" primaryLabel="Become exhibitor" secondaryHref="/visitors" secondaryLabel="Why visit" />
    </PageLayout>
  );
}
