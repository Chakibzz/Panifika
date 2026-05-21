export type LocalizedText = {
  fr: string;
  en: string;
};

export function tx(fr: string, en: string): LocalizedText {
  return { fr, en };
}
