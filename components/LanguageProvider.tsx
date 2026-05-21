"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "fr" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const dictionary: Record<Language, Record<string, string>> = {
  fr: {
    "nav.exhibition": "Salon",
    "nav.exhibitors": "Exposants",
    "nav.visitors": "Visiteurs",
    "nav.conferences": "Conférences",
    "nav.more": "Plus",
    "nav.overview": "Vue d'ensemble",
    "nav.practical": "Infos pratiques",
    "nav.brochure": "Brochure",
    "nav.directory": "Annuaire",
    "nav.whyExhibit": "Pourquoi exposer",
    "nav.profile": "Profil",
    "nav.marketing": "Marketing",
    "nav.bookStand": "Réserver un stand",
    "nav.whyVisit": "Pourquoi visiter",
    "nav.activities": "Activités",
    "nav.registration": "Inscription",
    "nav.program": "Programme",
    "nav.workshops": "Ateliers",
    "nav.becomeSpeaker": "Devenir intervenant",
    "nav.about": "À propos",
    "nav.gallery": "Galerie",
    "nav.news": "Actualités",
    "nav.partners": "Partenaires",
    "nav.sponsorship": "Sponsoring",
    "nav.contact": "Contact",
    "nav.mainPage": "page principale",
    "nav.register": "S'inscrire",
    "nav.openMenu": "Ouvrir le menu",
    "footer.firstEdition": "Première édition prévue fin 2027",
    "footer.tagline": "La pâte dans tous ses états",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.admin": "Admin",
    "form.fullName": "Nom complet",
    "form.firstName": "Prénom",
    "form.lastName": "Nom",
    "form.email": "Email",
    "form.company": "Entreprise",
    "form.phone": "Téléphone",
    "form.message": "Message",
    "form.submit": "Envoyer",
    "form.requestBrochure": "Demander la brochure",
    "form.submitRegistration": "Envoyer l'inscription",
    "stand.surface": "Surface du stand",
    "stand.surfaceHelp": "Choisissez une surface pour afficher les emplacements disponibles correspondants.",
    "stand.available": "disponibles",
    "stand.mainAisle": "Allée principale",
    "stand.selected": "Sélectionné",
    "stand.availableMatch": "Disponible pour cette surface",
    "stand.heldBooked": "Réservé / en option"
  },
  en: {
    "nav.exhibition": "Exhibition",
    "nav.exhibitors": "Exhibitors",
    "nav.visitors": "Visitors",
    "nav.conferences": "Conferences",
    "nav.more": "More",
    "nav.overview": "Overview",
    "nav.practical": "Practical info",
    "nav.brochure": "Brochure",
    "nav.directory": "Directory",
    "nav.whyExhibit": "Why exhibit",
    "nav.profile": "Profile",
    "nav.marketing": "Marketing",
    "nav.bookStand": "Book a stand",
    "nav.whyVisit": "Why visit",
    "nav.activities": "Activities",
    "nav.registration": "Registration",
    "nav.program": "Program",
    "nav.workshops": "Workshops",
    "nav.becomeSpeaker": "Become a speaker",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.news": "News",
    "nav.partners": "Partners",
    "nav.sponsorship": "Sponsorship",
    "nav.contact": "Contact",
    "nav.mainPage": "main page",
    "nav.register": "Register",
    "nav.openMenu": "Open menu",
    "footer.firstEdition": "First edition scheduled for late 2027",
    "footer.tagline": "Dough in all its forms",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.admin": "Admin",
    "form.fullName": "Full name",
    "form.firstName": "First name",
    "form.lastName": "Last name",
    "form.email": "Email",
    "form.company": "Company",
    "form.phone": "Phone",
    "form.message": "Message",
    "form.submit": "Submit",
    "form.requestBrochure": "Request brochure",
    "form.submitRegistration": "Submit registration",
    "stand.surface": "Stand surface",
    "stand.surfaceHelp": "Choose a surface to highlight matching available spaces.",
    "stand.available": "available",
    "stand.mainAisle": "Main aisle",
    "stand.selected": "Selected",
    "stand.availableMatch": "Available match",
    "stand.heldBooked": "Held/booked"
  }
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem("panifika-language");
    if (saved === "fr" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage(nextLanguage) {
        setLanguageState(nextLanguage);
        window.localStorage.setItem("panifika-language", nextLanguage);
        document.documentElement.lang = nextLanguage;
      },
      t(key) {
        return dictionary[language][key] || dictionary.en[key] || key;
      }
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  const [fallbackLanguage, setFallbackLanguage] = useState<Language>("fr");

  useEffect(() => {
    if (context) {
      return;
    }

    const saved = window.localStorage.getItem("panifika-language");
    if (saved === "fr" || saved === "en") {
      setFallbackLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, [context]);

  if (context) {
    return context;
  }

  return {
    language: fallbackLanguage,
    setLanguage(nextLanguage: Language) {
      setFallbackLanguage(nextLanguage);
      window.localStorage.setItem("panifika-language", nextLanguage);
      document.documentElement.lang = nextLanguage;
    },
    t(key: string) {
      return dictionary[fallbackLanguage][key] || dictionary.en[key] || key;
    }
  };
}
