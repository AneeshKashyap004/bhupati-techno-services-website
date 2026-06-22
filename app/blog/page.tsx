import { BlogGrid } from "@/components/CardGrids";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog & Insights",
  description:
    "Expert insights on IT infrastructure, cybersecurity, managed IT services, cloud solutions, and IT consulting for Bangalore businesses.",
  path: "/blog",
  keywords: ["IT blog Bangalore", "cybersecurity tips Bengaluru"],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Enterprise technology insights for Bangalore businesses."
        description="Practical guidance on infrastructure, security, cloud, and managed operations for teams building resilient technology."
      />
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Insights"
            title="Search-ready technology guidance."
            description="Focused content around IT infrastructure, cybersecurity, managed IT, cloud, and consulting for growing organizations."
            align="center"
          />
          <BlogGrid />
        </div>
      </section>
    </>
  );
}
