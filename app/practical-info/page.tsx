import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { eventBasics } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Infos pratiques | PANIFIKA EXPO",
  description: "Informations pratiques pour PANIFIKA EXPO."
};

const info = [
  [tx("Dates", "Dates"), tx(`${eventBasics.date}. Les dates exactes seront annoncées dès la finalisation du calendrier du lieu.`, `${eventBasics.date}. Exact dates will be announced once the venue calendar is finalized.`)],
  [tx("Lieu", "Location"), tx(`${eventBasics.venue}. Les détails du lieu, des halls et du plan d'accès seront publiés plus tard.`, `${eventBasics.venue}. Venue details, halls and access map will be published later.`)],
  [tx("Horaires", "Opening hours"), tx("Les horaires professionnels seront confirmés avec le programme final de l'événement.", "Professional opening hours will be confirmed with the final event schedule.")],
  [tx("Accès", "Access"), tx("Les inscriptions visiteurs, badges exposants, accès presse et lettres d'invitation seront gérés à l'approche du salon.", "Visitor registration, exhibitor badges, press access and invitation letters will be managed closer to launch.")],
  [tx("Voyage", "Travel"), tx("Les informations hôtel, transport, parking et visa seront ajoutées pour les participants internationaux.", "Hotel, transport, parking and visa information will be added for international participants.")]
];

export default function PracticalInfoPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Infos pratiques", "Practical info")} title={tx("Tout ce dont visiteurs et exposants auront besoin.", "Everything visitors and exhibitors will need.")} copy={tx("Cette page est prête à accueillir les détails opérationnels à mesure que PANIFIKA avance vers sa première édition fin 2027.", "This page is ready for operational details as PANIFIKA approaches the first edition in late 2027.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Préparation", "Planning")} title={tx("Informations actuelles et détails à venir.", "Current status and future details.")} />
          <div className="mt-[42px] grid gap-[16px] md:grid-cols-2">
            {info.map(([title, copy]) => (
              <PremiumCard key={title.en}>
                <h2 className="text-[28px] font-black uppercase text-[#fff4d3]"><LocalizedTextView value={title} /></h2>
                <p className="mt-[14px] text-[16px] leading-[1.74] text-[#d9bb82]"><LocalizedTextView value={copy} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Besoin d'une information précise ?", "Need specific information?")} copy={tx("Contactez l'organisation pour toute question commerciale, visiteur, presse ou logistique.", "Contact the organizer for commercial, visitor, press or logistics questions.")} primaryHref="/contact" primaryLabel={tx("Contacter l'équipe", "Contact team")} />
    </PageLayout>
  );
}
