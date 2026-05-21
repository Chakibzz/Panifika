import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { PageLayout } from "@/components/PageLayout";
import { PageHero, SectionTitle } from "@/components/PremiumPrimitives";

export const metadata: Metadata = {
  title: "Gallery | PANIFIKA EXPO",
  description: "Cinematic photo gallery for PANIFIKA EXPO."
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Gallery" title="Cinematic moments from the bakery salon." copy="Explore exhibition halls, bakery visuals, chefs, booths, visitors and networking moments through a premium visual gallery." image="/assets/expo-hall.png" />
      <section className="bg-[#120c08] px-[22px] py-[82px] md:px-[48px] md:py-[124px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="Photos" title="Warm light, craft and international business." />
          <div className="mt-[42px]">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
