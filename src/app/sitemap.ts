import type { MetadataRoute } from "next";
import { getSitemapPosts } from "@/lib/blog";
import { cases } from "@/lib/cases";

export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.SITE_URL || "https://sliqwriters.com";
  const { posts } = await getSitemapPosts();
  return [
    ...[
      "",
      "about",
      "services",
      "blog",
      "contact",
      "growthwright",
      "voicewright",
      "copywriting",
      "marketing",
      "linkedin-growth",
      "branding",
      "mentorship",
      "founder",
      "faq",
      "case-studies",
    ].map((path) => ({ url: new URL(`/${path}`, base).href })),
    ...cases.map((story) => ({
      url: new URL(`/case-studies/${story.slug}`, base).href,
    })),
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, base).href,
      lastModified: new Date(post.updated_at.replace(" ", "T")),
    })),
  ];
}
