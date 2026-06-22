"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background,box-shadow,border-color] duration-300 ${
        scrolled ? "nav-scrolled" : "border-white/20 bg-white/90"
      }`}
      style={{ boxShadow: scrolled ? "0 12px 40px rgba(14, 40, 82, 0.08)" : undefined }}
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"
        style={{ opacity: shadowOpacity }}
      />
      <nav className="container-enterprise flex h-20 items-center justify-between" aria-label="Primary">
        <Link href="/" className="focus-ring rounded-lg" aria-label={`${site.name} home`}>
          <Logo className="h-14 w-auto" priority />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-semibold transition hover:text-brand-orange ${
                pathname === item.href ? "text-brand-orange" : "text-brand-dark"
              }`}
            >
              {item.label}
              {pathname === item.href ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-brand-orange"
                />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="button-ripple rounded-md bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#c45f21]"
          >
            Get In Touch
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
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-white lg:hidden"
        >
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
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-brand-orange px-4 py-3 text-center font-bold text-white"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
