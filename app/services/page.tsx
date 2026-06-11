import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Infrastructure management, cybersecurity, cloud solutions, managed IT services, IT consulting, and network design services in Bangalore.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-enterprise-gradient pt-32 text-white">
        <div className="container-enterprise py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Services</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-extrabold leading-tight md:text-7xl">
            Full-stack IT services for secure, scalable operations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Every service is designed to increase reliability, reduce operational risk, and support long-term digital transformation.
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-enterprise grid gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                id={service.slug}
                key={service.slug}
                className={`grid gap-8 rounded-lg border border-slate-200 p-7 shadow-sm lg:grid-cols-[0.8fr_1.2fr] ${
                  index % 2 ? "bg-brand-light" : "bg-white"
                }`}
              >
                <div>
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-lg bg-white text-brand-navy shadow-sm">
                    <Icon aria-hidden />
                  </div>
                  <h2 className="font-heading text-3xl font-extrabold text-brand-dark">{service.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-brand-gray">{service.summary}</p>
                  <Link className="button-ripple mt-7 inline-flex rounded-md bg-brand-orange px-6 py-3 font-bold text-white" href={site.calendly}>
                    Discuss {service.title}
                  </Link>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-6">
                    <h3 className="font-heading text-xl font-extrabold text-brand-dark">Benefits</h3>
                    <ul className="mt-4 grid gap-3 text-brand-gray">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-white p-6">
                    <h3 className="font-heading text-xl font-extrabold text-brand-dark">Use Cases</h3>
                    <ul className="mt-4 grid gap-3 text-brand-gray">
                      {service.useCases.map((useCase) => (
                        <li key={useCase}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
