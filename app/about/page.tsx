import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Motion";
import { timeline, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Bhupati Techno Services, an enterprise IT infrastructure, cybersecurity, cloud, and managed services partner in Bangalore.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-enterprise-gradient pt-32 text-white">
        <div className="container-enterprise py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">About Us</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-extrabold leading-tight md:text-7xl">
            Strong foundations for businesses that need technology they can trust.
          </h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-enterprise grid gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Company Story"
            title="Bhupati Techno Services exists to make enterprise technology dependable."
            description="We support organizations through infrastructure management, cybersecurity, cloud services, managed IT operations, consulting, and network implementation. The elephant in our brand is intentional: it signals strength, memory, intelligence, and reliable partnership."
          />
          <div className="grid gap-5">
            <Reveal>
              <div className="rounded-lg border border-slate-200 bg-brand-light p-6">
                <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Mission</h2>
                <p className="mt-3 leading-8 text-brand-gray">
                  To help businesses secure, manage, and scale technology foundations with practical strategy and disciplined execution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Vision</h2>
                <p className="mt-3 leading-8 text-brand-gray">
                  To become a trusted enterprise technology partner for resilient digital transformation across India.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Core Values" title="Values shaped by the elephant symbol." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="rounded-lg border border-slate-200 bg-white p-6 text-center font-bold text-brand-dark shadow-sm">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Leadership" title="Experienced technology leadership with hands-on operating discipline." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Managing Director", "Head of Infrastructure", "Security & Cloud Lead"].map((role) => (
              <div key={role} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 h-24 w-24 rounded-lg bg-light-radial" />
                <h3 className="font-heading text-xl font-extrabold text-brand-dark">{role}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-gray">
                  Leadership profile placeholder for enterprise credentials, certifications, and client experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader eyebrow="Timeline" title="A steady evolution toward enterprise-grade services." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-extrabold text-brand-orange">{item.year}</p>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-gray">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
