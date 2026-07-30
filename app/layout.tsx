import type { Metadata } from "next";
import { Instrument_Serif, Inter, Inter_Tight } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "USAEBO",
    template: "%s | USAEBO",
  },
  description: site.description,
  openGraph: {
    title: "USAEBO",
    description: site.description,
    url: site.url,
    siteName: "USAEBO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "USAEBO",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable}`} lang="en">
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
