import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120c08] text-[#fff6df]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
