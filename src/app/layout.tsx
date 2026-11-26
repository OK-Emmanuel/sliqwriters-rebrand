import type { Metadata } from "next";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://sliqwriters.com"),
  title: {
    default: "SLiQWriterS - copywriting, marketing, linkedin growth & coaching",
    template: "%s | SLiQWriterS",
  },
  description:
    "SLiQWriterS is a freelance writing, creative and branding agency, dedicated to offering you the very best of digital services.",
  openGraph: {
    type: "website",
    siteName: "SLiQWriterS",
    images: ["/images/brand.jpg"],
  },
  twitter: { card: "summary_large_image", images: ["/images/brand.jpg"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SLiQWriterS",
            url: process.env.SITE_URL || "https://sliqwriters.com",
            logo: "/images/logo.jpg",
            email: "hello@sliqwriters.com",
          }}
        />
      </body>
    </html>
  );
}
