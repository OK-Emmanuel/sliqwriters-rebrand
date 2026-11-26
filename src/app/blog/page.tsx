import Image from "next/image";
import Link from "next/link";
import { CallToAction, Footer } from "@/components/footer";
import { Arrow, PageHero } from "@/components/ui";
import { getPosts, mediaUrl, publishedDate } from "@/lib/blog";
import { seo } from "@/lib/seo";
import { field } from "@/lib/copy";

type Query = { page?: string; category?: string; tag?: string };
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Query>;
}) {
  const query = await searchParams;
  const filtered = Boolean(query.category || query.tag);
  return {
    ...seo(
      "Blog",
      field("2.2", "Newsletter Subtitle"),
      !filtered && Number(query.page) > 1
        ? `/blog?page=${query.page}`
        : "/blog",
    ),
    ...(filtered ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<Query>;
}) {
  const query = await searchParams;
  const data = await getPosts(
    Object.fromEntries(
      Object.entries(query).filter(
        (entry): entry is [string, string] => typeof entry[1] === "string",
      ),
    ),
  );
  function pageUrl(page: number) {
    const params = new URLSearchParams({ ...query, page: String(page) });
    return `/blog?${params}`;
  }
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Blog"
          title={field("2.2", "Newsletter Headline")}
          description={field("2.2", "Newsletter Subtitle")}
        />
        <section className="section">
          <div className="container">
            <nav
              className="mb-12 flex flex-wrap gap-3"
              aria-label="Blog categories"
            >
              <Link
                className={`border px-5 py-3 text-xs ${!query.category ? "border-ink bg-ink text-white" : "border-line"}`}
                href="/blog"
              >
                Blog
              </Link>
              {data.categories.map((category) => (
                <Link
                  className={`border px-5 py-3 text-xs ${query.category === category.slug ? "border-ink bg-ink text-white" : "border-line"}`}
                  key={category.slug}
                  href={`/blog?category=${category.slug}`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            {data.invalid_filter && (
              <p role="status" className="mb-8 border-l-4 border-yellow pl-4">
                The requested category or tag could not be found. Showing all
                published posts instead.
              </p>
            )}
            {!data.invalid_filter && (query.category || query.tag) && (
              <p className="mb-8 text-sm">
                Showing archive:{" "}
                {query.category &&
                  `Category - ${data.categories.find((item) => item.slug === query.category)?.name || query.category}`}{" "}
                {query.tag && `Tag - ${query.tag}`}{" "}
                <Link className="underline" href="/blog">
                  (Clear filters)
                </Link>
              </p>
            )}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.posts.map((post) => (
                <article
                  className="flex flex-col border border-line bg-white"
                  key={post.slug}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="relative aspect-[1.5] overflow-hidden bg-[#e8eadf]">
                      <Image
                        src={mediaUrl(post.featured_image)}
                        alt=""
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 90vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-5 text-[10px] text-muted">
                      {publishedDate(post.published_at || post.updated_at)} ·
                      Views({post.views})
                    </p>
                    <h2 className="text-2xl! leading-snug!">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    {post.excerpt && (
                      <p className="mt-5 text-sm text-muted">{post.excerpt}</p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-link mt-auto self-start pt-7"
                    >
                      Read More
                      <span className="sr-only">: {post.title}</span>
                      <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {!data.posts.length && (
              <p role="status">No published posts found.</p>
            )}
            {data.pages > 1 && (
              <nav
                aria-label="Blog pagination"
                className="mt-12 flex flex-wrap items-center gap-5"
              >
                {data.page > 1 && (
                  <Link href={pageUrl(data.page - 1)}>← Previous page</Link>
                )}
                <span>
                  Page {data.page} of {data.pages}
                </span>
                {data.page < data.pages && (
                  <Link href={pageUrl(data.page + 1)}>Next page →</Link>
                )}
              </nav>
            )}
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
