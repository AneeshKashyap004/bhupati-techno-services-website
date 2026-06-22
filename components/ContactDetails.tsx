"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

const contactItems = [
  { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: site.location, href: site.mapsUrl, external: true },
  { icon: MessageCircle, label: "WhatsApp Consultation", href: site.whatsapp, external: true },
];

export function ContactDetails() {
  return (
    <div className="mt-8 grid gap-4">
      {contactItems.map(({ icon: Icon, label, href, external }) => {
        const className =
          "flex items-center gap-4 rounded-lg border border-slate-200 bg-brand-light p-4 font-bold text-brand-dark transition hover:border-brand-orange/40 hover:bg-white";

        if (external) {
          return (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className}>
              <Icon className="shrink-0 text-brand-orange" aria-hidden />
              <span className="text-sm leading-6">{label}</span>
            </a>
          );
        }

        return (
          <Link key={label} href={href} className={className}>
            <Icon className="shrink-0 text-brand-orange" aria-hidden />
            <span className="text-sm leading-6">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
