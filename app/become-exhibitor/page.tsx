import type { Metadata } from "next";
import { ExhibitorLeadForm } from "@/components/ExhibitorLeadForm";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, StatsSection, Timeline } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Devenir exposant | PANIFIKA EXPO",
  description: "Avantages exposants, formats de stand et formulaire de demande pour PANIFIKA EXPO."
};

const packages = [
  [tx("Stand essentiel", "Essential Booth"), tx("Une présence premium ciblée pour les ingrédients, services et fournisseurs régionaux.", "A focused premium presence for ingredient, service and regional suppliers.")],
  [tx("Stand showcase", "Showcase Booth"), tx("Plus de visibilité, un espace adapté aux démonstrations et un accompagnement communication renforcé.", "Expanded visibility with demo capacity and enhanced communication support.")],
  [tx("Pavillon signature", "Signature Pavilion"), tx("Un environnement de marque fort pour équipements phares et lancements internationaux.", "High-impact branded environment for flagship equipment and international launches.")]
];

export default function BecomeExhibitorPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Devenir exposant", "Become an exhibitor")}
        title={tx("Rencontrez des décideurs de la boulangerie dans un cadre premium.", "Convert bakery decision-makers in a premium salon.")}
        copy={tx(
          "Présentez votre marque dans un salon professionnel conçu pour générer des contacts qualifiés, accueillir des démonstrations et créer des partenariats.",
          "Present your brand inside a cinematic trade fair environment designed for qualified leads, demonstrations and international partnerships."
        )}
        image="/assets/bakery-equipment.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={[{ value: "12k", label: tx("Visiteurs ciblés", "Visitors") }, { value: "42%", label: tx("Acheteurs", "Buyers") }, { value: "18", label: tx("Marchés ciblés", "Markets") }, { value: "80+", label: tx("Exposants visés", "Exhibitors") }]} />
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Formats de participation", "Booth packages")} title={tx("Des niveaux adaptés à chaque ambition commerciale.", "Participation levels for every commercial ambition.")} />
          <div className="mt-[42px] grid gap-[16px] md:grid-cols-3">
            {packages.map(([title, copy]) => (
              <PremiumCard key={title.en}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]"><LocalizedTextView value={tx("Format", "Package")} /></p>
                <h3 className="mt-[12px] text-[29px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={title} /></h3>
                <p className="mt-[16px] text-[15px] leading-[1.72] text-[#d9bb82]"><LocalizedTextView value={copy} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow={tx("Processus", "Process")} title={tx("De la demande au plan du salon.", "From request to salon floor.")} />
            <div className="mt-[40px]">
              <Timeline
                items={[
                  { year: "01", title: tx("Demander la brochure", "Request brochure"), copy: tx("Partagez les informations de votre entreprise, votre secteur et vos besoins de stand.", "Share company details, sector and booth needs.") },
                  { year: "02", title: tx("Choisir le format", "Select package"), copy: tx("Définissez l'expérience stand et les options de visibilité à étudier.", "Choose the stand experience and visibility options.") },
                  { year: "03", title: tx("Préparer le lancement", "Prepare launch"), copy: tx("Coordonnez contenus, démonstrations, badges et stratégie de contacts.", "Coordinate assets, demos, badges and lead strategy.") }
                ]}
              />
            </div>
          </div>
          <ExhibitorLeadForm />
        </div>
      </section>
      <CTASection title={tx("Préparez votre présence exposant.", "Book your premium exhibition presence.")} copy={tx("Ouvrez la discussion avec l'équipe commerciale PANIFIKA EXPO.", "Start the conversation with the PANIFIKA EXPO commercial team.")} primaryHref="/contact" primaryLabel={tx("Contacter l'équipe", "Talk to sales")} />
    </PageLayout>
  );
}
