import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LocalizedValue } from "./LocalizedText";
import { LocalizedTextView } from "./LocalizedText";
import { Reveal } from "./Reveal";

type SectionTitleProps = {
  eyebrow: LocalizedValue;
  title: LocalizedValue;
  copy?: LocalizedValue;
  align?: "left" | "center";
};

type PageHeroProps = {
  eyebrow: LocalizedValue;
  title: LocalizedValue;
  copy: LocalizedValue;
  image?: string;
};

type PremiumButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "gold" | "outline";
};

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
};

type ExhibitionCardProps = {
  title: LocalizedValue;
  copy: LocalizedValue;
  image: string;
  meta?: LocalizedValue;
};

type TimelineItem = {
  year: LocalizedValue;
  title: LocalizedValue;
  copy: LocalizedValue;
};

type StatItem = {
  value: string;
  label: LocalizedValue;
};

export const AnimatedReveal = Reveal;

export function FloatingParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="floating-particle left-[8%] top-[22%]" />
      <span className="floating-particle left-[74%] top-[18%] animation-delay-[900ms]" />
      <span className="floating-particle left-[42%] top-[72%] animation-delay-[1600ms]" />
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, image = "/assets/expo-hall.png" }: PageHeroProps) {
  return (
    <section className="relative min-h-[620px] overflow-hidden px-[22px] pt-[142px] md:min-h-[760px] md:px-[48px] md:pt-[176px]">
      <Image src={image} alt="" fill priority className="scale-[1.04] object-cover" sizes="100vw" />
      <div className="cinematic-vignette absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-[#120c08] to-transparent" />
      <FloatingParticles />
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col justify-end pb-[84px] md:pb-[112px]">
        <Reveal className="max-w-[920px]">
          <p className="inline-flex border-y border-[#f3ad16]/35 py-[10px] text-[12px] font-black uppercase tracking-[0.28em] text-[#ffd565]">
            <LocalizedTextView value={eyebrow} />
          </p>
          <h1 className="mt-[26px] text-[52px] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#fff7df] drop-shadow-[0_12px_36px_rgba(0,0,0,0.62)] md:text-[102px] xl:text-[126px]">
            <LocalizedTextView value={title} />
          </h1>
          <p className="mt-[28px] max-w-[700px] text-[18px] leading-[1.78] text-[#f5dfb6] md:text-[22px]">
            <LocalizedTextView value={copy} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, copy, align = "left" }: SectionTitleProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-[880px] text-center" : "max-w-[830px]"}>
      <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#f3ad16]">
        <LocalizedTextView value={eyebrow} />
      </p>
      <h2 className="mt-[16px] text-[38px] font-black uppercase leading-[1] tracking-[-0.035em] text-[#fff4d3] md:text-[66px]">
        <LocalizedTextView value={title} />
      </h2>
      {copy ? (
        <p className="mt-[23px] text-[17px] leading-[1.78] text-[#d9bb82] md:text-[19px]">
          <LocalizedTextView value={copy} />
        </p>
      ) : null}
    </Reveal>
  );
}

