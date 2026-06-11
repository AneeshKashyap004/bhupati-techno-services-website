import type { Metadata } from "next";
import { IndustryCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { industries } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "IT infrastructure, cybersecurity, cloud, and managed services for manufacturing, healthcare, retail, education, SMB, and enterprise organizations.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-enterprise-gradient pt-32 text-white">
        <div className="container-enterprise py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Industries</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-extrabold leading-tight md:text-7xl">
            Technology support for industries where reliability matters.
          </h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Industry Expertise"
            title="Infrastructure, security, and cloud services adapted to your operating model."
            description="Bhupati Techno Services supports teams that need stable systems, clear accountability, and secure growth."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
