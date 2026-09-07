import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Clarity } from "@/components/Clarity";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anshulshakya.dev"),
  title: "Anshul Shakya | Full Stack Developer",
  description:
    "Full Stack Developer turning ideas into beautiful, functional and scalable web experiences. Building with React, Next.js, Node.js, and modern tooling.",
  keywords: [
    "Anshul Shakya",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Anshul Shakya | Full Stack Developer",
    description:
      "Full Stack Developer turning ideas into beautiful, functional and scalable web experiences.",
    type: "website",
    locale: "en_US",
    url: "https://anshulshakya.dev",
    siteName: "Anshul Shakya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul Shakya | Full Stack Developer",
    description:
      "Full Stack Developer turning ideas into beautiful, functional and scalable web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-[#050505] text-[#F5F5F5]`}
        style={{
          fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <Clarity />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
