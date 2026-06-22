import {
  CaseStudySection,
  ContactCta,
  InfrastructureFlow,
  SocDashboard,
  StatsCounter,
  TechnologyPartners,
  TrustIndicators,
} from "@/components/EnterpriseSections";
import { BlogGrid, IndustriesGrid, ServicesGrid, TestimonialsGrid } from "@/components/CardGrids";
import { HomeHero, ValuePoints } from "@/components/HomeSections";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Enterprise IT Infrastructure & Cybersecurity Services Bangalore",
  description:
    "Bhupati Techno Services helps Bangalore businesses secure, manage, and scale IT infrastructure with cybersecurity, cloud solutions, and managed IT services.",
  path: "/",
  keywords: ["enterprise IT partner Bangalore", "IT support Ganganagar Bengaluru"],
});

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsCounter />
      <TrustIndicators />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Services"
            title="Enterprise technology services for resilient operations."
            description="From core infrastructure to cloud, security, and managed services, every engagement is designed around reliability, visibility, and practical business outcomes."
            align="center"
          />
          <ServicesGrid />
        </div>
      </section>
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Why Bhupati"
            title="A technology partner built around strength, intelligence, and trust."
            description="Like the elephant in the brand, Bhupati Techno Services stands for stable foundations, thoughtful decisions, and partnerships that endure beyond the first implementation."
          />
          <ValuePoints />
        </div>
      </section>
      <TechnologyPartners />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Industries"
            title="Built for practical, high-trust operating environments."
            description="We support organizations where downtime, unmanaged risk, and poor visibility directly affect customers, teams, and revenue."
            align="center"
          />
          <IndustriesGrid />
        </div>
      </section>
      <InfrastructureFlow />
      <SocDashboard />
      <CaseStudySection />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Testimonials" title="Trusted by teams that value calm, capable IT operations." align="center" />
          <TestimonialsGrid />
        </div>
      </section>
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Insights" title="Technology guidance for growing Bangalore businesses." align="center" />
          <BlogGrid />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
