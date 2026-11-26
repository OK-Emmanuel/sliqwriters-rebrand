import Link from "next/link";
import { CaseCards } from "@/components/case-cards";
import { Footer, CallToAction } from "@/components/footer";
import { PageHero } from "@/components/ui";
import { cases } from "@/lib/cases";
import { field } from "@/lib/copy";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Case Studies",
  field("14.1", "Meta Description"),
  "/case-studies",
);

export default async function CaseStudies({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; industry?: string }>;
}) {
  const query = await searchParams;
  const stories = cases.filter(
    (story) =>
      (!query.service ||
        story.service.toLowerCase() === query.service.toLowerCase()) &&
      (!query.industry || story.industry === query.industry),
  );
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow={field("14.1", "Hero Eyebrow")}
          title={field("14.1", "Hero Headline")}
          description={field("14.1", "Hero Subhead")}
        />
        <section className="section">
          <div className="container">
            <form className="mb-12 flex flex-wrap items-center gap-4">
              <label className="sr-only" htmlFor="service">
                Service
              </label>
              <select
                className="min-h-12 border border-line bg-white px-5 text-sm"
                id="service"
                name="service"
                defaultValue={query.service ?? ""}
              >
                <option value="">All services</option>
                <option value="growthwright">Growthwright</option>
                <option value="voicewright">Voicewright</option>
              </select>
              <label className="sr-only" htmlFor="industry">
                Industry
              </label>
              <select
                className="min-h-12 max-w-full border border-line bg-white px-5 text-sm"
                name="industry"
                id="industry"
                defaultValue={query.industry ?? ""}
              >
                <option value="">All industries</option>
                {cases.map((story) => (
                  <option key={story.industry}>{story.industry}</option>
                ))}
              </select>
              <button className="button button-dark">Filter stories →</button>
              <Link href="/case-studies" className="text-link">
                Reset
              </Link>
            </form>
            {stories.length ? (
              <CaseCards stories={stories} />
            ) : (
              <p>
                No stories match these filters yet. Try another combination or
                explore the full library.
              </p>
            )}
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
