import "server-only";
import { cache } from "react";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";
import { gateway } from "./gateway";
import { mediaUrl } from "./media";
export { mediaUrl } from "./media";

const taxonomy = z.object({ name: z.string(), slug: z.string() });
const card = z.object({
  id: z.coerce.number(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().nullable(),
  featured_image: z.string().nullable(),
  views: z.coerce.number(),
  published_at: z.string().nullable(),
  updated_at: z.string(),
  category_name: z.string().nullable(),
  category_slug: z.string().nullable(),
});
export type PostCard = z.infer<typeof card>;
export const article = card.extend({
  content: z.string(),
  meta_title: z.string().nullable(),
  meta_description: z.string().nullable(),
  author_name: z.string(),
  tags: z.array(taxonomy),
});
const listing = z.object({
  posts: z.array(card),
  total: z.number(),
  page: z.number(),
  pages: z.number(),
  invalid_filter: z.boolean(),
  categories: z.array(taxonomy),
});
export const getPosts = (query: Record<string, string> = {}) =>
  gateway("posts", listing, query);
export const getPost = cache((slug: string) =>
  gateway(
    "post",
    z.union([
      z.object({ post: article }),
      z.object({ redirect: z.string().regex(/^[a-z0-9-]+$/i) }),
    ]),
    { slug },
  ),
);
export const getSitemapPosts = () =>
  gateway(
    "sitemap",
    z.object({
      posts: z.array(z.object({ slug: z.string(), updated_at: z.string() })),
    }),
  );

export function safeArticle(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "figure",
      "figcaption",
    ],
    allowedAttributes: {
      a: ["href", "title"],
      img: ["src", "alt", "width", "height", "loading"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: { img: ["http", "https"] },
    allowProtocolRelative: false,
    transformTags: {
      img: (_tagName, attrs) => ({
        tagName: "img",
        attribs: {
          ...attrs,
          src: mediaUrl(attrs.src || null),
          loading: "lazy",
          alt: attrs.alt || "",
        },
      }),
    },
  });
}

export function publishedDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value.replace(" ", "T")));
}
