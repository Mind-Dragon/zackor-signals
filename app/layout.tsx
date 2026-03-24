import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const BASE_URL = "https://zackor.news";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zackor Signals — AI Crypto Intelligence",
    template: "%s | Zackor Signals",
  },
  description:
    "AI-powered crypto and market intelligence newsletter. Twice-daily signal reports with impact ratings (⚡ to ⚡⚡⚡⚡). Bitcoin, Ethereum, AI agents. Noise filtered.",
  keywords: [
    "crypto newsletter",
    "AI crypto signals",
    "Bitcoin signals",
    "Ethereum newsletter",
    "AI agents news",
    "crypto market intelligence",
    "OpenClaw",
    "autonomous agents",
    "crypto briefing",
    "Zackor Signals",
  ],
  authors: [{ name: "Jefferson Nunn", url: "https://x.com/mindragon" }],
  creator: "Jefferson Nunn",
  publisher: "Zackor Signals",
  category: "Finance",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Zackor Signals",
    description: "AI · Crypto · Market Intelligence — twice daily, 8am & noon CT",
    type: "website",
    url: BASE_URL,
    siteName: "Zackor Signals",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindragon",
    creator: "@mindragon",
    title: "Zackor Signals — AI Crypto Intelligence",
    description: "AI · Crypto · Market Intelligence — twice daily, 8am & noon CT",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Zackor Signals",
      description: "AI Crypto Intelligence — twice-daily signal reports",
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/issues?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "NewsMediaOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "Zackor Signals",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.svg`,
        contentUrl: `${BASE_URL}/favicon.svg`,
      },
      sameAs: [
        "https://x.com/mindragon",
        "https://www.linkedin.com/in/jeffersonnunn/",
      ],
      description:
        "AI-curated crypto and market intelligence newsletter covering Bitcoin, Ethereum, AI agents, and autonomous systems",
      founder: {
        "@type": "Person",
        name: "Jefferson Nunn",
        sameAs: "https://x.com/mindragon",
      },
      publishingPrinciples: BASE_URL,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-zackor-bg text-zackor-text`}>
        {children}
      </body>
    </html>
  );
}
