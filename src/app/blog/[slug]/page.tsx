import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { CallToAction, Footer } from "@/components/footer";
import { JsonLd, PageHero } from "@/components/ui";
import { getPost, mediaUrl, publishedDate, safeArticle } from "@/lib/blog";
import { GatewayError } from "@/lib/gateway";
import { seo } from "@/lib/seo";
import { PostViews } from "@/components/post-views";

async function resolvePost(slug: string) {
  let result;
  try {
    result = await getPost(slug);
  } catch (error) {
    if (error instanceof GatewayError && error.status === 404) notFound();
    throw error;
  }
  if ("redirect" in result)
    permanentRedirect(`/blog/${encodeURIComponent(result.redirect)}`);
  return result.post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  const meta = seo(
    post.meta_title || post.title,
    post.meta_description || post.excerpt || post.title,
    `/blog/${slug}`,
  );
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      images: [mediaUrl(post.featured_image)],
    },
    twitter: { ...meta.twitter, images: [mediaUrl(post.featured_image)] },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  const url = new URL(
    `/blog/${post.slug}`,
    process.env.SITE_URL || "https://sliqwriters.com",
  ).href;
  return (
    <>
      <main id="main">
        <PageHero eyebrow={post.category_name || "Blog"} title={post.title} />
        <article className="section">
          <div className="container max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex gap-3 text-xs text-muted"
            >
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
            </nav>
            <div className="mb-10 flex flex-wrap gap-5 border-y border-line py-5 text-xs text-muted">
              <span>By {post.author_name}</span>
              <time>{publishedDate(post.published_at || post.updated_at)}</time>
              <PostViews
                key={post.slug}
                slug={post.slug}
                initial={post.views}
              />
            </div>
            {post.featured_image && (
              <div className="relative mb-12 aspect-video">
                <Image
                  src={mediaUrl(post.featured_image)}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div
              className="rich break-words"
              dangerouslySetInnerHTML={{ __html: safeArticle(post.content) }}
            />
            <div className="mt-12 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Link
                  className="border border-line px-4 py-2 text-xs"
                  key={tag.slug}
                  href={`/blog?tag=${tag.slug}`}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
            <Link className="text-link mt-10" href="/blog">
              Back to Blog
            </Link>
          </div>
        </article>
        <CallToAction />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.meta_description || post.excerpt,
            datePublished: (post.published_at || post.updated_at).replace(
              " ",
              "T",
            ),
            dateModified: post.updated_at.replace(" ", "T"),
            author: { "@type": "Person", name: post.author_name },
            image: mediaUrl(post.featured_image),
            mainEntityOfPage: url,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
