"use client";

import Image from "next/image";
import { Reveal } from "@/components/Motion";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  overlay?: boolean;
  priority?: boolean;
  reveal?: boolean;
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
};

export function SectionImage({
  src,
  alt,
  className = "",
  aspect = "video",
  overlay = false,
  priority = false,
  reveal = true,
}: SectionImageProps) {
  const frame = (
    <div className={`image-frame group relative overflow-hidden rounded-xl shadow-soft ${aspectClasses[aspect]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="object-cover transition duration-700 ease-out group-hover:scale-105"
      />
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" aria-hidden />
      ) : null}
    </div>
  );

  if (!reveal) return frame;
  return <Reveal className="h-full w-full">{frame}</Reveal>;
}

export function ImageBadge({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-full border-2 border-white shadow-soft ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="96px" />
    </div>
  );
}
