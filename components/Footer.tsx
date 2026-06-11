import Link from "next/link";
import { navItems, services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-enterprise grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-xl font-black text-brand-dark">B</span>
            <div>
              <p className="font-heading text-xl font-extrabold">Bhupati Techno Services</p>
              <p className="text-sm text-white/65">Enterprise technology with elephant-grade reliability.</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            IT infrastructure, cybersecurity, cloud, and managed services for organizations that need stable,
            intelligent technology foundations.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">Company</h3>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link className="text-sm text-white/78 hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">Services</h3>
          <div className="grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link className="text-sm text-white/78 hover:text-white" href={`/services#${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">Contact</h3>
          <div className="grid gap-3 text-sm text-white/78">
            <a href={`tel:${site.phone}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-enterprise flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bhupati Techno Services. All rights reserved.</p>
          <p>Built for secure, scalable, enterprise operations.</p>
        </div>
      </div>
    </footer>
  );
}
