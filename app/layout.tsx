import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Zackor Signals — AI Crypto Intelligence",
  description: "AI-powered crypto and market intelligence newsletter. Twice-daily signal reports with impact ratings. Noise filtered.",
  metadataBase: new URL("https://zackor.news"),
  openGraph: {
    title: "Zackor Signals",
    description: "AI · Crypto · Market Intelligence — twice daily, 8am & noon CT",
    type: "website",
    url: "https://zackor.news",
    siteName: "Zackor Signals",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindragon",
    creator: "@mindragon",
    title: "Zackor Signals — AI Crypto Intelligence",
    description: "AI · Crypto · Market Intelligence — twice daily, 8am & noon CT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans min-h-screen bg-zackor-bg text-zackor-text`}>
        {children}
      </body>
    </html>
  );
}
