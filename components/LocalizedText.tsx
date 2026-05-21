"use client";

import type { ReactNode } from "react";
import type { LocalizedText } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export type LocalizedValue = ReactNode | LocalizedText;

function isLocalized(value: LocalizedValue): value is LocalizedText {
  return Boolean(value && typeof value === "object" && "fr" in value && "en" in value);
}

export function LocalizedTextView({ value }: { value: LocalizedValue }) {
  const { language } = useLanguage();

  if (isLocalized(value)) {
    return <span data-i18n-managed="true">{value[language]}</span>;
  }

  return <>{value}</>;
}
