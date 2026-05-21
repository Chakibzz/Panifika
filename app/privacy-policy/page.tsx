import type { Metadata } from "next";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Confidentialité | PANIFIKA EXPO",
  description: "Politique de confidentialité PANIFIKA EXPO."
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Confidentialité", "Privacy")} title={tx("Politique de confidentialité.", "Privacy policy.")} copy={tx("Comment PANIFIKA EXPO collecte et utilise les informations de contact professionnelles.", "How PANIFIKA EXPO collects and uses professional contact information.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[980px]">
          <SectionTitle eyebrow={tx("Données", "Data")} title={tx("Demandes professionnelles et communication événement.", "Professional event requests and communication.")} />
          <PremiumCard className="mt-[34px] space-y-[18px] text-[16px] leading-[1.75] text-[#d9bb82]">
            <p><LocalizedTextView value={tx("PANIFIKA EXPO collecte les informations envoyées via les formulaires : nom, entreprise, email, téléphone, fonction, intérêt et contenu du message.", "PANIFIKA EXPO collects information submitted through forms, including name, company, email, phone, role, interest and message content.")} /></p>
            <p><LocalizedTextView value={tx("Ces informations servent à répondre aux demandes, qualifier les intérêts exposants et visiteurs, préparer les communications et organiser la première édition prévue fin 2027.", "This information is used to answer requests, qualify exhibitor and visitor interest, prepare event communication and manage the first edition scheduled for late 2027.")} /></p>
            <p><LocalizedTextView value={tx("Les données sont stockées dans Supabase et accessibles uniquement au staff autorisé. Vous pouvez demander une correction ou suppression via la page contact.", "Data is stored in Supabase and accessed by authorized staff only. You can request correction or deletion by contacting the organizer through the contact page.")} /></p>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
