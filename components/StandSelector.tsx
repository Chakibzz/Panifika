"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const surfaces = ["9 sqm", "12 sqm", "18 sqm", "24 sqm", "36 sqm", "Custom pavilion"];

const stands = [
  { code: "A01", surface: "9 sqm", status: "available", zone: "Ingredients" },
  { code: "A02", surface: "9 sqm", status: "available", zone: "Ingredients" },
  { code: "A03", surface: "12 sqm", status: "available", zone: "Bakery" },
  { code: "A04", surface: "12 sqm", status: "held", zone: "Bakery" },
  { code: "B01", surface: "18 sqm", status: "available", zone: "Equipment" },
  { code: "B02", surface: "18 sqm", status: "available", zone: "Equipment" },
  { code: "B03", surface: "24 sqm", status: "available", zone: "Equipment" },
  { code: "B04", surface: "24 sqm", status: "booked", zone: "Equipment" },
  { code: "C01", surface: "9 sqm", status: "available", zone: "Coffee" },
  { code: "C02", surface: "12 sqm", status: "available", zone: "Coffee" },
  { code: "C03", surface: "18 sqm", status: "held", zone: "Pastry" },
  { code: "C04", surface: "24 sqm", status: "available", zone: "Pastry" },
  { code: "D01", surface: "36 sqm", status: "available", zone: "Demo" },
  { code: "D02", surface: "36 sqm", status: "booked", zone: "Demo" },
  { code: "D03", surface: "Custom pavilion", status: "available", zone: "Flagship" },
  { code: "D04", surface: "Custom pavilion", status: "available", zone: "Flagship" }
];

export function StandSelector() {
  const [surface, setSurface] = useState("18 sqm");
  const [selectedStand, setSelectedStand] = useState("");
  const { t } = useLanguage();

  const availableForSurface = useMemo(
    () => stands.filter((stand) => stand.surface === surface && stand.status === "available"),
    [surface]
  );

  const selected = stands.find((stand) => stand.code === selectedStand);

  return (
    <div className="md:col-span-2">
      <input type="hidden" name="stand_option" value={surface} />
      <input type="hidden" name="preferred_stand" value={selectedStand} />
      <input type="hidden" name="preferred_zone" value={selected?.zone || ""} />

      <div className="rounded-[18px] border border-[#f3ad16]/24 bg-[#120c08]/58 p-[14px]">
        <div className="flex flex-col gap-[8px] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[14px] font-semibold tracking-[-0.01em] text-[#fff4d3]">
              {t("stand.surface")} <span className="text-[#ff5d45]">*</span>
            </p>
            <p className="mt-[5px] text-[12px] leading-[1.45] text-[#b9945e]">
              {t("stand.surfaceHelp")}
            </p>
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#f3ad16]">
            {availableForSurface.length} {t("stand.available")}
          </p>
        </div>

        <div className="mt-[14px] flex flex-wrap gap-[8px]">
          {surfaces.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setSurface(item);
                setSelectedStand("");
              }}
              className={`h-[38px] rounded-[8px] px-[11px] text-[10px] font-black uppercase tracking-[0.12em] transition ${
                surface === item ? "bg-[#f3ad16] text-[#4b2414]" : "border border-[#f3ad16]/24 text-[#f5dfb6] hover:bg-[#f3ad16]/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-[16px] rounded-[14px] border border-[#f3ad16]/16 bg-[#0f0805] p-[12px]">
          <div className="mb-[10px] grid grid-cols-[1fr_auto_1fr] items-center gap-[10px] text-center text-[10px] font-black uppercase tracking-[0.16em] text-[#9f8763]">
            <span>Hall A</span>
            <span className="rounded-[999px] border border-[#f3ad16]/24 px-[10px] py-[5px] text-[#f3ad16]">{t("stand.mainAisle")}</span>
            <span>Hall B</span>
          </div>

          <div className="grid grid-cols-4 gap-[8px]">
            {stands.map((stand) => {
              const matchesSurface = stand.surface === surface;
              const available = stand.status === "available";
              const selectedThis = selectedStand === stand.code;
              const dimmed = !matchesSurface || !available;

              return (
                <button
                  key={stand.code}
                  type="button"
                  disabled={!available}
                  onClick={() => {
                    setSurface(stand.surface);
                    setSelectedStand(stand.code);
                  }}
                  className={`min-h-[76px] rounded-[10px] border p-[8px] text-left transition ${
                    selectedThis
                      ? "border-[#ffd94a] bg-[#f3ad16] text-[#4b2414] shadow-[0_0_28px_rgba(243,173,22,0.28)]"
                      : matchesSurface && available
                        ? "border-[#f3ad16]/68 bg-[#f3ad16]/14 text-[#fff4d3] hover:bg-[#f3ad16]/22"
                        : available
                          ? "border-[#f3ad16]/18 bg-[#1b0f09] text-[#8f7653]"
                          : "cursor-not-allowed border-[#ffffff]/8 bg-[#ffffff]/[0.03] text-[#5d4b38]"
                  } ${dimmed && !selectedThis ? "opacity-55" : ""}`}
                >
                  <span className="block text-[15px] font-black uppercase leading-none">{stand.code}</span>
                  <span className="mt-[8px] block text-[10px] font-black uppercase tracking-[0.12em]">{stand.surface}</span>
                  <span className="mt-[6px] block text-[10px] font-bold">{stand.zone}</span>
                  <span className="mt-[8px] inline-flex rounded-[999px] bg-[#120c08]/30 px-[7px] py-[4px] text-[9px] font-black uppercase tracking-[0.1em]">
                    {stand.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-[12px] flex flex-wrap gap-[10px] text-[10px] font-black uppercase tracking-[0.12em] text-[#b9945e]">
          <span className="inline-flex items-center gap-[6px]">
            <i className="h-[10px] w-[10px] rounded-[2px] bg-[#f3ad16]" /> {t("stand.selected")}
          </span>
          <span className="inline-flex items-center gap-[6px]">
            <i className="h-[10px] w-[10px] rounded-[2px] bg-[#3a2718] ring-1 ring-[#f3ad16]/50" /> {t("stand.availableMatch")}
          </span>
          <span className="inline-flex items-center gap-[6px]">
            <i className="h-[10px] w-[10px] rounded-[2px] bg-[#ffffff]/10" /> {t("stand.heldBooked")}
          </span>
        </div>
      </div>
    </div>
  );
}
