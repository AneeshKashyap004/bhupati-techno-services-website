import { AboutStorySection, LeadershipSection, TimelineSection, ValuesSection } from "@/components/AboutSections";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/data/images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Bhupati Techno Services — an enterprise IT infrastructure, cybersecurity, cloud, and managed services partner based in Ganganagar, Bangalore.",
  path: "/about",
  keywords: ["about Bhupati Techno Services", "IT company Bangalore"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Strong foundations for businesses that need technology they can trust."
        description="Enterprise IT partner in Bangalore delivering infrastructure, security, cloud, and managed services with long-term accountability."
        imageSrc={images.hero.about}
        imageAlt="Bhupati Techno Services enterprise technology team"
      />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <AboutStorySection />
        </div>
      </section>
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Core Values" title="Values shaped by the elephant symbol." align="center" />
          <ValuesSection />
        </div>
      </section>
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Leadership" title="Experienced technology leadership with hands-on operating discipline." />
          <LeadershipSection />
        </div>
      </section>
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Timeline" title="A steady evolution toward enterprise-grade services." align="center" />
          <TimelineSection />
        </div>
      </section>
    </>
  );
}
