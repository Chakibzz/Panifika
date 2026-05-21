import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Partenaires | PANIFIKA EXPO",
  description: "Sponsors, partenaires médias et partenaires institutionnels de PANIFIKA EXPO."
};

const groups = [
  {
    title: tx("Catégories sponsoring", "Sponsorship categories"),
    names: [tx("Sponsor officiel", "Official sponsor"), tx("Sponsor conférences", "Conference sponsor"), tx("Sponsor ateliers", "Workshop sponsor"), tx("Sponsor zone inscription", "Registration area sponsor")]
  },
  {
    title: tx("Opportunités médias", "Media opportunities"),
    names: [tx("Partenaire média", "Media partner"), tx("Partenaire contenu digital", "Digital content partner"), tx("Presse professionnelle", "Trade press partner"), tx("Partenaire vidéo", "Video partner")]
  },
  {
    title: tx("Ouvertures institutionnelles", "Institutional openings"),
    names: [tx("Association professionnelle", "Professional association"), tx("Institution de formation", "Training institution"), tx("Accompagnement export", "Export support"), tx("Chambre partenaire", "Chamber partner")]
  }
];

export default function PartnersPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Partenaires", "Partners")} title={tx("Structure partenariat pour la première édition.", "Partnership structure for the first edition.")} copy={tx("Sponsors et partenaires seront annoncés progressivement. Cette page prépare les catégories disponibles pour les premières discussions visibilité.", "Sponsors and partners will be announced progressively. This page prepares the categories available for early visibility conversations.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px] space-y-[58px]">
          {groups.map((group) => (
            <div key={group.title.en}>
              <SectionTitle eyebrow={group.title} title={tx(`${group.title.fr} disponibles pour les futurs partenaires.`, `${group.title.en} available for future partners.`)} />
              <div className="mt-[28px] grid gap-[14px] md:grid-cols-4">
                {group.names.map((name) => (
                  <PremiumCard key={name.en}>
                    <div className="flex h-[104px] items-center justify-center rounded-[18px] bg-[#fff9ea] px-[18px] text-center text-[22px] font-black uppercase text-[#8e1712]">
                      <LocalizedTextView value={name} />
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection title={tx("Devenez un partenaire visible.", "Become a visible partner.")} copy={tx("Associez votre marque à une scène, un programme de contenu, un moment d'inscription ou une expérience visiteur premium.", "Sponsor a stage, content program, registration moment or premium visitor experience.")} primaryHref="/contact" primaryLabel={tx("Contacter l'équipe", "Contact team")} />
    </PageLayout>
  );
}
