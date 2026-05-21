import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[128px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-[42px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-[74px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[#f3ad16]/24 bg-[#24130c] p-[10px] expo-glow">
            <div className="relative aspect-[1.52] overflow-hidden rounded-[20px]">
              <Image src="/assets/artisan-bread.png" alt="Artisan bread" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/64 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#f3ad16]">About the exhibition</p>
            <h2 className="mt-[16px] max-w-[720px] text-[39px] font-black uppercase leading-[0.98] tracking-[-0.035em] text-[#fff4d3] md:text-[70px]">
              A warm stage for bakery culture.
            </h2>
            <p className="mt-[27px] max-w-[640px] text-[17px] leading-[1.82] text-[#e9cf9b] md:text-[19px]">
              PANIFIKA EXPO brings the salon atmosphere into a cinematic environment: golden exhibition architecture,
              live chef demonstrations, artisan products and professional bakery equipment.
            </p>
            <div className="mt-[38px] grid grid-cols-3 gap-[10px] border-y border-[#f3ad16]/20 py-[23px]">
              {[
                ["80+", "Exhibitors"],
                ["24", "Live demos"],
                ["18", "Countries"]
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-[28px] font-black tracking-[-0.04em] text-[#ffd565] md:text-[42px]">{value}</div>
                  <div className="mt-[4px] text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9a66b]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
