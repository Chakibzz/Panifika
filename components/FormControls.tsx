"use client";

import type { LocalizedValue } from "./LocalizedText";
import { LocalizedTextView } from "./LocalizedText";
import { useLanguage } from "./LanguageProvider";

type InputProps = {
  label: LocalizedValue;
  placeholder: LocalizedValue;
  name?: string;
  type?: string;
  required?: boolean;
};

type SelectProps = {
  label: LocalizedValue;
  name?: string;
  options: LocalizedValue[];
  required?: boolean;
};

function resolveLocalized(value: LocalizedValue, language: "fr" | "en") {
  if (value && typeof value === "object" && "fr" in value && "en" in value) {
    return value[language];
  }

  return String(value ?? "");
}

export function PremiumInput({ label, placeholder, name, type = "text", required }: InputProps) {
  const { language } = useLanguage();

  return (
    <label className="block">
      <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]"><LocalizedTextView value={label} /></span>
      <input
        name={name}
        type={type}
        placeholder={resolveLocalized(placeholder, language)}
        required={required}
        className="h-[56px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 px-[17px] text-[15px] text-[#fff4d3] outline-none transition placeholder:text-[#a58251] focus:border-[#f3ad16]/68 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]"
      />
    </label>
  );
}

export function PremiumSelect({ label, name, options, required }: SelectProps) {
  const { language } = useLanguage();

  return (
    <label className="block">
      <span className="mb-[9px] block text-[10px] font-black uppercase tracking-[0.18em] text-[#f3ad16]"><LocalizedTextView value={label} /></span>
      <select
        name={name}
        required={required}
        className="h-[56px] w-full rounded-[16px] border border-[#f3ad16]/24 bg-[#120c08]/68 px-[17px] text-[15px] text-[#fff4d3] outline-none transition focus:border-[#f3ad16]/68 focus:shadow-[0_0_28px_rgba(243,173,22,0.14)]"
      >
        {options.map((option) => {
          const labelText = resolveLocalized(option, language);

          return <option key={labelText}>{labelText}</option>;
        })}
      </select>
    </label>
  );
}
