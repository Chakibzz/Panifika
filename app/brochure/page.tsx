import type { Metadata } from "next";
import Link from "next/link";
import { submitBrochureRequest } from "@/app/actions";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Brochure | PANIFIKA EXPO",
  description: "Demander les brochures et documents commerciaux PANIFIKA EXPO."
};

export default function BrochurePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Brochure", "Brochure")}
        title={tx("Demandez les documents de la première édition.", "Request first-edition documents.")}
        copy={tx("La brochure exposant, le dossier sponsoring et les informations visiteurs seront enrichis à mesure que le salon avance vers fin 2027.", "The exhibitor brochure, sponsorship deck and visitor information will be updated as the event develops toward late 2027.")}
        image="/assets/bakery-equipment.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow={tx("Documents", "Documents")}
            title={tx("Des supports commerciaux mis à jour progressivement.", "Commercial documents prepared over time.")}
            copy={tx("Plutôt que publier des PDF incomplets, PANIFIKA collecte les demandes et enverra la bonne version dès qu'elle sera disponible.", "Instead of publishing incomplete PDFs, PANIFIKA collects requests and sends the right version when available.")}
          />
          <PremiumCard className="p-[28px]">
            <Link href="/exhibitor-brochure" className="mb-[22px] inline-flex rounded-[999px] border border-[#f3ad16]/40 px-[18px] py-[12px] text-[11px] font-black uppercase tracking-[0.16em] text-[#ffd565] transition hover:bg-[#f3ad16]/10">
              <LocalizedTextView value={tx("Voir la brochure imprimable", "View printable brochure")} />
            </Link>
            <form action={submitBrochureRequest}>
              <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Demande de document.", "Document request.")} /></h2>
              <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
                <PremiumInput label={tx("Nom complet", "Full name")} name="full_name" placeholder={tx("Nom complet", "Full name")} required />
                <PremiumInput label={tx("Email", "Email")} name="email" placeholder="you@example.com" type="email" required />
                <PremiumInput label={tx("Entreprise", "Company")} name="company" placeholder={tx("Entreprise", "Company")} />
                <PremiumInput label={tx("Téléphone", "Phone")} name="phone" placeholder="+213..." />
                <PremiumSelect label={tx("Document", "Document")} name="topic" options={[tx("Brochure exposant", "Exhibitor brochure"), tx("Dossier sponsoring", "Sponsorship deck"), tx("Informations visiteurs", "Visitor information"), tx("Kit média", "Media kit")]} required />
                <PremiumSelect label={tx("Profil", "Profile")} name="profile" options={[tx("Exposant", "Exhibitor"), tx("Visiteur", "Visitor"), tx("Sponsor", "Sponsor"), tx("Média", "Media"), tx("Institution", "Institution")]} />
              </div>
              <button className="mt-[24px] inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] transition duration-300 hover:bg-[#ffd565]">
                <LocalizedTextView value={tx("Demander la brochure", "Request brochure")} />
              </button>
            </form>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
