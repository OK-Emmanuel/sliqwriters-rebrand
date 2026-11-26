import Link from "next/link";
import { CallToAction, Footer } from "@/components/footer";
import { Process, ServiceOffers } from "@/components/sections";
import { Arrow, PageHero, Rich } from "@/components/ui";
import { academyUrl, field, fields } from "@/lib/copy";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Services",
  field("6.1", "Section Introduction"),
  "/services",
);

export default function Services() {
  const titles = fields("6.1", "Card Title");
  const descriptions = fields("6.1", "Description");
  const routes = ["/marketing", "/copywriting", "/linkedin-growth", academyUrl];
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow={field("6.1", "Section Eyebrow")}
          title={field("6.1", "Section Title")}
          description={field("6.1", "Section Introduction")}
        />
        <section className="section">
          <div className="container">
            <ServiceOffers />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {titles.map((title, i) => (
                <article className="service-card bg-white" key={title}>
                  <span className="mb-12 text-xs text-muted">0{i + 3}</span>
                  <h3>{title}</h3>
                  <Rich>{descriptions[i]}</Rich>
                  <Link className="text-link" href={routes[i]}>
                    {i === 3 ? "Explore Academy" : "Read More"}
                    {i !== 3 && <span className="sr-only">: {title}</span>}
                    <Arrow />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Process />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
