import Link from "next/link";
import { LucideIcon } from "lucide-react";

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
    <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-soft">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-brand-light text-brand-navy">
        <Icon aria-hidden />
      </div>
      <h3 className="font-heading text-xl font-extrabold text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-gray">{summary}</p>
      <Link className="mt-6 inline-flex font-bold text-brand-orange hover:text-brand-navy" href={href}>
        Explore service
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
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-soft">
      <Icon className="mb-5 text-brand-orange" aria-hidden />
      <h3 className="font-heading text-lg font-extrabold text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-gray">{summary}</p>
    </article>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="rounded-lg border border-white/50 bg-white/80 p-7 shadow-glass backdrop-blur">
      <p className="text-lg leading-8 text-brand-ink">“{quote}”</p>
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
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">{category}</p>
      <h3 className="mt-4 font-heading text-xl font-extrabold leading-snug text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-gray">{description}</p>
      <Link className="mt-6 inline-flex font-bold text-brand-navy hover:text-brand-orange" href={href}>
        Read insight
      </Link>
    </article>
  );
}
