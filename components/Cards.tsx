"use client";

import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import Image from "next/image";

export function ServiceCard({
  title,
  summary,
  icon: Icon,
  href,
  image,
}: {
  title: string;
  summary: string;
  icon: LucideIcon;
  href: string;
  image?: string;
}) {
  return (
    <article className="premium-card flex h-full flex-col overflow-hidden rounded-xl shadow-sm">
      {image ? (
        <div className="image-frame relative aspect-[16/10] w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width:768px) 100vw, 400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
          <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-lg bg-white/95 text-brand-navy shadow-sm">
            <Icon aria-hidden size={20} />
          </div>
        </div>
      ) : (
        <div className="p-7 pb-0">
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-light to-white text-brand-navy shadow-sm">
            <Icon aria-hidden />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="min-h-[3.5rem] font-heading text-xl font-extrabold leading-snug text-brand-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-brand-gray">{summary}</p>
        <Link className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-brand-orange transition hover:gap-3 hover:text-brand-navy" href={href}>
          Explore service <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function IndustryCard({
  title,
  summary,
  icon: Icon,
  image,
}: {
  title: string;
  summary: string;
  icon: LucideIcon;
  image?: string;
}) {
  return (
    <article className="premium-card flex h-full flex-col overflow-hidden rounded-xl shadow-sm">
      {image ? (
        <div className="image-frame relative aspect-[16/10] w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width:768px) 100vw, 400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/55 to-transparent" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 inline-flex rounded-xl bg-brand-light p-3 text-brand-orange">
          <Icon aria-hidden />
        </div>
        <h3 className="min-h-[3rem] font-heading text-lg font-extrabold leading-snug text-brand-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-brand-gray">{summary}</p>
      </div>
    </article>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}) {
  return (
    <article className="premium-card flex h-full flex-col rounded-xl border-white/50 bg-white/90 p-7 shadow-glass backdrop-blur">
      <p className="flex-1 text-lg leading-8 text-brand-ink">"{quote}"</p>
      <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-5">
        {avatar ? (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-brand-orange/30">
            <Image src={avatar} alt={name} fill className="object-cover" sizes="48px" />
          </div>
        ) : null}
        <div>
          <p className="font-heading font-extrabold text-brand-dark">{name}</p>
          <p className="text-sm text-brand-gray">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function BlogCard({
  title,
  description,
  href,
  category,
  image,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
  image?: string;
}) {
  return (
    <article className="premium-card flex h-full flex-col overflow-hidden rounded-xl shadow-sm">
      {image ? (
        <div className="image-frame relative aspect-[16/10] w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width:768px) 100vw, 400px" />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange shadow-sm">
            {category}
          </span>
        </div>
      ) : (
        <p className="px-6 pt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">{category}</p>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="min-h-[4.5rem] font-heading text-xl font-extrabold leading-snug text-brand-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-brand-gray">{description}</p>
        <Link className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-brand-navy transition hover:gap-3 hover:text-brand-orange" href={href}>
          Read insight <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
