import type { Metadata } from "next";
import { League_Spartan, Libre_Baskerville } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nexawork - Reinvención Profesional",
  description: "Reencamina tu vida profesional. Descubre tu profesión digital ideal con acompañamiento personalizado de Carlos García Camiño.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
