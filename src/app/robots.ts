import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
    sitemap: new URL(
      "/sitemap.xml",
      process.env.SITE_URL || "https://sliqwriters.com",
    ).href,
  };
}
