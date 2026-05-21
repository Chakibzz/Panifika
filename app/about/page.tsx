import type { Metadata } from "next";
import Image from "next/image";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle, StatsSection, Timeline } from "@/components/PremiumPrimitives";
import { eventBasics, launchTimeline, targetStats } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "À propos | PANIFIKA EXPO",
  description: "Mission, histoire et positionnement international de PANIFIKA EXPO."
};

const values = [
  tx("Excellence métier", "Craft excellence"),
  tx("Échanges internationaux", "International exchange"),
  tx("Innovation pour les professionnels", "Innovation for professionals"),
  tx("Culture chaleureuse de la boulangerie", "Warm bakery culture")
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("À propos de PANIFIKA EXPO", "About PANIFIKA EXPO")}
        title={tx("Un salon premium dédié aux métiers de la pâte.", "A premium bakery salon with global ambition.")}
        copy={tx(
          `Prévu ${eventBasics.date}, PANIFIKA EXPO se construit comme une première édition ciblée pour les professionnels de la boulangerie, de la pâtisserie, de la pizza, du café et des équipements alimentaires.`,
          `Scheduled for ${eventBasics.date}, PANIFIKA EXPO is being built as a focused first-edition platform for bakery, pastry, pizza, coffee and food equipment professionals.`
        )}
        image="/assets/artisan-bread.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[50px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative aspect-[1.08] overflow-hidden rounded-[32px] border border-[#f3ad16]/24 bg-[#23130d] p-[10px] expo-glow">
            <Image src="/assets/expo-hall.png" alt="Hall d'exposition PANIFIKA EXPO" fill className="object-cover p-[10px]" sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
          <div>
            <SectionTitle
              eyebrow={tx("Vision organisateur", "Organizer story")}
              title={tx("Conçu pour les professionnels qui façonnent la boulangerie de demain.", "Built for the professionals shaping tomorrow's bakery.")}
              copy={tx(
                "Le salon est pensé comme un point de rencontre chaleureux et utile, où capacité industrielle, savoir-faire artisanal et hospitality peuvent coexister dans un même environnement premium.",
                "The exhibition was conceived as a warm, high-value meeting point where industrial capability, artisan knowledge and hospitality can live inside the same premium event environment."
              )}
            />
            <div className="mt-[32px] grid gap-[12px] md:grid-cols-2">
              {values.map((value) => (
                <PremiumCard key={value.en}>
                  <p className="text-[16px] font-black uppercase tracking-[0.08em] text-[#fff4d3]"><LocalizedTextView value={value} /></p>
                </PremiumCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Feuille de route", "First edition roadmap")} title={tx("Un lancement construit progressivement avec le secteur.", "A launch built progressively with the industry.")} />
          <div className="mt-[44px]">
            <Timeline items={launchTimeline} />
          </div>
        </div>
      </section>
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[110px]">
        <div className="mx-auto max-w-[1280px]">
          <StatsSection stats={targetStats} />
        </div>
      </section>
      <CTASection
        title={tx("Découvrez la plateforme du salon.", "Discover the exhibition platform.")}
        copy={tx("Explorez les secteurs, les bénéfices et les temps forts prévus pour les professionnels.", "Explore the sectors, benefits and highlights created for bakery professionals.")}
        primaryHref="/exhibition"
        primaryLabel={tx("Voir le salon", "View exhibition")}
        secondaryHref="/contact"
        secondaryLabel={tx("Contacter l'organisateur", "Contact organizer")}
      />
    </PageLayout>
  );
}
