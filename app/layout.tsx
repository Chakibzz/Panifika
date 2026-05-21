import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANIFIKA EXPO | La pate dans tous ses etats",
  description: "Salon professionnel de la boulangerie, patisserie, pizza, cafe et equipements alimentaires.",
  icons: {
    icon: "/assets/panifika-logo.png",
    apple: "/assets/panifika-logo.png"
  },
  openGraph: {
    title: "PANIFIKA EXPO",
    description: "La pate dans tous ses etats.",
    images: ["/assets/panifika-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "PANIFIKA EXPO",
              description: "Salon professionnel de la boulangerie, patisserie, pizza, cafe et equipements alimentaires.",
              startDate: "2027-11",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Algiers, Algeria",
                address: "Algiers, Algeria"
              },
              organizer: {
                "@type": "Organization",
                name: "PANIFIKA EXPO"
              },
              image: "/assets/panifika-logo.png"
            })
          }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
