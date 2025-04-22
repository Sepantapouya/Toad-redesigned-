import type { Metadata } from "next";
import "./globals.css";
import { Mulish, Gabarito, Rubik_Distressed, Lilita_One } from "next/font/google";

const mulish = Mulish({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish"
});

const gabarito = Gabarito({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito"
});

const rubikDistressed = Rubik_Distressed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik-distressed"
});

// Use Lilita One from Google Fonts (a fun display font)
const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-okay-jelly" // Keep the same variable name for compatibility
});

export const metadata: Metadata = {
  title: "TOAD - Trustless On-Chain Autonomous Delegate",
  description: "AI-powered voting delegate system that revolutionizes DAO governance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.variable} ${gabarito.variable} ${rubikDistressed.variable} ${lilitaOne.variable} scroll-smooth overflow-x-hidden`}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
