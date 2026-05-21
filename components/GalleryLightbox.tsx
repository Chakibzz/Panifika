"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  src: string;
  title: string;
  tall?: boolean;
  kind?: "image" | "video";
};

const images: GalleryItem[] = [
  { src: "/assets/expo-hall.png", title: "Golden salon floor", tall: true },
  { src: "/assets/artisan-bread.png", title: "Artisan bread craft" },
  { src: "/assets/bakery-equipment.png", title: "Equipment pavilion", tall: true },
  { src: "/assets/placeholders/expo-placeholder-01.jpeg", title: "Placeholder expo booth", tall: true },
  { src: "/assets/placeholders/expo-placeholder-02.jpeg", title: "Placeholder illuminated stand" },
  { src: "/assets/placeholders/expo-placeholder-03.jpeg", title: "Placeholder meeting lounge", tall: true },
  { src: "/assets/placeholders/expo-placeholder-04.jpeg", title: "Placeholder corporate pavilion" },
  { src: "/assets/placeholders/expo-placeholder-05.jpeg", title: "Placeholder exhibition aisle", tall: true },
  { src: "/assets/placeholders/expo-placeholder-video-01.mp4", title: "Placeholder expo video 01", kind: "video" },
  { src: "/assets/placeholders/expo-placeholder-video-02.mp4", title: "Placeholder expo video 02", kind: "video" }
];

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="masonry-columns">
        {images.map((image, index) => (
          <button
            key={`${image.title}-${index}`}
            type="button"
            onClick={() => setActive(image)}
            className="group mb-[18px] block w-full overflow-hidden rounded-[24px] border border-[#f3ad16]/20 bg-[#23130d] p-[8px] text-left shadow-[0_24px_74px_rgba(0,0,0,0.3)]"
          >
            <span className={`relative block ${image.tall ? "aspect-[0.82]" : "aspect-[1.36]"} overflow-hidden rounded-[17px]`}>
              {image.kind === "video" ? (
                <video src={image.src} muted loop playsInline className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.055]" />
              ) : (
                <Image src={image.src} alt={image.title} fill className="object-cover transition duration-700 group-hover:scale-[1.055]" sizes="(min-width: 768px) 33vw, 100vw" />
              )}
              <span className="absolute inset-0 bg-gradient-to-t from-[#120c08]/78 via-transparent to-transparent" />
              {image.kind === "video" ? (
                <span className="absolute right-[16px] top-[16px] rounded-full bg-[#f3ad16] px-[12px] py-[8px] text-[10px] font-black uppercase tracking-[0.16em] text-[#4b0f0b]">
                  Video
                </span>
              ) : null}
              <span className="absolute bottom-[18px] left-[18px] text-[13px] font-black uppercase tracking-[0.14em] text-[#ffe3a3]">
                {image.title}
              </span>
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#080604]/88 p-[22px] backdrop-blur-[12px]">
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-[24px] top-[24px] rounded-full border border-[#f3ad16]/35 bg-[#120c08] p-[12px] text-[#ffd565]"
            aria-label="Close gallery image"
          >
            <X className="h-[22px] w-[22px]" />
          </button>
          <div className="relative h-[78vh] w-full max-w-[1120px] overflow-hidden rounded-[28px] border border-[#f3ad16]/28 bg-[#120c08] p-[8px] expo-glow">
            {active.kind === "video" ? (
              <video src={active.src} controls autoPlay className="h-full w-full rounded-[20px] object-contain" />
            ) : (
              <Image src={active.src} alt={active.title} fill className="object-contain p-[8px]" sizes="100vw" />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
