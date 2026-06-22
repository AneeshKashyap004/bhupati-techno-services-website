import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { localBusinessSchema, site } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bhupati Techno Services | IT Infrastructure & Cybersecurity Services Bangalore",
    template: "%s | Bhupati Techno Services",
  },
  description:
    "Bhupati Techno Services delivers enterprise IT infrastructure, cybersecurity, managed IT, cloud solutions, and IT consulting in Bangalore for resilient digital operations.",
  keywords: [
    "IT Infrastructure Services Bangalore",
    "Cybersecurity Services Bangalore",
    "Managed IT Services Bangalore",
    "Cloud Solutions Bangalore",
    "IT Consulting Bangalore",
    "Bhupati Techno Services",
    "enterprise IT services Bengaluru",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  icons: {
    icon: site.logos.logo,
    apple: site.logos.logo,
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    title: "Bhupati Techno Services | Enterprise IT Services Bangalore",
    description:
      "Enterprise technology built on strength and driven by innovation. IT infrastructure, cybersecurity, cloud, and managed services.",
    images: [
      {
        url: site.logos.logo,
        width: 1024,
        height: 1024,
        alt: `${site.name} — IT infrastructure and cybersecurity services in Bangalore`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupati Techno Services",
    description: "Enterprise IT infrastructure, cybersecurity, and cloud services in Bangalore.",
    images: [site.logos.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={[localBusinessSchema, organizationSchema, websiteSchema]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
