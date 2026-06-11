import Link from "next/link";
import { BlogCard, IndustryCard, ServiceCard, TestimonialCard } from "@/components/Cards";
import {
  CaseStudySection,
  ContactCta,
  InfrastructureFlow,
  SocDashboard,
  StatsCounter,
  TechnologyPartners,
  TrustIndicators,
} from "@/components/EnterpriseSections";
import { HeroNetwork } from "@/components/HeroNetwork";
import { Reveal } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { blogs, industries, services, site, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-enterprise-gradient pt-28 text-white">
        <HeroNetwork />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(216,106,39,0.22),transparent_25%),linear-gradient(90deg,rgba(14,40,82,0.95),rgba(14,40,82,0.65),rgba(14,40,82,0.3))]" />
        <div className="container-enterprise relative z-10 grid min-h-[calc(100vh-7rem)] items-start gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:py-16">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-100 backdrop-blur">
              IT Infrastructure | Cybersecurity | Cloud
            </p>
            <h1 className="font-heading text-5xl font-extrabold leading-[0.98] tracking-tight md:text-6xl xl:text-7xl">
              Enterprise Technology. Built on Strength. Driven by Innovation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Helping businesses secure, manage, and scale their IT infrastructure through cybersecurity, cloud, and
              managed services.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link className="button-ripple rounded-md bg-brand-orange px-7 py-4 text-center font-bold text-white shadow-soft" href={site.calendly}>
                Schedule Consultation
              </Link>
              <Link className="rounded-md border border-white/25 bg-white/10 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/18" href="/services">
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <div className="glass-panel ml-auto max-w-md rounded-lg p-6 text-brand-ink">
              <p className="font-heading text-2xl font-extrabold text-brand-dark">Strength in the foundation.</p>
              <p className="mt-3 text-sm leading-7 text-brand-gray">
                The elephant-inspired network visual represents stable architecture, connected intelligence, and
                long-term partnership without turning the brand into a cartoon.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Governed", "Secure", "Scalable", "Reliable"].map((item) => (
                  <span key={item} className="rounded-md bg-brand-light px-4 py-3 text-sm font-bold text-brand-navy">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <StatsCounter />
      <TrustIndicators />
      <section className="bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Services"
            title="Enterprise technology services for resilient operations."
            description="From core infrastructure to cloud, security, and managed services, every engagement is designed around reliability, visibility, and practical business outcomes."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} href={`/services#${service.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-light py-20">
        <div className="container-enterprise grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Why Bhupati"
            title="A technology partner built around strength, intelligence, and trust."
            description="Like the elephant in the brand, Bhupati Techno Services stands for stable foundations, thoughtful decisions, and partnerships that endure beyond the first implementation."
          />
          <div className="grid gap-4">
            {["Architecture before tooling", "Plain-language security posture", "Operational reporting cadence", "Long-term infrastructure stewardship"].map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-lg border border-slate-200 bg-white p-5 font-bold text-brand-dark shadow-sm">{item}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <TechnologyPartners />
      <section className="bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="Industries"
            title="Built for practical, high-trust operating environments."
            description="We support organizations where downtime, unmanaged risk, and poor visibility directly affect customers, teams, and revenue."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>
      <InfrastructureFlow />
      <SocDashboard />
      <CaseStudySection />
      <section className="bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Testimonials" title="Trusted by teams that value calm, capable IT operations." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Insights" title="SEO-ready technology guidance for growing businesses." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.href} {...blog} />
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
