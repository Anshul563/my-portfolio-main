import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Clarity } from "@/components/Clarity";
import { Analytics } from "@vercel/analytics/next";
import Grainient from "@/components/Grainient";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Anshul Shakya | Full Stack Web Developer",
  description:
    "Freelance web developer building modern, conversion-focused websites that help businesses attract more leads, build trust, and increase sales. Available for freelance projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen bg-black text-gray-100 selection:bg-neon-purple/30 selection:text-white`}
      >
        <Clarity />
        <Navbar />
        <Grainient color1="#0a0a0a" color2="#1a0533" color3="#0a0a0f" />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
