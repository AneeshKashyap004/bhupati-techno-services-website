import type { Metadata } from "next";
import { site } from "@/data/site";

const defaultKeywords = [
  "IT Infrastructure Services Bangalore",
  "Cybersecurity Services Bangalore",
  "Managed IT Services Bangalore",
  "Cloud Solutions Bangalore",
  "IT Consulting Bangalore",
  "Bhupati Techno Services",
];

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      images: [
        {
          url: site.logos.logo,
          width: 1024,
          height: 1024,
          alt: `${site.name} — enterprise IT services in Bangalore`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [site.logos.logo],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logos.logo}`,
  image: `${site.url}${site.logos.logo}`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "MLA Layout, 50, 2nd Floor, 4th Main, Krishnappa Block, Ganganagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560032",
    addressCountry: "IN",
  },
  sameAs: [site.mapsUrl, site.whatsapp],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description:
    "Enterprise IT infrastructure, cybersecurity, cloud solutions, and managed IT services in Bangalore.",
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}${site.logos.logo}`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/services?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
