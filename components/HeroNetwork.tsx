"use client";

import dynamic from "next/dynamic";

const ElephantNetwork = dynamic(() => import("@/components/ElephantNetwork").then((mod) => mod.ElephantNetwork), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-enterprise-gradient" />,
});

export function HeroNetwork() {
  return <ElephantNetwork />;
}
