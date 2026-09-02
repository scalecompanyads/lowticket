import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { DeferredVercel } from "@/components/DeferredVercel";
import { TrackingHead } from "@/components/TrackingHead";
import { hero } from "@/lib/content";
import "./globals.css";
import "./page.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Protocolo Cliente Todo Dia — Marketing Jurídico com Modelos Prontos",
  description:
    "Use scripts e estruturas prontas para organizar Instagram, Google e atendimento ao cliente sem precisar inventar tudo do zero.",
  openGraph: {
    title: "Protocolo Cliente Todo Dia — Marketing Jurídico com Modelos Prontos",
    description:
      "Organize o marketing jurídico do seu escritório com modelos prontos que mostram exatamente como aplicar cada etapa.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} antialiased`}>
      <head>
        <TrackingHead />
        {hero.poster.src ? (
          <link
            rel="preload"
            as="image"
            href={hero.poster.src}
            fetchPriority="high"
            type="image/webp"
          />
        ) : null}
      </head>
      <body className="scrap-page">
        {children}
        <DeferredVercel />
      </body>
    </html>
  );
}
