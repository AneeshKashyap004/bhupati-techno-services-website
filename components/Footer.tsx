import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(216,106,39,0.12),transparent_35%)]" aria-hidden />
      <div className="container-enterprise relative grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-16 w-auto rounded-lg" />
          <p className="mt-4 text-sm text-white/65">Enterprise technology with elephant-grade reliability.</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            IT infrastructure, cybersecurity, cloud, and managed services for organizations that need stable,
            intelligent technology foundations.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">Company</h3>
          <nav className="grid gap-3" aria-label="Footer company links">
            {navItems.map((item) => (
              <Link className="footer-link text-sm text-white/78 hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">Services</h3>
          <nav className="grid gap-3" aria-label="Footer service links">
            {services.slice(0, 5).map((service) => (
              <Link className="footer-link text-sm text-white/78 hover:text-white" href={`/services#${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">Contact</h3>
          <address className="grid gap-3 text-sm not-italic text-white/78">
            <a className="footer-link hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              {site.phone}
            </a>
            <a className="footer-link hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="footer-link hover:text-white" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp: +91 98454 77055
            </a>
            <a className="footer-link hover:text-white" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              {site.location}
            </a>
          </address>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <div className="container-enterprise flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bhupati Techno Services. All rights reserved.</p>
          <p>Enterprise IT services in Bangalore — infrastructure, security, cloud &amp; managed operations.</p>
        </div>
      </div>
    </footer>
  );
}
