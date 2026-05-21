import type { Metadata } from "next";
import Image from "next/image";
import { LocalizedTextView } from "@/components/LocalizedText";
import { PageLayout } from "@/components/PageLayout";
import { CTASection, PageHero, PremiumCard, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Actualités | PANIFIKA EXPO",
  description: "Actualités PANIFIKA EXPO, tendances boulangerie et articles innovation."
};

const articles = [
  tx("Les fours industriels évoluent vers un meilleur pilotage énergétique", "Industrial ovens move toward smarter energy control"),
  tx("Les marques pâtisserie investissent dans l'expérience visiteur premium", "Pastry brands invest in premium visitor experiences"),
  tx("Café et boulangerie renforcent l'attractivité des salons professionnels", "Coffee and bakery concepts create stronger salon traffic"),
  tx("Les fournisseurs ingrédients mettent en avant l'innovation clean label", "Ingredient suppliers highlight clean-label innovation"),
  tx("La technologie pâte à pizza entre dans les boulangeries à fort volume", "Pizza dough technology enters high-volume bakeries"),
  tx("Paroles de chefs : technique, régularité et émotion", "Chef interviews: craft, consistency and emotion")
];

export default function NewsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Actualités et éditorial", "News and editorial")} title={tx("Tendances boulangerie avec une approche magazine premium.", "Bakery trends with a luxury magazine rhythm.")} copy={tx("Suivez les annonces du salon, les tendances métier, les interviews de chefs et les innovations de l'écosystème PANIFIKA EXPO.", "Read industry updates, event announcements, chef interviews and innovation stories from the PANIFIKA EXPO ecosystem.")} image="/assets/artisan-bread.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-[28px] lg:grid-cols-[1.15fr_0.85fr]">
            <article className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-[#f3ad16]/24 p-[10px] expo-glow">
              <Image src="/assets/expo-hall.png" alt="Article mis en avant" fill className="object-cover p-[10px]" sizes="(min-width: 1024px) 58vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/92 via-[#120c08]/16 to-transparent" />
              <div className="absolute bottom-[36px] left-[32px] right-[32px]">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f3ad16]"><LocalizedTextView value={tx("Article à la une", "Featured article")} /></p>
                <h2 className="mt-[12px] max-w-[760px] text-[43px] font-black uppercase leading-[1] text-[#fff4d3] md:text-[64px]">
                  <LocalizedTextView value={tx("Comment les salons boulangerie deviennent des scènes business immersives.", "How bakery exhibitions are becoming immersive business stages.")} />
                </h2>
              </div>
            </article>
            <div className="space-y-[14px]">
              <SectionTitle eyebrow={tx("Dernières nouvelles", "Latest")} title={tx("Mises à jour du salon.", "Updates from the salon.")} />
            </div>
          </div>
          <div className="mt-[38px] grid gap-[16px] md:grid-cols-3">
            {articles.map((article, index) => (
              <PremiumCard key={article.en}>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]">Article 0{index + 1}</p>
                <h3 className="mt-[12px] text-[23px] font-black uppercase leading-[1.08] text-[#fff4d3]"><LocalizedTextView value={article} /></h3>
                <p className="mt-[14px] text-[15px] leading-[1.7] text-[#d9bb82]"><LocalizedTextView value={tx("Analyse éditoriale pour les professionnels de la boulangerie, des équipements et du food service.", "Editorial insight for bakery, equipment and food service professionals.")} /></p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={tx("Suivez la conversation business boulangerie.", "Follow the bakery business conversation.")} copy={tx("Restez informé des annonces événement, intervenants et temps forts exposants.", "Stay connected with event updates, speaker announcements and exhibitor highlights.")} primaryHref="/registration" primaryLabel={tx("Enregistrer mon intérêt", "Register interest")} />
    </PageLayout>
  );
}
