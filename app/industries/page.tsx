import { IndustriesGrid } from "@/components/CardGrids";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/data/images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Industries We Serve",
  description:
    "IT infrastructure, cybersecurity, cloud, and managed services for manufacturing, healthcare, retail, education, SMB, and enterprise organizations in Bangalore.",
  path: "/industries",
  keywords: ["industry IT solutions Bangalore", "healthcare IT services Bengaluru"],
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology support for industries where reliability matters."
        description="Infrastructure, security, and cloud services adapted to sector-specific operating models across Bangalore and Karnataka."
        imageSrc={images.hero.industries}
        imageAlt="Industry IT solutions across manufacturing, healthcare, and enterprise sectors"
      />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Industry Expertise"
            title="Infrastructure, security, and cloud services adapted to your operating model."
            description="Bhupati Techno Services supports teams that need stable systems, clear accountability, and secure growth."
            align="center"
          />
          <IndustriesGrid />
        </div>
      </section>
    </>
  );
}