export function PremiumButton({ children, href, variant = "gold" }: PremiumButtonProps) {
  const className =
    variant === "gold"
      ? "bg-[#f3ad16] text-[#4b0f0b] shadow-[0_0_45px_rgba(243,173,22,0.34)] hover:bg-[#ffd565]"
      : "border border-[#f3ad16]/45 text-[#fff2cf] hover:bg-[#f3ad16]/10";

  return (
    <Link
      href={href}
      className={`inline-flex rounded-[999px] px-[28px] py-[16px] text-[12px] font-black uppercase tracking-[0.18em] transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}

export function PremiumCard({ children, className = "" }: PremiumCardProps) {
  return (
    <article className={`gold-line-frame rounded-[24px] bg-[#23130d]/82 p-[24px] shadow-[0_24px_74px_rgba(0,0,0,0.34)] ${className}`}>
      {children}
    </article>
  );
}

export function ExhibitionCard({ title, copy, image, meta }: ExhibitionCardProps) {
  return (
    <Reveal>
      <article className="group overflow-hidden rounded-[26px] border border-[#f3ad16]/22 bg-[#23130d] p-[8px] shadow-[0_24px_74px_rgba(0,0,0,0.34)]">
        <div className="relative aspect-[1.28] overflow-hidden rounded-[18px]">
          <Image src={image} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.045]" sizes="(min-width: 768px) 33vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/84 via-[#120c08]/10 to-transparent" />
          <div className="absolute inset-x-[18px] bottom-[18px]">
            {meta ? (
              <p className="mb-[8px] text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]">
                <LocalizedTextView value={meta} />
              </p>
            ) : null}
            <h3 className="text-[21px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#fff4d3]">
              <LocalizedTextView value={title} />
            </h3>
            <p className="mt-[10px] text-[14px] leading-[1.62] text-[#e4c78e]">
              <LocalizedTextView value={copy} />
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-[18px]">
      {items.map((item, index) => (
        <Reveal key={JSON.stringify(item.year)} delay={index * 0.06}>
          <div className="grid gap-[16px] border-l border-[#f3ad16]/36 pl-[24px] md:grid-cols-[140px_1fr]">
            <div className="text-[34px] font-black tracking-[-0.04em] text-[#ffd565]">
              <LocalizedTextView value={item.year} />
            </div>
            <PremiumCard>
              <h3 className="text-[22px] font-black uppercase tracking-[-0.02em] text-[#fff4d3]">
                <LocalizedTextView value={item.title} />
              </h3>
              <p className="mt-[10px] text-[15px] leading-[1.72] text-[#d9bb82]">
                <LocalizedTextView value={item.copy} />
              </p>
            </PremiumCard>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function StatsSection({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid gap-[12px] md:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={JSON.stringify(stat.label)} delay={index * 0.05}>
          <PremiumCard>
            <div className="text-[38px] font-black tracking-[-0.045em] text-[#ffd565] md:text-[52px]">{stat.value}</div>
            <div className="mt-[8px] text-[10px] font-black uppercase tracking-[0.18em] text-[#c9a66b]">
              <LocalizedTextView value={stat.label} />
            </div>
          </PremiumCard>
        </Reveal>
      ))}
    </div>
  );
}

export function CTASection({
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  title: LocalizedValue;
  copy: LocalizedValue;
  primaryHref: string;
  primaryLabel: LocalizedValue;
  secondaryHref?: string;
  secondaryLabel?: LocalizedValue;
}) {
  return (
    <section className="relative overflow-hidden bg-[#2a0f0b] px-[22px] py-[82px] md:px-[48px] md:py-[116px]">
      <Image src="/assets/artisan-bread.png" alt="" fill className="object-cover opacity-[0.2]" sizes="100vw" />
      <div className="absolute inset-0 bg-[#2a0f0b]/78" />
      <Reveal className="relative z-10 mx-auto max-w-[980px] text-center">
        <h2 className="text-[40px] font-black uppercase leading-[0.98] tracking-[-0.04em] text-[#fff4d3] md:text-[76px]">
          <LocalizedTextView value={title} />
        </h2>
        <p className="mx-auto mt-[24px] max-w-[640px] text-[17px] leading-[1.76] text-[#f1d6a1] md:text-[19px]">
          <LocalizedTextView value={copy} />
        </p>
        <div className="mt-[36px] flex flex-wrap justify-center gap-[14px]">
          <PremiumButton href={primaryHref}>
            <LocalizedTextView value={primaryLabel} />
          </PremiumButton>
          {secondaryHref && secondaryLabel ? (
            <PremiumButton href={secondaryHref} variant="outline">
              <LocalizedTextView value={secondaryLabel} />
            </PremiumButton>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
