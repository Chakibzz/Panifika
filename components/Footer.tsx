import Link from "next/link";

const footerLinks = [
  ["Exhibition", "/exhibition"],
  ["Exhibitors", "/exhibitors"],
  ["Visitors", "/visitors"],
  ["Registration", "/registration"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="border-t border-[#f3ad16]/18 bg-[#0c0705] px-[22px] py-[34px] md:px-[48px]">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-[22px] text-[11px] font-bold uppercase tracking-[0.18em] text-[#b9945e] md:flex-row md:items-center">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[#ffd565]">PANIFIKA EXPO</span>
          <span>La pate dans tous ses etats</span>
        </div>
        <div className="flex flex-wrap gap-[18px]">
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#f3ad16]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
