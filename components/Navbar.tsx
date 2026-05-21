"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const navGroups = [
  {
    labelKey: "nav.exhibition",
    href: "/exhibition",
    links: [
      ["nav.overview", "/exhibition"],
      ["nav.practical", "/practical-info"],
      ["nav.brochure", "/brochure"]
    ]
  },
  {
    labelKey: "nav.exhibitors",
    href: "/exhibitors",
    links: [
      ["nav.directory", "/exhibitors"],
      ["nav.whyExhibit", "/why-exhibit"],
      ["nav.profile", "/exhibitor-profile"],
      ["nav.marketing", "/marketing-activities"],
      ["nav.bookStand", "/book-stand"]
    ]
  },
  {
    labelKey: "nav.visitors",
    href: "/visitors",
    links: [
      ["nav.whyVisit", "/why-visit"],
      ["nav.profile", "/visitor-profile"],
      ["nav.activities", "/activities"],
      ["nav.registration", "/registration"]
    ]
  },
  {
    labelKey: "nav.conferences",
    href: "/conferences",
    links: [
      ["nav.program", "/conference-program"],
      ["nav.workshops", "/workshops"],
      ["nav.becomeSpeaker", "/become-speaker"]
    ]
  },
  {
    labelKey: "nav.more",
    href: "/about",
    links: [
      ["nav.about", "/about"],
      ["nav.gallery", "/gallery"],
      ["nav.news", "/news"],
      ["nav.partners", "/partners"],
      ["nav.sponsorship", "/sponsorship"],
      ["nav.contact", "/contact"]
    ]
  }
];

export function Navbar() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-[18px] pt-[16px] md:px-[44px] md:pt-[26px]">
      <nav ref={navRef} className="mx-auto max-w-[1280px] rounded-[28px] border border-[#f3ad16]/25 bg-[#120c08]/82 px-[18px] shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-[18px] md:px-[28px] lg:rounded-[999px]">
        <div className="flex h-[68px] items-center justify-between md:h-[78px]">
          <Link href="/" className="flex items-center gap-[13px]" aria-label="PANIFIKA EXPO home" onClick={() => setOpenGroup(null)}>
            <span className="relative h-[46px] w-[154px] overflow-hidden rounded-[4px] bg-transparent md:h-[56px] md:w-[190px]">
              <Image src="/assets/panifika-logo.png" alt="PANIFIKA EXPO" fill className="object-contain" priority />
            </span>
          </Link>

          <div className="hidden items-center gap-[6px] text-[9px] font-semibold uppercase tracking-[0.13em] text-[#f5dfb6] lg:flex xl:gap-[10px] xl:text-[10px]">
            {navGroups.map((group) => {
              const isOpen = openGroup === group.labelKey;
              const label = t(group.labelKey);

              return (
                <div key={group.labelKey} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenGroup(isOpen ? null : group.labelKey)}
                    className={`inline-flex h-[40px] items-center gap-[5px] rounded-[999px] px-[11px] transition duration-200 ${
                      isOpen ? "bg-[#f3ad16]/14 text-[#ffd565]" : "hover:bg-[#f3ad16]/10 hover:text-[#f3ad16]"
                    }`}
                  >
                    {label}
                    <ChevronDown className={`h-[13px] w-[13px] transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen ? (
                    <div className="absolute left-1/2 top-[48px] z-50 w-[230px] -translate-x-1/2 rounded-[14px] border border-[#f3ad16]/24 bg-[#120c08]/98 p-[10px] opacity-100 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-[16px]">
                      <Link href={group.href} onClick={() => setOpenGroup(null)} className="mb-[6px] block rounded-[9px] bg-[#f3ad16]/10 px-[12px] py-[10px] text-[10px] tracking-[0.11em] text-[#ffd565] transition hover:bg-[#f3ad16]/16">
                        {label} {t("nav.mainPage")}
                      </Link>
                      {group.links.map(([labelKey, href]) => (
                        <Link key={href} href={href} onClick={() => setOpenGroup(null)} className="block rounded-[9px] px-[12px] py-[10px] text-[10px] tracking-[0.11em] text-[#f5dfb6] transition hover:bg-[#f3ad16]/12 hover:text-[#ffd565]">
                          {t(labelKey)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-[10px]">
            <Link
              href="/registration"
              className="hidden rounded-[999px] bg-[#e9a817] px-[18px] py-[12px] text-[11px] font-black uppercase tracking-[0.16em] text-[#4b2414] shadow-[0_0_34px_rgba(233,168,23,0.28)] transition duration-300 hover:bg-[#ffd94a] md:inline-flex md:px-[24px]"
            >
              {t("nav.register")}
            </Link>
            <div className="hidden rounded-full border border-[#f3ad16]/28 p-[3px] md:flex">
              {(["fr", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`h-[30px] rounded-full px-[10px] text-[10px] font-black uppercase tracking-[0.12em] transition ${
                    language === item ? "bg-[#f3ad16] text-[#4b2414]" : "text-[#f5dfb6] hover:bg-[#f3ad16]/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={t("nav.openMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#f3ad16]/32 text-[#ffd565] lg:hidden"
            >
              {mobileOpen ? <X className="h-[19px] w-[19px]" /> : <Menu className="h-[19px] w-[19px]" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-[#f3ad16]/16 py-[14px] lg:hidden">
            <div className="space-y-[8px]">
              {navGroups.map((group) => {
                const isOpen = openGroup === group.labelKey;
                const label = t(group.labelKey);

                return (
                  <div key={group.labelKey} className="rounded-[14px] border border-[#f3ad16]/16 bg-[#0f0805]/52">
                    <button
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.labelKey)}
                      className="flex w-full items-center justify-between px-[14px] py-[13px] text-left text-[11px] font-black uppercase tracking-[0.16em] text-[#f5dfb6]"
                    >
                      {label}
                      <ChevronDown className={`h-[15px] w-[15px] text-[#f3ad16] transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-[#f3ad16]/12 p-[8px]">
                        <Link href={group.href} onClick={() => setMobileOpen(false)} className="block rounded-[9px] bg-[#f3ad16]/10 px-[12px] py-[10px] text-[11px] font-bold text-[#ffd565]">
                          {label} {t("nav.mainPage")}
                        </Link>
                        {group.links.map(([labelKey, href]) => (
                          <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="mt-[4px] block rounded-[9px] px-[12px] py-[10px] text-[11px] font-bold text-[#e4c78e] hover:bg-[#f3ad16]/10">
                            {t(labelKey)}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <Link href="/registration" onClick={() => setMobileOpen(false)} className="flex h-[46px] items-center justify-center rounded-[999px] bg-[#f3ad16] text-[11px] font-black uppercase tracking-[0.16em] text-[#4b0f0b]">
                {t("nav.register")}
              </Link>
              <div className="grid grid-cols-2 gap-[8px]">
                {(["fr", "en"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={`h-[42px] rounded-[999px] text-[11px] font-black uppercase tracking-[0.14em] ${
                      language === item ? "bg-[#f3ad16] text-[#4b2414]" : "border border-[#f3ad16]/24 text-[#f5dfb6]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
