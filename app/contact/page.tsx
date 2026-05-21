import type { Metadata } from "next";
import { submitContactMessage } from "@/app/actions";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact | PANIFIKA EXPO",
  description: "Contactez l'équipe organisatrice de PANIFIKA EXPO."
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={tx("Contact", "Contact")}
        title={tx("Échangez avec l'équipe PANIFIKA EXPO.", "Speak with the PANIFIKA EXPO team.")}
        copy={tx("Contactez l'organisation pour les visiteurs, exposants, partenariats, médias et questions logistiques.", "Reach the organizer for visitor access, exhibitor participation, partnerships, media and logistics.")}
        image="/assets/artisan-bread.png"
      />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle eyebrow={tx("Informations organisateur", "Organizer information")} title={tx("Un contact clair pour un salon professionnel.", "Premium support for a professional salon.")} />
            <div className="mt-[32px] space-y-[14px]">
              <PremiumCard>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]">Email</p>
                <p className="mt-[8px] text-[24px] font-black text-[#fff4d3]">contact@panifika-expo.com</p>
              </PremiumCard>
              <PremiumCard>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]"><LocalizedTextView value={tx("Réseaux", "Social")} /></p>
                <p className="mt-[8px] text-[20px] font-black uppercase text-[#fff4d3]">LinkedIn / Instagram / YouTube</p>
              </PremiumCard>
              <div className="gold-line-frame flex min-h-[240px] items-center justify-center rounded-[26px] bg-[#23130d]/82 text-center text-[12px] font-black uppercase tracking-[0.18em] text-[#c9a66b]">
                <LocalizedTextView value={tx("Aperçu de la carte du lieu", "Exhibition venue map preview")} />
              </div>
            </div>
          </div>
          <PremiumCard className="p-[28px]">
            <form action={submitContactMessage}>
              <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]"><LocalizedTextView value={tx("Envoyer un message.", "Send a message.")} /></h2>
              <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
                <PremiumInput label={tx("Nom", "Name")} name="full_name" placeholder={tx("Nom complet", "Full name")} required />
                <PremiumInput label={tx("Email", "Email")} name="email" placeholder="you@example.com" type="email" required />
                <PremiumSelect label={tx("Sujet", "Topic")} name="topic" options={[tx("Accès visiteur", "Visitor access"), tx("Devenir exposant", "Become exhibitor"), tx("Partenariat", "Partnership"), tx("Presse", "Press"), tx("Logistique", "Logistics")]} required />
                <PremiumInput label={tx("Entreprise", "Company")} name="company" placeholder={tx("Nom de l'entreprise", "Company name")} />
                <PremiumInput label={tx("Téléphone", "Phone")} name="phone" placeholder="+213..." />
              </div>
              <label className="mt-[16px] block">
                <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]"><LocalizedTextView value={tx("Message", "Message")} /></span>
                <textarea name="message" required className="min-h-[150px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 p-[17px] text-[15px] text-[#fff4d3] outline-none placeholder:text-[#a58251] focus:border-[#f3ad16]/68" placeholder="Comment pouvons-nous vous aider ?" />
              </label>
              <div className="mt-[24px]">
                <button className="inline-flex rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] transition duration-300 hover:bg-[#ffd565]">
                  <LocalizedTextView value={tx("Envoyer", "Send message")} />
                </button>
              </div>
            </form>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
