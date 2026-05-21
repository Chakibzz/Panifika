import type { Metadata } from "next";
import { submitVisitorRegistration } from "@/app/actions";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Inscription | PANIFIKA EXPO",
  description: "Inscription visiteur, badges et informations d'accès pour PANIFIKA EXPO."
};

const tickets = [
  [tx("Visiteur professionnel", "Professional Visitor"), tx("Accès aux halls d'exposition, aux espaces networking et aux conférences principales.", "Access to exhibition halls, networking areas and main conferences.")],
  [tx("Badge acheteur", "Buyer Badge"), tx("Accès prioritaire pour distributeurs, détaillants, groupes hôteliers et équipes achats.", "Priority access for distributors, retailers, hotel groups and purchasing teams.")],
  [tx("Accès conférences", "Conference Access"), tx("Un format ciblé pour les conférences, ateliers et masterclasses sélectionnées.", "A focused pass for talks, workshops and selected masterclasses.")]
];

export default function RegistrationPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Inscription", "Registration")}
        title={tx("Préparez votre badge visiteur professionnel.", "Secure your professional visitor badge.")}
        copy={tx("Choisissez votre profil visiteur, renseignez vos informations et préparez votre accès à PANIFIKA EXPO.", "Choose your visitor category, register your details and prepare your access to PANIFIKA EXPO.")}
        image="/assets/expo-hall.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionTitle eyebrow={tx("Badges", "Ticketing")} title={tx("Des accès pensés pour les visiteurs professionnels.", "Elegant access for professional visitors.")} />
            <div className="mt-[32px] space-y-[14px]">
              {tickets.map(([title, copy]) => (
                <PremiumCard key={title.en}>
                  <h3 className="text-[24px] font-black uppercase text-[#fff4d3]"><LocalizedTextView value={title} /></h3>
                  <p className="mt-[10px] text-[15px] leading-[1.72] text-[#d9bb82]"><LocalizedTextView value={copy} /></p>
                </PremiumCard>
              ))}
            </div>
          </div>
          <PremiumCard className="p-[28px]">
            <form action={submitVisitorRegistration}>
              <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Inscription visiteur.", "Visitor registration.")} /></h2>
              <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
                <PremiumInput label={tx("Prénom", "First name")} name="first_name" placeholder={tx("Prénom", "First name")} required />
                <PremiumInput label={tx("Nom", "Last name")} name="last_name" placeholder={tx("Nom", "Last name")} required />
                <PremiumInput label={tx("Email", "Email")} name="email" placeholder="you@example.com" type="email" required />
                <PremiumInput label={tx("Entreprise", "Company")} name="company" placeholder={tx("Nom de l'entreprise", "Company name")} />
                <PremiumInput label={tx("Téléphone", "Phone")} name="phone" placeholder="+213..." />
                <PremiumSelect label={tx("Profil visiteur", "Visitor category")} name="visitor_category" options={[tx("Visiteur professionnel", "Professional Visitor"), tx("Acheteur", "Buyer"), tx("Chef", "Chef"), tx("Presse", "Press"), tx("Étudiant", "Student")]} required />
                <PremiumSelect label={tx("Centre d'intérêt", "Interest")} name="interest" options={[tx("Boulangerie", "Bakery"), tx("Pâtisserie", "Pastry"), tx("Pizza", "Pizza"), tx("Café", "Coffee"), tx("Équipements", "Equipment")]} />
              </div>
              <div className="mt-[24px]">
                <button className="inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] transition duration-300 hover:bg-[#ffd565]">
                  <LocalizedTextView value={tx("Envoyer l'inscription", "Submit registration")} />
                </button>
              </div>
            </form>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
