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
  title: "Centro de Ciencia Francisco José de Caldas",
  description: "Portafolio institucional en Next.js 15",
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
