"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const footerLinks = [
  ["nav.brochure", "/brochure"],
  ["nav.bookStand", "/book-stand"],
  ["nav.whyVisit", "/why-visit"],
  ["nav.program", "/conference-program"],
  ["nav.practical", "/practical-info"],
  ["nav.contact", "/contact"],
  ["footer.privacy", "/privacy-policy"],
  ["footer.terms", "/terms"],
  ["footer.admin", "/admin"]
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#f3ad16]/18 bg-[#0c0705] px-[22px] py-[34px] md:px-[48px]">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-[22px] text-[11px] font-bold uppercase tracking-[0.18em] text-[#b9945e] md:flex-row md:items-center">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[#ffd565]">PANIFIKA EXPO</span>
          <span>{t("footer.firstEdition")}</span>
          <span>{t("footer.tagline")}</span>
        </div>
        <div className="flex flex-wrap gap-[18px]">
          {footerLinks.map(([labelKey, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#f3ad16]">
              {t(labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
