"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="premium-hero relative overflow-hidden pt-32 text-white">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,40,82,0.94),rgba(14,40,82,0.82),rgba(22,58,115,0.75))]" />
        </>
      ) : (
        <>
          <div className="hero-orb hero-orb-orange -left-20 top-10 h-72 w-72" aria-hidden />
          <div className="hero-orb hero-orb-blue right-0 top-1/3 h-96 w-96" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,106,39,0.18),transparent_28%),linear-gradient(135deg,rgba(14,40,82,0.98),rgba(22,58,115,0.92))]" />
        </>
      )}
      <div className={`container-enterprise relative z-10 py-20 ${imageSrc ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-4xl font-heading text-5xl font-extrabold leading-tight md:text-7xl"
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl"
            >
              {description}
            </motion.p>
          ) : null}
          {children}
        </div>
        {imageSrc ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="image-frame relative hidden aspect-[4/3] overflow-hidden rounded-xl border border-white/20 shadow-soft lg:block"
          >
            <Image src={imageSrc} alt={imageAlt ?? ""} fill className="object-cover" sizes="(max-width: 1024px) 0vw, 480px" />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
