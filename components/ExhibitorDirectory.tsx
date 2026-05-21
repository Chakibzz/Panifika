"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["All", "Bakery", "Pastry", "Pizza", "Coffee", "Equipment", "Packaging"];

const exhibitors = [
  { name: "Bakery equipment", category: "Equipment", stand: "Opening soon", country: "Target sector" },
  { name: "Ingredients and flour", category: "Bakery", stand: "Opening soon", country: "Target sector" },
  { name: "Pastry and chocolate", category: "Pastry", stand: "Opening soon", country: "Target sector" },
  { name: "Pizza and snacking", category: "Pizza", stand: "Opening soon", country: "Target sector" },
  { name: "Coffee and hospitality", category: "Coffee", stand: "Opening soon", country: "Target sector" },
  { name: "Packaging solutions", category: "Packaging", stand: "Opening soon", country: "Target sector" }
];

export function ExhibitorDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      exhibitors.filter((exhibitor) => {
        const matchesCategory = category === "All" || exhibitor.category === category;
        const haystack = `${exhibitor.name} ${exhibitor.category} ${exhibitor.country}`.toLowerCase();
        return matchesCategory && haystack.includes(query.toLowerCase());
      }),
    [category, query]
  );

  return (
    <div>
      <div className="gold-line-frame mb-[30px] grid gap-[14px] rounded-[26px] bg-[#23130d]/82 p-[14px] md:grid-cols-[1fr_auto] md:p-[18px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-[18px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#f3ad16]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search exhibitors, countries, sectors"
            className="h-[58px] w-full rounded-[18px] border border-[#f3ad16]/18 bg-[#120c08]/72 pl-[50px] pr-[18px] text-[15px] text-[#fff4d3] outline-none placeholder:text-[#a58251] focus:border-[#f3ad16]/62"
          />
        </label>
        <div className="flex flex-wrap gap-[8px]">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`h-[58px] rounded-[18px] px-[15px] text-[10px] font-black uppercase tracking-[0.14em] transition ${
                category === item ? "bg-[#f3ad16] text-[#4b0f0b]" : "border border-[#f3ad16]/22 text-[#f5dfb6] hover:bg-[#f3ad16]/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-[16px] md:grid-cols-3">
        {filtered.map((exhibitor, index) => (
          <motion.article
            key={exhibitor.name}
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="group rounded-[24px] border border-[#f3ad16]/22 bg-[#23130d]/82 p-[22px] shadow-[0_24px_74px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-[4px] hover:border-[#f3ad16]/52"
          >
            <div className="mb-[24px] flex h-[76px] items-center justify-center rounded-[18px] bg-[#fff9ea] text-[24px] font-black tracking-[-0.04em] text-[#8e1712]">
              {exhibitor.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3ad16]">{exhibitor.category}</p>
            <h3 className="mt-[10px] text-[24px] font-black uppercase leading-[1.05] tracking-[-0.03em] text-[#fff4d3]">{exhibitor.name}</h3>
            <div className="mt-[18px] flex justify-between border-t border-[#f3ad16]/18 pt-[16px] text-[11px] font-black uppercase tracking-[0.14em] text-[#c9a66b]">
              <span>{exhibitor.stand}</span>
              <span>{exhibitor.country}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
