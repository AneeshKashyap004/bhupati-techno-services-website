"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-xl"
    >
      <nav className="container-enterprise flex h-20 items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-enterprise-gradient text-xl font-black text-white shadow-soft">
            B
          </span>
          <span>
            <span className="block font-heading text-lg font-extrabold leading-none text-brand-dark">Bhupati</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gray">Techno Services</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-brand-orange ${
                pathname === item.href ? "text-brand-orange" : "text-brand-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={site.calendly}
            className="button-ripple rounded-md bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#c45f21]"
          >
            Schedule Consultation
          </Link>
        </div>

        <button
          className="focus-ring rounded-md p-2 text-brand-dark lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-enterprise grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-semibold text-brand-dark hover:bg-brand-light"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.calendly}
              className="mt-2 rounded-md bg-brand-orange px-4 py-3 text-center font-bold text-white"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
