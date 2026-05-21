import type { Metadata } from "next";
import Link from "next/link";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Merci | PANIFIKA EXPO",
  description: "Confirmation d'envoi pour PANIFIKA EXPO."
};

export default function ThankYouPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Merci", "Thank you")} title={tx("Votre demande a bien été reçue.", "Your request has been received.")} copy={tx("L'équipe PANIFIKA EXPO utilisera votre demande pour vous recontacter à mesure que la première édition avance vers fin 2027.", "The PANIFIKA EXPO team will use your submission to follow up as the first edition develops toward late 2027.")} image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <PremiumCard className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[34px] font-black uppercase text-[#fff4d3]"><LocalizedTextView value={tx("Demande enregistrée.", "Submission saved.")} /></h2>
          <p className="mt-[16px] text-[17px] leading-[1.72] text-[#d9bb82]"><LocalizedTextView value={tx("Vous pouvez continuer à explorer la plateforme pendant que l'organisation prépare les prochaines informations.", "You can continue exploring the event platform while the organizer prepares the next updates.")} /></p>
          <Link href="/" className="mt-[26px] inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b]">
            <LocalizedTextView value={tx("Retour à l'accueil", "Back home")} />
          </Link>
        </PremiumCard>
      </section>
    </PageLayout>
  );
}
