import type { Metadata } from "next";
import { Alegreya_Sans, Lato } from "next/font/google";
import "./globals.css";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-headings",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
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
    <html lang="es" className={`${alegreyaSans.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
