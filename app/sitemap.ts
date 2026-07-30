import type { MetadataRoute } from "next";
import { internalRoutes, site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return internalRoutes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date("2026-07-24"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
