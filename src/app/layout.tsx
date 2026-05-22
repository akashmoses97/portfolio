import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import meta from "@/data/site/metadata.json";
import profile from "@/data/site/profile.json";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: profile.name, url: meta.authorUrl }],
  openGraph: {
    title: meta.title,
    description: meta.openGraphDescription,
    url: meta.url,
    siteName: meta.siteName,
    locale: meta.locale,
    type: meta.type as "website",
  },
  twitter: {
    card: meta.twitterCard as "summary_large_image",
    title: meta.title,
    description: meta.twitterDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
