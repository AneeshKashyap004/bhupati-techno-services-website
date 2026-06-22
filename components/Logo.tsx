"use client";

import Image from "next/image";
import { site } from "@/data/site";

export function Logo({
  className = "h-12 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={site.logos.logo}
      alt={site.name}
      width={200}
      height={80}
      className={className}
      priority={priority}
    />
  );
}
