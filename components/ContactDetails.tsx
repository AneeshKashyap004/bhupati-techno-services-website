"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

const contactItems = [
  { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: site.location, href: site.mapsUrl, external: true },
];

export function ContactDetails() {
  return (
    <div className="mt-8 grid gap-4">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="button-ripple inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-center font-bold text-white shadow-soft transition hover:bg-[#1ebe57]"
      >
        <MessageCircle aria-hidden />
        Message on WhatsApp (+91 98454 77055)
      </a>
      {contactItems.map(({ icon: Icon, label, href, external }) => {
        const className =
          "flex items-center gap-4 rounded-lg border border-slate-200 bg-brand-light p-4 font-bold text-brand-dark transition hover:border-brand-orange/40 hover:bg-white";

        return (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={className}
          >
            <Icon className="shrink-0 text-brand-orange" aria-hidden />
            <span className="text-sm leading-6">{label}</span>
          </a>
        );
      })}
    </div>
  );
}
