import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { timeline, values } from "@/data/site";
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
      />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise grid gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Company Story"
            title="Bhupati Techno Services exists to make enterprise technology dependable."
            description="We support organizations through infrastructure management, cybersecurity, cloud services, managed IT operations, consulting, and network implementation. The elephant in our brand signals strength, memory, intelligence, and reliable partnership."
          />
          <div className="grid gap-5">
            <Reveal>
              <div className="premium-card rounded-xl bg-brand-light p-6 shadow-sm">
                <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Mission</h2>
                <p className="mt-3 leading-8 text-brand-gray">
                  To help businesses secure, manage, and scale technology foundations with practical strategy and disciplined execution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="premium-card rounded-xl bg-white p-6 shadow-sm">
                <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Vision</h2>
                <p className="mt-3 leading-8 text-brand-gray">
                  To become a trusted enterprise technology partner for resilient digital transformation across India.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Core Values" title="Values shaped by the elephant symbol." align="center" />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-4" stagger={0.07}>
            {values.map((value) => (
              <StaggerItem key={value}>
                <div className="premium-card rounded-xl bg-white p-6 text-center font-bold text-brand-dark shadow-sm">{value}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Leadership" title="Experienced technology leadership with hands-on operating discipline." />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {["Managing Director", "Head of Infrastructure", "Security & Cloud Lead"].map((role) => (
              <StaggerItem key={role}>
                <div className="premium-card rounded-xl bg-white p-7 shadow-sm">
                  <div className="mb-5 h-24 w-24 rounded-xl bg-light-radial" />
                  <h3 className="font-heading text-xl font-extrabold text-brand-dark">{role}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-gray">
                    Leadership profile placeholder for enterprise credentials, certifications, and client experience.
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Timeline" title="A steady evolution toward enterprise-grade services." align="center" />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-4" stagger={0.08}>
            {timeline.map((item) => (
              <StaggerItem key={item.year}>
                <div className="premium-card rounded-xl bg-white p-6 shadow-sm">
                  <p className="font-heading text-3xl font-extrabold text-brand-orange">{item.year}</p>
                  <h3 className="mt-4 font-heading text-xl font-extrabold text-brand-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-gray">{item.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
