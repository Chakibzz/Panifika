import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { visitorProfiles } from "@/lib/event-content";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Visitor Profile | PANIFIKA EXPO",
  description: "Target visitor profiles for PANIFIKA EXPO."
};

export default function VisitorProfilePage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Profil visiteur", "Visitor profile")} title={tx("Les professionnels que PANIFIKA veut attirer.", "The professionals PANIFIKA is built to attract.")} copy={tx("La premiere edition est prevue comme destination B2B pour acheteurs, operateurs, chefs et decideurs de la boulangerie et hospitality.", "The first edition is planned as a B2B destination for buyers, operators, chefs and decision-makers across bakery and hospitality.")} image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Audience", "Audience")} title={tx("Qui devrait visiter.", "Who should visit.")} />
          <div className="mt-[42px] grid gap-[14px] md:grid-cols-3">
            {visitorProfiles.map((profile) => (
              <PremiumCard key={JSON.stringify(profile)}>
                <p className="text-[18px] font-black uppercase leading-[1.25] text-[#fff4d3]"><LocalizedTextView value={profile} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Soyez informe de l'ouverture des badges.", "Be notified when badges open.")} copy={tx("Soumettez votre interet et recevez les prochaines informations visiteurs quand le calendrier deviendra officiel.", "Submit your interest and receive future visitor information as the event calendar becomes official.")} primaryHref="/registration" primaryLabel={tx("S'inscrire", "Register interest")} />
    </PageLayout>
  );
}
