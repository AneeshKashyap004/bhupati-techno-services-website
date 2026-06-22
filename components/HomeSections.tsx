"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroNetwork } from "@/components/HeroNetwork";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { images } from "@/data/images";
import { services, site } from "@/data/site";

export function ServicesList() {
  return (
    <div className="container-enterprise grid gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        const image = images.services[service.slug as keyof typeof images.services];
        return (
          <Reveal key={service.slug} delay={index * 0.04}>
            <article
              id={service.slug}
              className={`premium-card overflow-hidden rounded-xl shadow-sm ${
                index % 2 ? "bg-brand-light" : "bg-white"
              }`}
            >
              {image ? (
                <div className="image-frame relative aspect-[3/1] max-h-44 w-full overflow-hidden sm:max-h-48">
                  <Image src={image} alt={service.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 900px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 to-transparent" />
                </div>
              ) : null}
              <div className="flex flex-col gap-6 p-7">
                <div>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-navy shadow-sm">
                    <Icon aria-hidden />
                  </div>
                  <h2 className="font-heading text-3xl font-extrabold text-brand-dark">{service.title}</h2>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-gray">{service.summary}</p>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Inquiry about ${service.title}`)}&body=${encodeURIComponent(`Hi Bhupati Techno Services,\n\nI would like to discuss ${service.title}.\n\n`)}`}
                    className="button-ripple mt-6 inline-flex rounded-md bg-brand-orange px-6 py-3 font-bold text-white"
                  >
                    Discuss {service.title}
                  </a>
                </div>
                <div className="grid gap-5">
                  <div className="rounded-xl bg-white p-6">
                    <h3 className="font-heading text-xl font-extrabold text-brand-dark">Benefits</h3>
                    <ul className="mt-4 grid gap-3 text-brand-gray">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white p-6">
                    <h3 className="font-heading text-xl font-extrabold text-brand-dark">Use Cases</h3>
                    <ul className="mt-4 grid gap-3 text-brand-gray">
                      {service.useCases.map((useCase) => (
                        <li key={useCase}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="premium-hero relative min-h-screen overflow-hidden pt-28 text-white">
      <HeroNetwork />
      <div className="hero-orb hero-orb-orange -left-16 top-16 h-80 w-80" aria-hidden />
      <div className="hero-orb hero-orb-blue -right-10 top-1/4 h-96 w-96" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(216,106,39,0.22),transparent_25%),linear-gradient(90deg,rgba(14,40,82,0.95),rgba(14,40,82,0.65),rgba(14,40,82,0.3))]" />
      <div className="container-enterprise relative z-10 grid min-h-[calc(100vh-7rem)] items-start gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:py-16">
        <Reveal>
          <p className="eyebrow-pill mb-5">IT Infrastructure | Cybersecurity | Cloud</p>
          <h1 className="font-heading text-5xl font-extrabold leading-[0.98] tracking-tight md:text-6xl xl:text-7xl">
            <span className="gradient-text">Enterprise Technology.</span>
            <br />
            Built on Strength. Driven by Innovation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            Helping businesses secure, manage, and scale their IT infrastructure through cybersecurity, cloud, and
            managed services in Bangalore.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Link className="button-ripple rounded-md bg-brand-orange px-7 py-4 text-center font-bold text-white shadow-soft" href="/contact">
              Get In Touch
            </Link>
            <Link className="btn-outline-light rounded-md px-7 py-4 text-center font-bold text-white" href="/services">
              Explore Services
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="hidden lg:block">
          <div className="glass-panel relative ml-auto max-w-md overflow-hidden rounded-xl p-6 text-brand-ink">
            <div className="image-frame relative mb-5 aspect-[2/1] overflow-hidden rounded-lg">
              <Image src={images.brand.banner} alt="Bhupati Techno Services" fill className="object-cover" sizes="400px" />
            </div>
            <p className="font-heading text-2xl font-extrabold text-brand-dark">Strength in the foundation.</p>
            <p className="mt-3 text-sm leading-7 text-brand-gray">
              Stable architecture, connected intelligence, and long-term partnership for enterprise teams across
              Bangalore.
            </p>
            <Stagger className="mt-6 grid grid-cols-2 gap-3" stagger={0.06}>
              {["Governed", "Secure", "Scalable", "Reliable"].map((item) => (
                <StaggerItem key={item}>
                  <span className="block rounded-md bg-brand-light px-4 py-3 text-sm font-bold text-brand-navy">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ValuePoints() {
  const items = [
    "Architecture before tooling",
    "Plain-language security posture",
    "Operational reporting cadence",
    "Long-term infrastructure stewardship",
  ];

  return (
    <Stagger className="grid gap-4" stagger={0.08}>
      {items.map((item) => (
        <StaggerItem key={item}>
          <div className="premium-card rounded-xl p-5 font-bold text-brand-dark shadow-sm">{item}</div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function WhyBhupatiSection() {
  return <ValuePoints />;
}
