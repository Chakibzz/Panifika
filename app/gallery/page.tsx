import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, SectionTitle } from "@/components/PremiumPrimitives";
import { tx } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Galerie | PANIFIKA EXPO",
  description: "Galerie photo premium de PANIFIKA EXPO."
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={tx("Galerie", "Gallery")} title={tx("L'univers visuel du salon des métiers de la pâte.", "Cinematic moments from the bakery salon.")} copy={tx("Découvrez les halls, les produits, les chefs, les stands, les visiteurs et les moments networking dans une galerie premium.", "Explore exhibition halls, bakery visuals, chefs, booths, visitors and networking moments through a premium visual gallery.")} image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow={tx("Photos", "Photos")} title={tx("Lumière chaude, savoir-faire et business international.", "Warm light, craft and international business.")} />
          <div className="mt-[42px]">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
