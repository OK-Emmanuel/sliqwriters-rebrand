import { notFound } from "next/navigation";
import { CallToAction, Footer } from "@/components/footer";
import { PageHero, Rich } from "@/components/ui";
import { cases } from "@/lib/cases";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = cases.find((item) => item.slug === slug);
  if (!story) notFound();
  return seo(story.title, story.excerpt, `/case-studies/${slug}`);
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = cases.find((item) => item.slug === slug);
  if (!story) notFound();
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow={`${story.service} · ${story.industry}`}
          title={story.title}
          description={story.excerpt}
        />
        <section className="section">
          <div className="container">
            <div className="mb-14 flex flex-wrap justify-between gap-6 border-b border-line pb-7 text-sm">
              <p>{story.client}</p>
              <p>{story.geography}</p>
            </div>
            <div className="mb-18 grid grid-cols-2 gap-7 lg:grid-cols-4">
              {story.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t-4 border-yellow pt-5"
                >
                  <strong className="text-4xl font-semibold tracking-tight">
                    {metric.value}
                  </strong>
                  <p className="mt-3 text-xs text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
            <Rich className="mx-auto max-w-3xl text-muted">
              {story.narrative}
            </Rich>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
