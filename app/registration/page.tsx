import type { Metadata } from "next";
import { PremiumInput, PremiumSelect } from "@/components/FormControls";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, PremiumButton, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Registration | PANIFIKA EXPO",
  description: "Visitor registration, ticketing and badge information for PANIFIKA EXPO."
};

const tickets = [
  ["Professional Visitor", "Access to exhibition halls, networking areas and main conferences."],
  ["Buyer Badge", "Priority access for distributors, retailers, hotel groups and purchasing teams."],
  ["Conference Access", "A focused pass for talks, workshops and selected masterclasses."]
];

export default function RegistrationPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Registration" title="Secure your professional visitor badge." copy="Choose your visitor category, register your details and prepare your access to PANIFIKA EXPO." image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto grid max-w-[1280px] gap-[42px] lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionTitle eyebrow="Ticketing" title="Elegant access for professional visitors." />
            <div className="mt-[32px] space-y-[14px]">
              {tickets.map(([title, copy]) => (
                <PremiumCard key={title}>
                  <h3 className="text-[24px] font-black uppercase text-[#fff4d3]">{title}</h3>
                  <p className="mt-[10px] text-[15px] leading-[1.72] text-[#d9bb82]">{copy}</p>
                </PremiumCard>
              ))}
            </div>
          </div>
          <PremiumCard className="p-[28px]">
            <h2 className="text-[34px] font-black uppercase leading-[1] text-[#fff4d3]">Visitor registration.</h2>
            <div className="mt-[26px] grid gap-[16px] md:grid-cols-2">
              <PremiumInput label="First name" placeholder="First name" />
              <PremiumInput label="Last name" placeholder="Last name" />
              <PremiumInput label="Email" placeholder="you@example.com" type="email" />
              <PremiumInput label="Company" placeholder="Company name" />
              <PremiumSelect label="Visitor category" options={["Professional Visitor", "Buyer", "Chef", "Press", "Student"]} />
              <PremiumSelect label="Interest" options={["Bakery", "Pastry", "Pizza", "Coffee", "Equipment"]} />
            </div>
            <div className="mt-[24px]">
              <PremiumButton href="mailto:registration@panifika-expo.com">Submit registration</PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </section>
    </PageLayout>
  );
}
