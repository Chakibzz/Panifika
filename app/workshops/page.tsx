import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Workshops | PANIFIKA EXPO",
  description: "Workshop formats planned for PANIFIKA EXPO."
};

const workshops = [
  tx("Fermentation et controle de pate", "Fermentation and dough control"),
  tx("Performance des fours industriels", "Industrial oven performance"),
  tx("Finition patisserie et decoration", "Pastry finishing and decoration"),
  tx("Production pizza et vitesse de service", "Pizza production and service speed"),
  tx("Packaging et duree de conservation", "Packaging and shelf-life"),
  tx("Cafe et experience boutique boulangerie", "Coffee and bakery store experience")
];

export default function WorkshopsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Workshops", "Workshops")} title={tx("Sessions techniques pour professionnels.", "Technical sessions for professionals.")} copy={tx("Les sujets ne sont pas definitifs. Cette page prepare le format qui accueillera les moments de formation menes par chefs et marques.", "Workshop topics are not final yet. This page prepares the format that will host chef-led and brand-led learning moments.")} image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Sujets candidats", "Candidate topics")} title={tx("Axes de workshops explores.", "Workshop areas being explored.")} />
          <div className="mt-[42px] grid gap-[14px] md:grid-cols-3">
            {workshops.map((workshop) => (
              <PremiumCard key={JSON.stringify(workshop)}>
                <p className="text-[19px] font-black uppercase leading-[1.18] text-[#fff4d3]"><LocalizedTextView value={workshop} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Animez ou assistez a un workshop.", "Host or attend a workshop.")} copy={tx("Soumettez votre interet et contribuez a faconner le programme technique de la premiere edition.", "Submit your interest and help shape the technical program for the first edition.")} primaryHref="/become-speaker" primaryLabel={tx("Proposer un workshop", "Propose workshop")} secondaryHref="/registration" secondaryLabel={tx("Interet visiteur", "Visitor interest")} />
    </PageLayout>
  );
}
