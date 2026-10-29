import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import "./globals.css";

const allround = localFont({
  src: [
    { path: "../fonts/AllroundGothic-XLig.otf", weight: "200", style: "normal" },
    { path: "../fonts/AllroundGothic-XLigOblique.otf", weight: "200", style: "italic" },
    { path: "../fonts/AllroundGothic-Book.otf", weight: "400", style: "normal" },
    { path: "../fonts/Allroundgothic-bookoblique.otf", weight: "400", style: "italic" },
    { path: "../fonts/AllroundGothic-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/AllroundGothic-MediumOblique.otf", weight: "500", style: "italic" },
    { path: "../fonts/AllroundGothic-Demi.otf", weight: "600", style: "normal" },
    { path: "../fonts/Allroundgothic-demioblique.otf", weight: "600", style: "italic" },
    { path: "../fonts/AllroundGothic-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/AllroundGothic-BoldOblique.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-allround",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PRESENZE — Comunicación digital",
  description:
    "Equipo de comunicación digital. Branding, diseño web y social media, cerca de cada marca.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${allround.variable} h-full antialiased`}>
      <body className="min-h-full bg-surface font-sans text-ink">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-surface"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
