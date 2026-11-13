import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/site";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.descriptor} — ${site.tagline}`,
    template: `%s | ${site.name} ${site.descriptor}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} ${site.descriptor}`,
    description: site.description,
    type: "website",
    locale: "en_KE",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1730",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
