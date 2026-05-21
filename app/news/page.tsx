import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "News | PANIFIKA EXPO",
  description: "PANIFIKA EXPO news, bakery trends and innovation articles."
};

const articles = [
  "Industrial ovens move toward smarter energy control",
  "Pastry brands invest in premium visitor experiences",
  "Coffee and bakery concepts create stronger salon traffic",
  "Ingredient suppliers highlight clean-label innovation",
  "Pizza dough technology enters high-volume bakeries",
  "Chef interviews: craft, consistency and emotion"
];

export default function NewsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="News and editorial" title="Bakery trends with a luxury magazine rhythm." copy="Read industry updates, event announcements, chef interviews and innovation stories from the PANIFIKA EXPO ecosystem." image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-[28px] lg:grid-cols-[1.15fr_0.85fr]">
            <article className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-[#f3ad16]/24 p-[10px] expo-glow">
              <Image src="/assets/expo-hall.png" alt="Featured article" fill className="object-cover p-[10px]" sizes="(min-width: 1024px) 58vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/92 via-[#120c08]/16 to-transparent" />
              <div className="absolute bottom-[36px] left-[32px] right-[32px]">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f3ad16]">Featured article</p>
                <h2 className="mt-[12px] max-w-[760px] text-[43px] font-black uppercase leading-[1] tracking-[-0.035em] text-[#fff4d3] md:text-[64px]">
                  How bakery exhibitions are becoming immersive business stages.
                </h2>
              </div>
            </article>
            <div className="space-y-[14px]">
              <SectionTitle eyebrow="Latest" title="Updates from the salon." />
            </div>
          </div>
          <div className="mt-[38px] grid gap-[16px] md:grid-cols-3">
            {articles.map((article, index) => (
              <PremiumCard key={article}>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]">Article 0{index + 1}</p>
                <h3 className="mt-[12px] text-[23px] font-black uppercase leading-[1.08] text-[#fff4d3]">{article}</h3>
                <p className="mt-[14px] text-[15px] leading-[1.7] text-[#d9bb82]">Editorial insight for bakery, equipment and food service professionals.</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Follow the bakery business conversation." copy="Stay connected with event updates, speaker announcements and exhibitor highlights." primaryHref="/registration" primaryLabel="Register interest" />
    </PageLayout>
  );
}
