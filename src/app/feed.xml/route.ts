import { getPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";
const xml = (value: string) =>
  value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!,
  );
export async function GET() {
  const { posts } = await getPosts();
  const base = process.env.SITE_URL || "https://sliqwriters.com";
  const feed = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Blog | SLiQWriterS</title><link>${xml(base)}/blog</link><description>Marketing, business, and writing insights. Sent occasionally.</description>${posts.map((post) => `<item><title>${xml(post.title)}</title><link>${xml(base)}/blog/${xml(post.slug)}</link><guid>${xml(base)}/blog/${xml(post.slug)}</guid><description>${xml(post.excerpt || "")}</description><pubDate>${new Date((post.published_at || post.updated_at).replace(" ", "T")).toUTCString()}</pubDate></item>`).join("")}</channel></rss>`;
  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
