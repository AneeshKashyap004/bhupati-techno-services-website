import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Bhupati Techno",
    description:
      "Enterprise IT infrastructure, cybersecurity, cloud, and managed services in Bangalore.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E2852",
    theme_color: "#163A73",
    icons: [
      {
        src: site.logos.logo,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
