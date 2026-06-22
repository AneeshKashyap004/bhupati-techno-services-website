"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, Database, MonitorDot, Server, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { architectureFlow, partners, socMetrics, stats } from "@/data/site";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";

const flowIcons = [Users, Server, ShieldCheck, Database, ArrowRight, MonitorDot, Activity];

export function StatsCounter() {
  return (
    <section className="-mt-8 bg-white py-12">
      <div className="container-enterprise">
        <Stagger className="grid items-stretch gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-4" stagger={0.07}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="rounded-lg bg-brand-light p-6">
              <p className="font-heading text-3xl font-extrabold text-brand-navy">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 ? 1 : 0} />
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-gray">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function TechnologyPartners() {
  const loop = [...partners, ...partners];
  return (
    <section className="overflow-hidden bg-brand-light py-16">
      <div className="container-enterprise">
        <SectionHeader
          eyebrow="Technology Partners"
          title="Built around trusted enterprise ecosystems."
          description="Bhupati Techno Services works across mature vendor platforms to design, secure, and operate modern IT estates."
          align="center"
        />
      </div>
      <div className="mt-10 border-y border-slate-200 bg-white/80 py-6">
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="grid h-20 w-44 place-items-center rounded-xl border border-slate-200 bg-white font-heading text-lg font-extrabold text-brand-dark shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-soft"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InfrastructureFlow() {
  return (
    <section className="bg-white py-20">
      <div className="container-enterprise">
        <SectionHeader
          eyebrow="Infrastructure Architecture"
          title="Clear flow from user access to SOC visibility."
          description="A strong infrastructure foundation behaves like a disciplined operating system for the business: every layer is visible, governed, and protected."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-7">
          {architectureFlow.map((item, index) => {
            const Icon = flowIcons[index];
            return (
              <Reveal key={item} delay={index * 0.05}>
                <div className="relative rounded-lg border border-slate-200 bg-brand-light p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-navy shadow-sm">
                    <Icon aria-hidden />
                  </div>
                  <p className="font-heading font-extrabold text-brand-dark">{item}</p>
                  <span
                    className="absolute left-5 top-1 h-1 w-16 origin-left rounded-full bg-brand-orange/70 animate-pulseLine"
                    style={{ animationDelay: `${index * 0.18}s` }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SocDashboard() {
  return (
    <section className="bg-enterprise-gradient py-20 text-white">
      <div className="container-enterprise grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Cybersecurity Operations</p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-5xl">
            Security reporting that executives can actually use.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Monitor threats, availability, response, and system posture through a sober SOC-style dashboard built for
            decisions, not drama.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {socMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <div className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-white/65">{metric.label}</p>
                <p className="mt-4 font-heading text-4xl font-extrabold">
                  <Counter value={metric.value} suffix={metric.suffix} decimals={metric.value % 1 ? 1 : 0} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudySection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="container-enterprise grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeader
          eyebrow="Client Success"
          title="From unstable branches to governed operations."
          description="A representative engagement for a multi-location business facing downtime, support delays, and weak visibility."
        />
        <Reveal>
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["42%", "reduction in recurring support tickets"],
                ["99.9%", "availability target established"],
                ["30 days", "to operational reporting cadence"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-brand-light p-5">
                  <p className="font-heading text-3xl font-extrabold text-brand-navy">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-brand-gray">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 grid gap-4 text-sm leading-7 text-brand-gray md:grid-cols-3">
              <p><strong className="text-brand-dark">Challenge:</strong> Fragmented network support and inconsistent branch uptime.</p>
              <p><strong className="text-brand-dark">Action:</strong> Standardized firewall, monitoring, patching, and escalation workflows.</p>
              <p><strong className="text-brand-dark">Outcome:</strong> Better visibility, faster response, and board-ready service reporting.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustIndicators() {
  return (
    <section className="bg-white py-16">
      <div className="container-enterprise">
        <Stagger className="grid items-stretch gap-4 md:grid-cols-4" stagger={0.08}>
          {["SLA-led delivery", "Security-first architecture", "Vendor ecosystem expertise", "Executive reporting"].map((item) => (
            <StaggerItem key={item}>
              <div className="premium-card flex h-full min-h-[5.5rem] items-center gap-3 rounded-xl p-5 shadow-sm">
                <CheckCircle2 className="shrink-0 text-brand-orange" aria-hidden />
                <p className="font-bold leading-snug text-brand-dark">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="bg-white py-20">
      <Reveal>
        <div className="container-enterprise overflow-hidden rounded-xl bg-enterprise-gradient p-8 text-white shadow-soft md:p-12">
          <div className="hero-orb hero-orb-orange right-0 top-0 h-56 w-56 opacity-30" aria-hidden />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Get Started</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-5xl">Ready to strengthen your IT foundation?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                Contact Bhupati Techno Services for infrastructure, cybersecurity, cloud, or managed IT services in Bangalore.
              </p>
            </div>
            <Link className="button-ripple rounded-md bg-brand-orange px-6 py-4 text-center font-bold text-white shadow-soft" href="/contact">
              Start Consultation
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
