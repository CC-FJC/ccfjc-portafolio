import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Fuentes self-hosteadas (src/app/fonts): el build no depende de Google Fonts */

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
});

const interDisplay = localFont({
  src: [
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-headings",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
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
