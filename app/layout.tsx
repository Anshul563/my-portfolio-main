import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
import { Clarity } from "@/components/Clarity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshul Shakya | Full Stack Developer",
  description:
    "Personal portfolio of Anshul Shakya, a Full Stack Developer and BCA student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-gray-100 selection:bg-purple-500/30 selection:text-white`}
      >
        <Clarity />
        <Background />
        {children}
      </body>
    </html>
  );
}
