"use client";

import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export function ServiceCard({
  title,
  summary,
  icon: Icon,
  href,
}: {
  title: string;
  summary: string;
  icon: LucideIcon;
  href: string;
}) {
  return (
    <article className="premium-card flex h-full flex-col rounded-xl p-7 shadow-sm">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-light to-white text-brand-navy shadow-sm">
        <Icon aria-hidden />
      </div>
      <h3 className="min-h-[3.5rem] font-heading text-xl font-extrabold leading-snug text-brand-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-brand-gray">{summary}</p>
      <Link className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-brand-orange transition hover:gap-3 hover:text-brand-navy" href={href}>
        Explore service <ArrowUpRight size={16} aria-hidden />
      </Link>
    </article>
  );
}

export function IndustryCard({
  title,
  summary,
  icon: Icon,
}: {
  title: string;
  summary: string;
  icon: LucideIcon;
}) {
  return (
    <article className="premium-card flex h-full flex-col rounded-xl p-6 shadow-sm">
      <div className="mb-5 inline-flex rounded-xl bg-brand-light p-3 text-brand-orange">
        <Icon aria-hidden />
      </div>
      <h3 className="min-h-[3rem] font-heading text-lg font-extrabold leading-snug text-brand-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-brand-gray">{summary}</p>
    </article>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="premium-card flex h-full flex-col rounded-xl border-white/50 bg-white/90 p-7 shadow-glass backdrop-blur">
      <p className="flex-1 text-lg leading-8 text-brand-ink">"{quote}"</p>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="font-heading font-extrabold text-brand-dark">{name}</p>
        <p className="text-sm text-brand-gray">{role}</p>
      </div>
    </article>
  );
}

export function BlogCard({
  title,
  description,
  href,
  category,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
}) {
  return (
    <article className="premium-card flex h-full flex-col rounded-xl p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">{category}</p>
      <h3 className="mt-4 min-h-[4.5rem] font-heading text-xl font-extrabold leading-snug text-brand-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-brand-gray">{description}</p>
      <Link className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-brand-navy transition hover:gap-3 hover:text-brand-orange" href={href}>
        Read insight <ArrowUpRight size={16} aria-hidden />
      </Link>
    </article>
  );
}
