import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { localBusinessSchema, site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bhupati Techno Services | IT Infrastructure & Cybersecurity Services Bangalore",
    template: "%s | Bhupati Techno Services",
  },
  description:
    "Enterprise IT infrastructure services, cybersecurity services, managed IT services, cloud solutions, and IT consulting in Bangalore.",
  keywords: [
    "IT Infrastructure Services Bangalore",
    "Cybersecurity Services Bangalore",
    "Managed IT Services Bangalore",
    "Cloud Solutions Bangalore",
    "IT Consulting Bangalore",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Bhupati Techno Services",
    description: "Enterprise technology built on strength and driven by innovation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
