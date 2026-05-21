import Image from "next/image";
import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Exhibition", "/exhibition"],
  ["Exhibitors", "/exhibitors"],
  ["Visitors", "/visitors"],
  ["Conferences", "/conferences"],
  ["Gallery", "/gallery"],
  ["News", "/news"],
  ["Partners", "/partners"],
  ["Contact", "/contact"]
];

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-[18px] pt-[16px] md:px-[44px] md:pt-[26px]">
      <nav className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between rounded-[999px] border border-[#f3ad16]/25 bg-[#120c08]/72 px-[18px] shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-[18px] md:h-[78px] md:px-[28px]">
        <Link href="/" className="flex items-center gap-[13px]" aria-label="PANIFIKA EXPO home">
          <span className="relative h-[42px] w-[116px] overflow-hidden rounded-[4px] bg-[#fffdf6] md:h-[48px] md:w-[136px]">
            <Image src="/assets/panifika-logo.png" alt="PANIFIKA EXPO" fill className="object-contain" priority />
          </span>
        </Link>
        <div className="hidden items-center gap-[11px] text-[9px] font-semibold uppercase tracking-[0.13em] text-[#f5dfb6] lg:flex xl:gap-[17px] xl:text-[10px]">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition duration-300 hover:text-[#f3ad16]">
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/registration"
          className="rounded-[999px] bg-[#f3ad16] px-[18px] py-[12px] text-[11px] font-black uppercase tracking-[0.16em] text-[#4b0f0b] shadow-[0_0_34px_rgba(243,173,22,0.28)] transition duration-300 hover:bg-[#ffd565] md:px-[24px]"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
