import type { Metadata } from "next";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumButton, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Contact | PANIFIKA EXPO",
  description: "Contact the PANIFIKA EXPO organizing team."
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Speak with the PANIFIKA EXPO team." copy="Reach the organizer for visitor access, exhibitor participation, partnerships, media and logistics." image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle eyebrow="Organizer information" title="Premium support for a professional salon." />
            <div className="mt-[32px] space-y-[14px]">
              <PremiumCard>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]">Email</p>
                <p className="mt-[8px] text-[24px] font-black text-[#fff4d3]">contact@panifika-expo.com</p>
              </PremiumCard>
              <PremiumCard>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]">Social</p>
                <p className="mt-[8px] text-[20px] font-black uppercase text-[#fff4d3]">LinkedIn / Instagram / YouTube</p>
              </PremiumCard>
              <div className="gold-line-frame flex min-h-[240px] items-center justify-center rounded-[26px] bg-[#23130d]/82 text-[12px] font-black uppercase tracking-[0.18em] text-[#c9a66b]">
                Exhibition venue map preview
              </div>
            </div>
          </div>
          <PremiumCard className="p-[28px]">
            <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]">Send a message.</h2>
            <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
              <PremiumInput label="Name" placeholder="Full name" />
              <PremiumInput label="Email" placeholder="you@example.com" type="email" />
              <PremiumSelect label="Topic" options={["Visitor access", "Become exhibitor", "Partnership", "Press", "Logistics"]} />
              <PremiumInput label="Company" placeholder="Company name" />
            </div>
            <label className="mt-[16px] block">
              <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]">Message</span>
              <textarea className="min-h-[150px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 p-[17px] text-[15px] text-[#fff4d3] outline-none placeholder:text-[#a58251] focus:border-[#f3ad16]/68" placeholder="How can we help?" />
            </label>
            <div className="mt-[24px]">
              <PremiumButton href="mailto:contact@panifika-expo.com">Send message</PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
