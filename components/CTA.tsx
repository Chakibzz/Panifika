import Image from "next/image";
import { tx } from "@/lib/i18n";
import { LocalizedTextView } from "./LocalizedText";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#2a0f0b] px-[22px] py-[82px] md:px-[48px] md:py-[122px]">
      <Image src="/assets/artisan-bread.png" alt="" fill className="object-cover opacity-[0.23]" sizes="100vw" />
      <div className="absolute inset-0 bg-[#2a0f0b]/76" />
      <Reveal className="relative z-10 mx-auto max-w-[1040px] text-center">
        <div className="mx-auto mb-[28px] h-[102px] w-[284px] overflow-hidden rounded-[8px] bg-[#fffdf6] p-[7px] shadow-[0_0_54px_rgba(243,173,22,0.24)] md:h-[132px] md:w-[372px]">
          <div className="relative h-full w-full">
            <Image src="/assets/panifika-logo.png" alt="PANIFIKA EXPO" fill className="object-contain" />
          </div>
        </div>
        <h2 className="text-[40px] font-black uppercase leading-[0.98] tracking-[-0.04em] text-[#fff4d3] md:text-[78px]">
          <LocalizedTextView value={tx("Rejoignez le salon international des métiers de la pâte.", "Join the international bakery salon.")} />
        </h2>
        <p className="mx-auto mt-[24px] max-w-[640px] text-[17px] leading-[1.76] text-[#f1d6a1] md:text-[19px]">
          <LocalizedTextView
            value={tx(
              "Une plateforme professionnelle pour boulangers, pâtissiers, fabricants d'équipements, fournisseurs et acteurs du food service.",
              "A cinematic exhibition experience for bakers, pastry makers, equipment manufacturers and international food professionals."
            )}
          />
        </p>
        <a href="mailto:contact@panifika-expo.com" className="mt-[38px] inline-flex rounded-[999px] bg-[#f3ad16] px-[34px] py-[18px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_50px_rgba(243,173,22,0.34)]">
          <LocalizedTextView value={tx("Demander un accès", "Request access")} />
        </a>
      </Reveal>
    </section>
  );
}
