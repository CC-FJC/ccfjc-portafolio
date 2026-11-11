import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const interDisplay = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-headings",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ccfjc-portafolio.vercel.app/"),
  title: "Centro de Ciencia Francisco José de Caldas",
  description:
    "Portafolio institucional del Centro de Ciencia Francisco José de Caldas",
  openGraph: {
    title: "Centro de Ciencia Francisco José de Caldas",
    description:
      "Portafolio institucional del Centro de Ciencia Francisco José de Caldas",
    url: "https://ccfjc-portafolio.vercel.app/",
    siteName: "Centro de Ciencia Francisco José de Caldas",
    images: [
      {
        url: "./Miniatura.png",
        width: 1200,
        height: 630,
        alt: "Miniatura del Centro de Ciencia Francisco José de Caldas",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${interDisplay.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
