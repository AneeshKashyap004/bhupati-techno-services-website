import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-brand-gray">{description}</p> : null}
    </div>
  );
}
