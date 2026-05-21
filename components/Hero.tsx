"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 760], [0, 96]);

  return (
    <section className="relative min-h-[760px] overflow-hidden md:min-h-[900px]">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.06]">
        <Image src="/assets/expo-hall.png" alt="" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="cinematic-vignette absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[#120c08] to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1280px] flex-col justify-end px-[22px] pb-[86px] pt-[132px] md:min-h-[900px] md:px-[48px] md:pb-[122px]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[900px]"
        >
          <div className="mb-[26px] inline-flex items-center gap-[12px] border-y border-[#f3ad16]/35 py-[10px] text-[12px] font-bold uppercase tracking-[0.26em] text-[#ffd565]">
            International Bakery Exhibition
          </div>
          <h1 className="max-w-[880px] text-[54px] font-black uppercase leading-[0.88] tracking-[-0.045em] text-[#fff7df] drop-shadow-[0_12px_36px_rgba(0,0,0,0.62)] md:text-[108px] xl:text-[132px]">
            PANIFIKA EXPO
          </h1>
          <p className="mt-[24px] max-w-[660px] text-[18px] leading-[1.72] text-[#f5dfb6] md:mt-[31px] md:text-[22px]">
            La pâte dans tous ses états, staged through golden light, live baking craft, equipment showcases and
            international salon energy.
          </p>
          <div className="mt-[38px] flex flex-wrap gap-[14px]">
            <a
              href="#events"
              className="rounded-[999px] bg-[#f3ad16] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)]"
            >
              Explore Expo
            </a>
            <a
              href="#gallery"
              className="rounded-[999px] border border-[#f3ad16]/45 px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] text-[#fff2cf] backdrop-blur-[10px] transition hover:bg-[#f3ad16]/10"
            >
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
