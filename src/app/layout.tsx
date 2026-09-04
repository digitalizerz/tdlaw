import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description:
    "T.D. Armstrong Law Firm, P.C. provides civil litigation, criminal defense, estate planning, family law, and personal injury representation in Houston, Texas.",
  openGraph: {
    title: `${site.legalName} – ${site.tagline}`,
    description:
      "Houston legal representation across civil litigation, criminal defense, estate planning, family law, and personal injury.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${inter.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <PageTransition />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
