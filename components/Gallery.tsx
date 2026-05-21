import Image from "next/image";
import { tx } from "@/lib/i18n";
import { LocalizedTextView } from "./LocalizedText";
import { Reveal } from "./Reveal";

const gallery = [
  { src: "/assets/bakery-equipment.png", title: tx("Pavillon équipements", "Equipment pavilion"), ratio: "aspect-[1.34]" },
  { src: "/assets/artisan-bread.png", title: tx("Savoir-faire artisanal", "Artisan craft"), ratio: "aspect-[1.34]" },
  { src: "/assets/expo-hall.png", title: tx("Architecture du salon", "Salon architecture"), ratio: "aspect-[1.34]" }
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="flex flex-col justify-between gap-[22px] md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#f3ad16]">
              <LocalizedTextView value={tx("Galerie", "Gallery")} />
            </p>
            <h2 className="mt-[16px] max-w-[780px] text-[38px] font-black uppercase leading-[1] tracking-[-0.035em] text-[#fff4d3] md:text-[66px]">
              <LocalizedTextView value={tx("L'univers visuel premium du salon.", "Premium bakery exhibition scenery.")} />
            </h2>
          </div>
          <p className="max-w-[390px] text-[16px] leading-[1.72] text-[#d9bb82]">
            <LocalizedTextView
              value={tx(
                "Une ambiance marron et jaune, fidèle à l'identité PANIFIKA, pour mettre en valeur produits, stands et démonstrations.",
                "The visual system stays close to the supplied export: warm beige surfaces, bordeaux accents and gold illumination."
              )}
            />
          </p>
        </Reveal>
        <div className="mt-[42px] grid gap-[18px] md:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={JSON.stringify(item.title)} delay={index * 0.07}>
              <article className="group overflow-hidden rounded-[24px] border border-[#f3ad16]/20 bg-[#23130d] p-[8px] shadow-[0_24px_74px_rgba(0,0,0,0.34)]">
                <div className={`relative ${item.ratio} overflow-hidden rounded-[17px]`}>
                  <Image src={item.src} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.045]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/76 via-transparent to-transparent" />
                  <h3 className="absolute bottom-[18px] left-[18px] text-[15px] font-black uppercase tracking-[0.14em] text-[#ffe3a3]">
                    <LocalizedTextView value={item.title} />
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
