import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
import { Syne } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krup Kantesariya - Design Engineer ",
  description: "Krup's Portfolio site.",
  icons: {
    icon: "/official/logo.svg",
  },
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Krup Kantesariya",
  ],
  openGraph: {
    title: "Krup's Portfolio",
    description: "Krup's Portfolio site.",
    url: "https://krupkantesariya-portfolio.vercel.app/",
    siteName: "Krup's Portfolio site",
    images: [
      {
        url: "https://krupkantesariya-portfolio.vercel.app/official/opengraph.png",
        width: 1200,
        height: 630,
        alt: "My OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krup's Portfolio",
    description: "Krup's Portfolio site.",
    images: [
      "https://krupkantesariya-portfolio.vercel.app/official/opengraph.png",
    ],
    creator: "@krupkantesariya",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <link
          rel="canonical"
          href="https://krupkantesariya-portfolio.vercel.app/"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Krup Kantesariya",
              url: "https://krupkantesariya-portfolio.vercel.app/",
              sameAs: [
                "https://github.com/krup003",
                "https://www.linkedin.com/in/krup-kantesariya-7851b625a/",
                "https://x.com/KrupKantesariya",
              ],
              jobTitle: "Fullstack Developer",
              image:
                "https://krupkantesariya-portfolio.vercel.app/official/opengraph.png",
            }),
          }}
        />
      </head>

      <link rel="icon" href="/logo.ico" />

      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
