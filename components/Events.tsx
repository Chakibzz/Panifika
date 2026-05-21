import Image from "next/image";
import { tx } from "@/lib/i18n";
import { LocalizedTextView } from "./LocalizedText";
import { Reveal } from "./Reveal";

const items = [
  tx("Démonstrations d'équipements de boulangerie", "Baking equipment demonstrations"),
  tx("Showcases pâtisserie et savoir-faire international", "International pastry showcases"),
  tx("Technologies, ingrédients et solutions de production", "Bakery technology and ingredients"),
  tx("Sessions live animées par des chefs et experts", "Chef-led live production sessions")
];

export function Events() {
  return (
    <section id="events" className="relative bg-[#1a0e09] px-[22px] py-[82px] md:px-[48px] md:py-[122px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(243,173,22,0.13),transparent_31rem)]" />
      <div className="relative mx-auto grid max-w-[1280px] gap-[46px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-[72px]">
        <Reveal>
          <div className="lg:pt-[26px]">
            <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#f3ad16]">
              <LocalizedTextView value={tx("Temps forts", "Events")} />
            </p>
            <h2 className="mt-[16px] text-[38px] font-black uppercase leading-[1] tracking-[-0.035em] text-[#fff4d3] md:text-[66px]">
              <LocalizedTextView value={tx("Des moments live au cœur du salon.", "Live salon moments in golden light.")} />
            </h2>
            <div className="mt-[34px] space-y-[14px]">
              {items.map((item) => (
                <div key={JSON.stringify(item)} className="gold-line-frame rounded-[18px] bg-[#24130c]/74 px-[19px] py-[17px] text-[15px] font-bold uppercase tracking-[0.08em] text-[#f3d99f]">
                  <LocalizedTextView value={item} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[34px] border border-[#f3ad16]/25 bg-[#080604] p-[10px] expo-glow">
            <div className="light-sweep relative aspect-[1.62] overflow-hidden rounded-[25px]">
              <Image src="/assets/expo-hall.png" alt="" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/55 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
