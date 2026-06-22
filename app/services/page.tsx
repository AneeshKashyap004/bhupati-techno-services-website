import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServicesList } from "@/components/HomeSections";
import { images } from "@/data/images";
import { services, site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IT Services",
  description:
    "Infrastructure management, cybersecurity, cloud solutions, managed IT services, IT consulting, and network design services in Bangalore by Bhupati Techno Services.",
  path: "/services",
  keywords: ["network implementation Bangalore", "managed services provider Bengaluru"],
});

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      areaServed: "Bangalore",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <PageHero
        eyebrow="Services"
        title="Full-stack IT services for secure, scalable operations."
        description="Every service is designed to increase reliability, reduce operational risk, and support long-term digital transformation for Bangalore businesses."
        imageSrc={images.hero.services}
        imageAlt="Enterprise IT infrastructure and data center services"
      />
      <section className="section-shell bg-white py-20">
        <ServicesList />
      </section>
    </>
  );
}
