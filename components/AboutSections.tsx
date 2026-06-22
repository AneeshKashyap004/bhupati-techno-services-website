"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionImage } from "@/components/SectionImage";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { images } from "@/data/images";
import { timeline, values } from "@/data/site";

const leadershipRoles = ["Managing Director", "Head of Infrastructure", "Security & Cloud Lead"];

export function AboutStorySection() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <SectionHeader
        eyebrow="Company Story"
        title="Bhupati Techno Services exists to make enterprise technology dependable."
        description="We support organizations through infrastructure management, cybersecurity, cloud services, managed IT operations, consulting, and network implementation. The elephant in our brand signals strength, memory, intelligence, and reliable partnership."
      />
      <div className="grid gap-5">
        <SectionImage
          src={images.sections.aboutStory}
          alt="Bhupati Techno Services consulting with enterprise clients"
          aspect="video"
          overlay
        />
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
  );
}

export function LeadershipSection() {
  return (
    <Stagger className="mt-10 grid gap-5 md:grid-cols-3" stagger={0.08}>
      {leadershipRoles.map((role, index) => (
        <StaggerItem key={role}>
          <div className="premium-card overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="image-frame relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={images.leadership[index]}
                alt={role}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
            <div className="p-7">
              <h3 className="font-heading text-xl font-extrabold text-brand-dark">{role}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-gray">
                Leadership profile placeholder for enterprise credentials, certifications, and client experience.
              </p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ValuesSection() {
  return (
    <Stagger className="mt-10 grid gap-5 md:grid-cols-4" stagger={0.07}>
      {values.map((value) => (
        <StaggerItem key={value}>
          <div className="premium-card rounded-xl bg-white p-6 text-center font-bold text-brand-dark shadow-sm">{value}</div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function TimelineSection() {
  return (
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
  );
}
