import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Akash Moses Guttedar — Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years at JPMorgan Chase. MS Computer Engineering @ Texas A&M. Specializing in distributed systems, microservices, IAM, and AI-integrated platforms. Available for US-based SWE roles on OPT.",
  keywords: [
    "Akash Moses Guttedar",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Microservices",
    "AWS",
    "JPMorgan Chase",
    "Texas A&M",
    "OPT",
  ],
  authors: [{ name: "Akash Moses Guttedar", url: "https://akashmoses.com" }],
  openGraph: {
    title: "Akash Moses Guttedar — Senior Software Engineer",
    description:
      "Senior SWE with 4+ years at JPMorgan Chase. Building distributed systems, secure microservices, and AI-integrated platforms.",
    url: "https://akashmoses.com",
    siteName: "Akash Moses Guttedar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Moses Guttedar — Senior Software Engineer",
    description:
      "Senior SWE with 4+ years at JPMorgan Chase. Building distributed systems & AI-integrated platforms.",
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
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
