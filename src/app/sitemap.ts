import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us/",
    "/practice-areas/",
    "/testimonials/",
    "/contact/",
    "/privacy-policy/",
    "/terms/",
    "/cookie-policy/",
    "/complaints/",
    "/faq/",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
