import { tx } from "./i18n";

export const eventBasics = {
  edition: "Première édition",
  date: "fin 2027",
  venue: "Alger, Algérie",
  positioning: "Salon international de la boulangerie, pâtisserie, pizza, café et équipements alimentaires",
  tagline: "La pâte dans tous ses états"
};

export const targetStats = [
  { value: "2027", label: tx("Première édition", "First edition") },
  { value: "B2B", label: tx("Cible professionnelle", "Professional focus") },
  { value: "5", label: tx("Secteurs clés", "Core sectors") },
  { value: "Q4", label: tx("Période cible", "Target period") }
];

export const exhibitorSectors = [
  tx("Équipements boulangerie et pâtisserie", "Bakery and pastry equipment"),
  tx("Fours, pétrins et lignes de production", "Ovens, mixers and production lines"),
  tx("Ingrédients, farine, levure et améliorants", "Ingredients, flour, yeast and improvers"),
  tx("Chocolat, décoration et solutions dessert", "Chocolate, decoration and dessert solutions"),
  tx("Pizza, café et concepts hospitality", "Pizza, coffee and hospitality concepts"),
  tx("Packaging, réfrigération et agencement", "Packaging, refrigeration and shop fitting"),
  tx("Franchises, formation et services professionnels", "Franchises, training and professional services")
];

export const visitorProfiles = [
  tx("Propriétaires de boulangeries et pâtisseries", "Bakery and pastry owners"),
  tx("Acheteurs hôtels, restaurants et cafés", "Hotel, restaurant and cafe buyers"),
  tx("Distributeurs, grossistes et détaillants", "Distributors, wholesalers and retailers"),
  tx("Industriels agroalimentaires", "Industrial food manufacturers"),
  tx("Chefs, formateurs et écoles culinaires", "Chefs, trainers and culinary schools"),
  tx("Investisseurs et opérateurs franchise", "Investors and franchise operators"),
  tx("Presse, associations et invités institutionnels", "Press, associations and institutional guests")
];

export const launchTimeline = [
  { year: tx("Maintenant", "Now"), title: tx("Pré-lancement commercial", "Commercial pre-launch"), copy: tx("Les demandes de stand, discussions partenaires et qualifications exposants sont ouvertes.", "Stand interest, partner conversations and early exhibitor qualification are open.") },
  { year: tx("S1 2027", "2027 H1"), title: tx("Curation du programme", "Program curation"), copy: tx("Intervenants, ateliers, démonstrations et activations médias seront annoncés progressivement.", "Speakers, workshops, demonstrations and media activities will be announced progressively.") },
  { year: tx("S2 2027", "2027 H2"), title: tx("Inscription visiteurs", "Visitor registration"), copy: tx("Badges professionnels, planning de rendez-vous et informations pratiques seront mis en ligne.", "Professional visitor badges, meeting planning and practical access information go live.") },
  { year: tx("Fin 2027", "Late 2027"), title: tx("Première édition", "First edition"), copy: tx("PANIFIKA EXPO ouvre comme plateforme professionnelle dédiée au business de la boulangerie.", "PANIFIKA EXPO opens as a focused professional platform for bakery business.") }
];

export const conferenceTracks = [
  tx("Marché boulangerie et transformation retail", "Bakery market and retail transformation"),
  tx("Production industrielle, automatisation et contrôle qualité", "Industrial production, automation and quality control"),
  tx("Levain artisanal, viennoiserie et technique pâtissière", "Artisan sourdough, viennoiserie and pastry technique"),
  tx("Pizza, snacking et croissance food service", "Pizza, snacking and food service growth"),
  tx("Packaging, durabilité et chaîne du froid", "Packaging, sustainability and cold chain"),
  tx("Café, hospitality et expérience boutique", "Coffee, hospitality and store experience")
];

export const plannedActivities = [
  tx("Démonstrations boulangerie et pâtisserie en live", "Live bakery and pastry demonstrations"),
  tx("Sessions de lancement équipements", "Equipment launch sessions"),
  tx("Rendez-vous acheteurs et distributeurs", "Buyer and distributor meetings"),
  tx("Ateliers professionnels", "Professional workshops"),
  tx("Showcases chefs", "Chef showcases"),
  tx("Moments média et ouverture", "Media and opening moments")
];
