import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/industries", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
